import { DOCUMENT, NgFor } from '@angular/common';
import { Component, EventEmitter, Inject, Output } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [NgFor],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  @Output() startClicked = new EventEmitter<void>();

  constructor(@Inject(DOCUMENT) private document: Document) {}

  onStartClick() {
    this.startClicked.emit();
  }

  data = [
    {
      title: '1+',
      subtitle: 'Año de experiencia',
    },
  ];


  start() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  }

}
