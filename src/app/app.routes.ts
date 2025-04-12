import { Routes } from '@angular/router';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';

export const routes: Routes = [
    {
        path: 'project/:slug',
        component: ProjectDetailsComponent
    }
];
