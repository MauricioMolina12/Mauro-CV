import { DOCUMENT, isPlatformBrowser, NgFor } from '@angular/common';
import {
  Component,
  EventEmitter,
  Inject,
  OnDestroy,
  OnInit,
  Output,
  PLATFORM_ID,
} from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [NgFor],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent implements OnInit, OnDestroy {
  @Output() startClicked = new EventEmitter<void>();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  jobs = ['Desarrollador Frontend', 'Diseñador UI/UX', 'Desarrollador Móvil'];
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

  onStartClick() {
    this.startClicked.emit();
  }

  start() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  }
}
