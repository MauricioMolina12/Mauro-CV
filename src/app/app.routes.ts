import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Mauricio Molina · Portafolio',
  },
  {
    path: 'project/:slug',
    // Lazy loading: la página de detalle solo se descarga al navegar a un proyecto.
    loadComponent: () =>
      import('./pages/project-details/project-details.component').then(
        (m) => m.ProjectDetailsComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
