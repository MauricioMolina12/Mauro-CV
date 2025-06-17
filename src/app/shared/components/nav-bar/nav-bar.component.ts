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

  @Output() redirectSection = new EventEmitter<string>();

  items = [
    { name: 'Inicio', path: 'home' },
    { name: 'Acerca de mi', path: 'about' },
    { name: 'Habilidades', path: 'Skills' },
    { name: 'Proyectos', path: 'Projects' },
    { name: 'Educación', path: 'Educations' },
    { name: 'Experiencia', path: 'Experience' },
    { name: 'Contacto', path: 'Contact me' },
  ];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}

  @HostListener('document:scroll', ['$event'])
  onScroll(event: Event) {
    this.setBgColorNav(event);
    // this.getSection(event);
  }

  toggle() {
    this.isActive = !this.isActive;
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
    const sideBar = this.el.nativeElement.querySelector('.nav-side_bar');
    const burgerButton = this.el.nativeElement.querySelector('.burger');
    if (this.isActive) {
      this.renderer.removeClass(sideBar, 'active');
      this.renderer.removeClass(burgerButton, 'active');
      this.isActive = false;
    }
  }
}
