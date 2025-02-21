import { NgFor, NgStyle } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  QueryList,
  SimpleChanges,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-specilizing',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './specilizing.component.html',
  styleUrl: './specilizing.component.scss',
})
export class SpecilizingComponent {
  constructor(private el: ElementRef) {}

  @ViewChildren('chart') chart!: QueryList<ElementRef>;
  observer!: IntersectionObserver;
  @Input() startScrolling: boolean = false;

  ngAfterViewInit() {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
            } 
          });
        },
        { threshold: 0.2 }
      );
    }

    if (this.observer) {
      this.chart.forEach((element) => {
        this.observer.observe(element.nativeElement);
      });
    } else {
      // this.handleScroll();
      // window.addEventListener('scroll', this.handleScroll);
    }
  }

  // handleScroll = () => {
  //   this.chart.forEach((element) => {
  //     if (element?.nativeElement instanceof HTMLElement) {
  //       const rect = element.nativeElement.getBoundingClientRect();
  //       const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

  //       if (isVisible) {
  //         element.nativeElement.classList.add('in-view');
  //       } else {
  //         element.nativeElement.classList.remove('in-view');
  //       }
  //     }
  //   });
  // };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['startScrolling'] && this.startScrolling) {
      this.scrollToWrapper();
    }
  }

  scrollToWrapper() {
    const wrapperElement = document.querySelector('.wrapper');
    if (wrapperElement) {
      wrapperElement.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }
  jobs = [
    {
      title: 'Frontend Developer',
      description: 'I transform ideas into interactive web experiences. With a focus on HTML, CSS, JavaScript and frameworks like Angular, React, Astro and Next.js I ensure that each page is functional, fast and visually appealing.',
      pathImage: 'assets/front.webp',
    },
    {
      title: 'Mobile Developer',
      description: 'I develop native and cross-platform mobile applications using technologies such as React Native, Flutter and Ionic. My goal is to create intuitive and high-performance apps for iOS and Android.',
      pathImage: 'assets/mobile.webp',
    },
    {
      title: 'UI/UX Designer',
      description: 'I create experience-focused user interfaces, using design principles to make apps not only aesthetically pleasing, but also easy to use. I work with tools like Figma, Sketch, and Adobe XD to design memorable experiences.',
      pathImage: 'assets/design.webp',
    },
  ];
}
