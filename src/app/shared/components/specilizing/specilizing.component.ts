import { NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  QueryList,
  SimpleChanges,
  ViewChildren,
} from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-specilizing',
  standalone: true,
  imports: [NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './specilizing.component.html',
  styleUrl: './specilizing.component.scss',
})
export class SpecilizingComponent {
  constructor(private el: ElementRef, private utilsService: UtilsService) {}

  @ViewChildren('chart') chart!: QueryList<ElementRef>;
  observer!: IntersectionObserver;
  @Input() startScrolling: boolean = false;

  ngAfterViewInit() {
    this.utilsService.observeElements(this.chart)
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
      key: 'frontend',
      title: 'Desarrollador Frontend',
      description:
        'Convierto ideas en experiencias web interactivas con HTML, CSS, JavaScript y frameworks como Angular, React, Astro y Next.js: rápidas, accesibles y visualmente atractivas.',
      tags: ['Angular', 'React', 'Next.js', 'TypeScript'],
    },
    {
      key: 'mobile',
      title: 'Desarrollador Móvil',
      description:
        'Desarrollo apps nativas y multiplataforma con Flutter, Ionic y React Native, enfocadas en rendimiento y una experiencia fluida en iOS y Android.',
      tags: ['Flutter', 'Ionic', 'Kotlin'],
    },
    {
      key: 'design',
      title: 'Diseñador UI/UX',
      description:
        'Diseño interfaces centradas en el usuario, aplicando principios de diseño para que los productos sean atractivos, coherentes y fáciles de usar.',
      tags: ['Figma', 'Prototipado', 'Design System'],
    },
  ];
}
