import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cv';

  constructor(private router: Router) {}

  /**
   * Navegación del nav-bar. Las secciones viven en el home:
   * si ya estamos en el home, hacemos scroll suave;
   * si estamos en otra ruta (p. ej. el detalle), volvemos al home y luego scrolleamos.
   */
  onNavItemSelected(item: string) {
    const id = item.toLowerCase().replace(/\s+/g, '-');
    const scrollToSection = () =>
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    const currentPath = this.router.url.split('#')[0].split('?')[0];
    if (currentPath === '/') {
      scrollToSection();
    } else {
      this.router.navigate(['/']).then(() => setTimeout(scrollToSection, 60));
    }
  }
}
