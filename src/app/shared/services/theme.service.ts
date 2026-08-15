import { DOCUMENT } from '@angular/common';
import { computed, effect, Inject, Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'theme';

/**
 * Fuente única de verdad para el tema del sitio.
 *
 * Prioridad al resolver el tema inicial:
 *   1. Preferencia guardada en localStorage
 *   2. Preferencia del sistema (prefers-color-scheme)
 *   3. Fallback seguro (light)
 *
 * Seguridad SSR: se usa el token `DOCUMENT` de Angular (domino en el servidor),
 * nunca el `document` global de Node.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly themeSignal = signal<Theme>(ThemeService.resolveInitialTheme());
  private isFirstApplication = true;

  /** Tema actual (señal reactiva, lectura en templates con OnPush). */
  readonly theme = this.themeSignal.asReadonly();

  /** Conveniencia para templates: `themeService.isDark()`. */
  readonly isDark = computed(() => this.theme() === 'dark');

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    // Sincroniza con el tema que el script anti-FOUC aplicó en <head>
    // (en SSR/prerender el html ya trae data-theme="dark" por defecto).
    const applied = this.document.documentElement.getAttribute('data-theme');
    if (applied === 'light' || applied === 'dark') {
      this.themeSignal.set(applied);
    }

    // Aplica el tema al documento siempre que cambie (una sola fuente de verdad).
    effect(() => this.applyTheme(this.theme()));
    this.watchSystemPreference();
  }

  toggle(): void {
    this.setTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }

  setTheme(theme: Theme): void {
    this.themeSignal.set(theme);
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(THEME_STORAGE_KEY, theme);
      } catch {
        /* almacenamiento no disponible (p. ej. modo privado) */
      }
    }
  }

  private static resolveInitialTheme(): Theme {
    try {
      const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
    } catch {
      /* sin acceso a localStorage */
    }
    return ThemeService.getSystemTheme();
  }

  private static getSystemTheme(): Theme {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return 'dark';
    }
    return 'light';
  }

  private applyTheme(theme: Theme): void {
    const root = this.document.documentElement;
    root.setAttribute('data-theme', theme);

    // Transición suave solo durante cambios de tema posteriores a la carga
    // inicial (evita un flash en el primer render).
    if (typeof window === 'undefined' || this.isFirstApplication) {
      this.isFirstApplication = false;
      return;
    }
    if (root.classList.contains('theme-switching')) return;
    root.classList.add('theme-switching');
    window.setTimeout(() => root.classList.remove('theme-switching'), 240);
  }

  /**
   * Sigue los cambios del sistema SOLO si el usuario no eligió manualmente
   * (la preferencia manual tiene prioridad).
   */
  private watchSystemPreference(): void {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const onChange = (event: MediaQueryListEvent): void => {
      let hasManualPreference = false;
      try {
        hasManualPreference = window.localStorage.getItem(THEME_STORAGE_KEY) !== null;
      } catch {
        hasManualPreference = false;
      }
      if (!hasManualPreference) {
        this.themeSignal.set(event.matches ? 'dark' : 'light');
      }
    };

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', onChange);
    } else if (typeof media.addListener === 'function') {
      // Safari antiguo
      (media as MediaQueryList).addListener(onChange);
    }
  }
}
