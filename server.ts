import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, relative, resolve } from 'node:path';
import bootstrap from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  /**
   * Estrategia de cache:
   *  - Archivos con hash de contenido (main-*.js, styles-*.css, chunk-*.js,
   *    media/*...) → cache largo inmutable (la URL cambia con el contenido).
   *  - Assets de public/ sin hash (assets/**, logo, favicon, fuentes) →
   *    cache corto revalidable (pueden cambiar manteniendo la misma URL).
   *  - HTML / rutas SSR → sin cache (cambian en cada deploy).
   */
  const staticAssets = express.static(browserDistFolder, {
    index: false,
    setHeaders: (res, filePath) => {
      // Solo los bundles de Angular (main-*, chunk-*, styles-*, polyfills-*,
      // media/*) llevan hash de contenido y viven fuera de /assets/.
      const relativePath = relative(browserDistFolder, filePath).replace(/\\/g, '/');
      const isHashedBundle =
        !relativePath.startsWith('assets/') &&
        /-[A-Za-z0-9]{8,}\.[a-z0-9]+$/i.test(relativePath);
      res.setHeader(
        'Cache-Control',
        isHashedBundle
          ? 'public, max-age=31536000, immutable'
          : 'public, max-age=3600'
      );
    },
  });

  // Archivos con extensión (JS, CSS, imágenes, fuentes, PDF...).
  server.get('*.*', staticAssets);

  // Todas las rutas del SPA/SSR se renderizan sin cachear el HTML.
  server.get('**', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => {
        res.setHeader('Cache-Control', 'no-cache, no-store');
        res.send(html);
      })
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
