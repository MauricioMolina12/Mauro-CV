import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  afterNextRender,
  computed,
  Inject,
  Injectable,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';
import es from '../../../../public/assets/i18n/es.json';

export type SupportedLanguage = 'es' | 'en';

const SUPPORTED_LANGUAGES: readonly SupportedLanguage[] = ['es', 'en'];
const LANGUAGE_STORAGE_KEY = 'language';

/**
 * Fuente única de verdad para el idioma de la interfaz.
 *
 * Prioridad para el idioma inicial (cliente):
 *   1. Preferencia guardada en localStorage
 *   2. navigator.language (resuelto a 'es' | 'en')
 *   3. Fallback seguro: es
 *
 * SSR/SSG: el servidor siempre renderiza en español (no conoce la preferencia
 * del usuario); el primer render del cliente coincide con el SSR (sin mismatch
 * de hidratación) y después aplica el idioma detectado.
 */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly languageSignal = signal<SupportedLanguage>('es');

  /** Idioma actual (señal reactiva, lectura en templates con OnPush). */
  readonly language = this.languageSignal.asReadonly();

  readonly isSpanish = computed(() => this.language() === 'es');
  readonly isEnglish = computed(() => this.language() === 'en');

  constructor(
    private readonly translate: TranslateService,
    private readonly title: Title,
    private readonly meta: Meta,
    private readonly router: Router,
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PLATFORM_ID) private readonly platformId: Object
  ) {
    // Español por defecto, sembrado de forma síncrona: el primer render del
    // cliente coincide con el SSR sin depender de una petición HTTP.
    this.translate.setFallbackLang('es');
    this.translate.setTranslation('es', es, true);

    // En el cliente, tras el primer render (hidratación segura), se aplica el
    // idioma detectado. En el servidor nunca se ejecuta (permanece 'es').
    if (isPlatformBrowser(this.platformId)) {
      afterNextRender(() => {
        const initial = LanguageService.resolveInitialLanguage();
        this.languageSignal.set(initial);
        this.translate.use(initial);
      });
    }

    // SEO + <html lang>: se actualizan al cambiar de idioma y al navegar
    // (para reaplicar el título traducido tras el título de la ruta).
    this.translate.onLangChange.subscribe(() => this.syncSeo());
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe(() => this.syncSeo());
  }

  setLanguage(language: SupportedLanguage): void {
    if (!SUPPORTED_LANGUAGES.includes(language)) return;
    this.languageSignal.set(language);
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
      } catch {
        /* almacenamiento no disponible */
      }
    }
    this.translate.use(language);
  }

  toggleLanguage(): void {
    this.setLanguage(this.language() === 'es' ? 'en' : 'es');
  }

  private static resolveInitialLanguage(): SupportedLanguage {
    try {
      const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (stored === 'es' || stored === 'en') {
        return stored;
      }
    } catch {
      /* sin acceso a localStorage */
    }

    if (typeof navigator !== 'undefined' && navigator.language) {
      const lang = navigator.language.split('-')[0].toLowerCase();
      if (lang === 'es' || lang === 'en') {
        return lang;
      }
    }
    return 'es';
  }

  private syncSeo(): void {
    // Las páginas de proyecto tienen título/descripción propios (datos del CMS).
    if (this.router.url.startsWith('/project/')) return;

    const title = this.translate.instant('seo.title');
    const description = this.translate.instant('seo.description');

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.document.documentElement.setAttribute('lang', this.language());
  }
}
