import { NgFor } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [NgFor],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  @Output() startClicked = new EventEmitter<void>(); 

  onStartClick() {   
    this.startClicked.emit();
  }

  data = [
    {
      title: '1+',
      subtitle: 'Years of Experience',
    },
    {
      title: '100%',
      subtitle: 'Success Rate',
    },
  ];
}
