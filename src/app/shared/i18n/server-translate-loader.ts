import { TranslateLoader, type TranslationObject } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import es from '../../../../public/assets/i18n/es.json';
import en from '../../../../public/assets/i18n/en.json';

const TRANSLATIONS: Record<string, TranslationObject> = { es, en };

/**
 * Loader del SERVIDOR (SSR/prerender): no hace HTTP; entrega las traducciones
 * empaquetadas en el bundle del servidor (evita requests a localhost durante
 * el prerender y garantiza el idioma en el HTML generado).
 */
export class ServerTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<TranslationObject> {
    return of(TRANSLATIONS[lang] ?? TRANSLATIONS['es']);
  }
}
