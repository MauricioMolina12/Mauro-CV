import { Component, ElementRef, Inject, Input, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { SpecilizingComponent } from './shared/components/specilizing/specilizing.component';
import { FadeInComponent } from './shared/components/fade-in/fade-in.component';
import { DOCUMENT, isPlatformBrowser, NgIf } from '@angular/common';
import { WhymeComponent } from "./shared/components/whyme/whyme.component";
import { ProjectsComponent } from "./shared/components/projects/projects.component";
import { ExperiencesComponent } from "./shared/components/experiences/experiences.component";
import { ContactComponent } from "./shared/components/contact/contact.component";
import { EducationsComponent } from "./shared/components/educations/educations.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    NavBarComponent,
    BannerComponent,
    SpecilizingComponent,
    FadeInComponent,
    WhymeComponent,
    ProjectsComponent,
    ExperiencesComponent,
    ContactComponent,
    EducationsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'cv';

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  viewPresentation: boolean = true;
  start: boolean = false

  ngOnInit(): void {
    // if (isPlatformBrowser(this.platformId)) {
    //   this.renderer.setStyle(this.document.body, 'overflowY', 'hidden');
    //   setTimeout(() => {
    //     this.renderer.setStyle(this.document.body, 'overflowY', 'auto');
    //     this.viewPresentation = false;
    //   }, 4000);
    // }
  }

  onNavItemSelected(item: any) {
    const formattedId = item.toLowerCase().replace(/\s+/g, '-');
    const section = document.getElementById(formattedId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn('Sección no encontrada:', formattedId);
    }
  }

}
