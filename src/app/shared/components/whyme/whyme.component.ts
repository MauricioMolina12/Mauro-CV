import { NgFor } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-whyme',
  standalone: true,
  imports: [NgFor],
  templateUrl: './whyme.component.html',
  styleUrls: ['./whyme.component.scss'],
})
export class WhymeComponent implements OnInit {
  ngOnInit(): void {}

  observer!: IntersectionObserver;
  @ViewChild('title') title!: ElementRef;

  ngAfterViewInit() {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        },
        { threshold: 0.2 } 
      );

      if (this.title) {
        this.observer.observe(this.title.nativeElement);
      }
    } else {
      // this.handleScroll();
    }
  }

  handleScroll = () => {
    if (this.title?.nativeElement instanceof HTMLElement) {
      const rect = this.title.nativeElement.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (isVisible) {
        this.title.nativeElement.classList.add('active');
      } else {
        this.title.nativeElement.classList.remove('active');
      }
    }
  };

  techs = [
    'assets/html.webp',
    'assets/css.png',
    'assets/js.png',
    'assets/angular.png',
    'assets/react.png',
    'assets/next.png',
    'assets/astro.png',
    'assets/flutter.png',
    'assets/ionic.png',
    'assets/Tailwind.jpg',
    'assets/figma.png',
  ]
}
