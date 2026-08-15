import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  OnDestroy,
  Output,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent implements AfterViewInit, OnDestroy {
  isActive = false;
  @ViewChildren('link') links!: QueryList<ElementRef>;
  @ViewChild('nav') nav!: ElementRef;

  /** Servicio de tema expuesto al template para el toggle. */
  readonly themeService = inject(ThemeService);

  /** Servicio de idioma expuesto al template para el selector ES/EN. */
  readonly languageService = inject(LanguageService);

  @Output() redirectSection = new EventEmitter<string>();

  items = [
    { name: 'nav.about', path: 'about' },
    { name: 'nav.skills', path: 'skills' },
    { name: 'nav.techs', path: 'techs' },
    { name: 'nav.projects', path: 'projects' },
    { name: 'nav.education', path: 'educations' },
    { name: 'nav.experience', path: 'experience' },
    { name: 'nav.contact', path: 'contact-me' },
  ];

  private scrollRafId = 0;
  private scrollspy?: IntersectionObserver;
  private routerSubscription?: Subscription;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    this.setupScrollspy();

    // Al navegar entre rutas las secciones del home se recrean: se re-observan.
    this.routerSubscription = this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        this.disconnectScrollspy();
        // En SSR (prerender) no hay requestAnimationFrame: se re-observa directo.
        if (typeof requestAnimationFrame !== 'undefined') {
          requestAnimationFrame(() => this.setupScrollspy());
        } else {
          this.setupScrollspy();
        }
      });
  }

  ngOnDestroy(): void {
    if (this.scrollRafId) cancelAnimationFrame(this.scrollRafId);
    this.disconnectScrollspy();
    this.routerSubscription?.unsubscribe();
  }

  /**
   * Scroll: a lo sumo una actualización por frame (throttle con rAF).
   * El scrollspy usa IntersectionObserver (reacciona por cruce de umbral,
   * no por evento) → trabajo mínimo en main thread.
   */
  @HostListener('document:scroll')
  onScroll(): void {
    if (this.scrollRafId) return;
    this.scrollRafId = requestAnimationFrame(() => {
      this.scrollRafId = 0;
      this.updateNavBackground();
    });
  }

  private updateNavBackground(): void {
    const navEl = this.nav?.nativeElement;
    if (!navEl) return;
    // window.scrollY no fuerza reflow (getBoundingClientRect del body sí).
    const scrolled = (window.scrollY || document.documentElement.scrollTop) > 20;
    this.renderer[scrolled ? 'addClass' : 'removeClass'](navEl, 'active');
  }

  private setupScrollspy(): void {
    if (typeof IntersectionObserver === 'undefined') return;

    const sections = this.items
      .map((item) => document.getElementById(item.path))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    this.scrollspy = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = this.items.findIndex(
              (item) => item.path === (entry.target as HTMLElement).id
            );
            this.setActiveItem(index);
          }
        }
      },
      // Banda horizontal cerca del top: solo la sección que la cruza queda activa.
      { rootMargin: '-15% 0px -75% 0px', threshold: 0 }
    );

    sections.forEach((section) => this.scrollspy!.observe(section));
  }

  private disconnectScrollspy(): void {
    this.scrollspy?.disconnect();
    this.scrollspy = undefined;
    this.clearActiveItems();
  }

  private setActiveItem(index: number): void {
    this.links?.forEach((link, i) => {
      this.renderer[i === index ? 'addClass' : 'removeClass'](
        link.nativeElement,
        'active-item'
      );
    });
  }

  private clearActiveItems(): void {
    this.links?.forEach((link) => {
      this.renderer.removeClass(link.nativeElement, 'active-item');
    });
  }

  toggle() {
    this.isActive = !this.isActive;
    const sideBar = this.el.nativeElement.querySelector('.nav-side_bar');

    if (this.isActive) {
      this.renderer.addClass(sideBar, 'active');
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      this.renderer.removeClass(sideBar, 'active');
      this.renderer.removeStyle(document.body, 'overflow');
    }
  }

  onNavItemClick(item: string) {
    this.redirectSection.emit(item);
    const sideBar = this.el.nativeElement.querySelector('.nav-side_bar');
    const burgerButton = this.el.nativeElement.querySelector('.burger');
    if (this.isActive) {
      this.renderer.removeClass(sideBar, 'active');
      this.renderer.removeClass(burgerButton, 'active');
      this.renderer.removeStyle(document.body, 'overflow');
      this.isActive = false;
    }
  }
}
