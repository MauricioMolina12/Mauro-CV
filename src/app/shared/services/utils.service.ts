import { ElementRef, Injectable, QueryList } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  observer!: IntersectionObserver;

  observeElements = (elements?: QueryList<ElementRef<HTMLElement>>) => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('parallax');
            }
          });
        },
        { threshold: 0.2 }
      );

      if (elements?.length) {
        elements.forEach((elRef) => {
          if (elRef.nativeElement) {
            this.observer.observe(elRef.nativeElement);
          }
        });
      }
    }
  };

  observeElement(
    element: HTMLElement,
    className = 'active',
    threshold = 0.2
  ): void {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(className);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold }
      );

      observer.observe(element);
    }
  }
}
