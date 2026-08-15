import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent implements OnInit, OnDestroy {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  jobs = [
    'Desarrollador Full Stack',
    'Diseñador UI/UX',
    'Desarrollador Móvil',
  ];
  currentJob = this.jobs[0];
  jobVisible = true;

  private index = 0;
  private intervalId: any;

  data = [
    {
      title: '3+',
      subtitle: 'Año de experiencia',
    },
  ];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = setInterval(() => this.rotateJob(), 3200);
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private rotateJob(): void {
    this.jobVisible = false;
    setTimeout(() => {
      this.index = (this.index + 1) % this.jobs.length;
      this.currentJob = this.jobs[this.index];
      this.jobVisible = true;
    }, 400);
  }

  start() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  }
}
