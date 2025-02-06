import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { SpecilizingComponent } from './shared/components/specilizing/specilizing.component';
import { FadeInComponent } from './shared/components/fade-in/fade-in.component';
import { NgIf } from '@angular/common';
import { WhymeComponent } from "./shared/components/whyme/whyme.component";

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
    WhymeComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'cv';

  viewPresentation: boolean = true;
  start: boolean = false;

  ngOnInit(): void {
    // document.body.style.overflowY = 'hidden';
    // setTimeout(() => {
    //   document.body.style.overflowY = 'auto';
    //   this.viewPresentation = false;
    // }, 4000);
  }

  onStartClick() {
    this.start = true;
  }
}
