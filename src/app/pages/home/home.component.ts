import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/components/banner/banner.component';
import { WhymeComponent } from '../../shared/components/whyme/whyme.component';
import { SpecilizingComponent } from '../../shared/components/specilizing/specilizing.component';
import { TechnologiesComponent } from '../../shared/components/technologies/technologies.component';
import { ProjectsComponent } from '../../shared/components/projects/projects.component';
import { EducationsComponent } from '../../shared/components/educations/educations.component';
import { ExperiencesComponent } from '../../shared/components/experiences/experiences.component';
import { ContactComponent } from '../../shared/components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    WhymeComponent,
    SpecilizingComponent,
    TechnologiesComponent,
    ProjectsComponent,
    EducationsComponent,
    ExperiencesComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  start = false;
}
