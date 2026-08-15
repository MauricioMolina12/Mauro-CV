import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { TranslateLoader } from '@ngx-translate/core';
import { appConfig } from './app.config';
import { ServerTranslateLoader } from './shared/i18n/server-translate-loader';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    // En SSR/prerender las traducciones provienen del bundle (sin HTTP).
    { provide: TranslateLoader, useClass: ServerTranslateLoader },
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
