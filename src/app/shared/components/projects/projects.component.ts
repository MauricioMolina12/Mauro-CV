import { NgFor } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  @ViewChild('carouselWrapper', { static: false }) carouselWrapper!: ElementRef;

  cards = [
    {
      title: 'App Edutin Academy',
      slug: 'app_edutin_academy',
      description: 'I was part of this project, in which I built several important features and modules of the app.',
      image: 'assets/appedutin.png'
    },
    {
      title: 'Renta GO',
      slug: 'renta_go',
      description: 'I was part of this project, in which I built several important features and modules of the app.',
      image: 'assets/rentago.jpg'
    },
    {
      title: 'UNILIBRE',
      slug: 'unilibre',
      description: 'I was part of this project, in which I built several important features and modules of the app.',
      image: 'assets/unilibre.jpg'
    },
    {
      title: 'My Security',
      slug: 'my_security',
      description: 'I was part of this project, in which I built several important features and modules of the app.',
      image: 'assets/mysecurity.jpg'
    },
    {
      title: 'My portfolio',
      slug: '',
      description: 'This is my own portfolio',
      image: 'assets/cv.png'
    },
  ];

  scrollCarousel(direction: number) {
    if (this.carouselWrapper?.nativeElement) {
      const cardWidth = this.carouselWrapper.nativeElement.children[0].offsetWidth + 16;
      this.carouselWrapper.nativeElement.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
    }
  }
}
