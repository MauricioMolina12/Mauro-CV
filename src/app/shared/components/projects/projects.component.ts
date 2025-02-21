import { NgFor } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  @ViewChild('carouselWrapper', { static: false }) carouselWrapper!: ElementRef;

  cards = [
    {
      title: 'App Edutin Academy',
      description: 'I was part of this project, in which I built several important features and modules of the app.',
      image: 'assets/appedutin.png'
    },
    {
      title: 'Renta GO',
      description: 'I was part of this project, in which I built several important features and modules of the app.',
      image: 'assets/rentago.jpg'
    },
    {
      title: 'UNILIBRE',
      description: 'I was part of this project, in which I built several important features and modules of the app.',
      image: 'assets/unilibre.jpg'
    },
    {
      title: 'My Security',
      description: 'I was part of this project, in which I built several important features and modules of the app.',
      image: 'assets/mysecurity.jpg'
    },
    {
      title: 'Oceana',
      description: 'I was part of this project, in which I built several important features and modules of the app.',
      image: 'assets/oceana.jpg'
    },
    {
      title: 'Neighbornet',
      description: 'I was part of this project, in which I built several important features and modules of the app.',
      image: 'assets/neighbornet.jpg'
    },
  ];

  scrollCarousel(direction: number) {
    if (this.carouselWrapper?.nativeElement) {
      const cardWidth = this.carouselWrapper.nativeElement.children[0].offsetWidth + 16;
      this.carouselWrapper.nativeElement.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
    }
  }
}
