import { NgFor } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent implements OnInit {
  isActive = false;
  @ViewChildren('link') links!: QueryList<ElementRef>;
  @ViewChild('nav') nav!: ElementRef;
  items = ['home', 'about', 'Skills', 'Experience', 'Contact me'];
  @Output() redirectSection = new EventEmitter<string>();

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void { }

  @HostListener('document:scroll', ['$event'])
  onScroll(event: Event) {
    this.setBgColorNav(event);
    // this.getSection(event);
  }

  toggle() {
    this.isActive = !this.isActive;
    const button = this.el.nativeElement.querySelector('.toggle-btn');
    const sideBar = this.el.nativeElement.querySelector('.nav-side_bar');

    if (this.isActive) {
      this.renderer.addClass(sideBar, 'active');
    } else {
      this.renderer.removeClass(sideBar, 'active');
    }
  }

  setBgColorNav(e: Event) {
    const rect = document.body.getBoundingClientRect();
    if (rect.top < 20) {
      this.renderer.addClass(this.nav.nativeElement, 'active');
    } else {
      this.renderer.removeClass(this.nav.nativeElement, 'active');
    }
  }

  onNavItemClick(item: string) {
    this.redirectSection.emit(item); 
  }

  // getSection(e: Event) {
  //   this.links.forEach((element: ElementRef, index: number) => {
  //     const rect = document.body.getBoundingClientRect();
  //     const threshold = this.getThresholdForElement(index);
  //     if (this.isElementInView(rect, threshold)) {
  //       this.renderer.addClass(element.nativeElement, 'active');
  //     } else {
  //       this.renderer.removeClass(element.nativeElement, 'active');
  //     }
  //   });
  // }

  // getThresholdForElement(index: number): number {
  //   switch (index) {
  //     case 0:
  //       return 0;
  //     case 1:
  //       return -923.2000122070312;
  //     default:
  //       return 0;
  //   }
  // }

  // isElementInView(rect: DOMRect, threshold: number): boolean {
  //   return rect.top >= threshold;
  // }

}
