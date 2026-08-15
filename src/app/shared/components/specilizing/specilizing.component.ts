import { NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
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
export class SpecilizingComponent implements AfterViewInit {
  constructor(private utilsService: UtilsService) {}

  @ViewChildren('chart') chart!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.utilsService.observeElements(this.chart);
  }

  jobs = [
    {
      key: 'fullstack',
      title: 'Desarrollador Full Stack',
      description:
        'Desarrollo aplicaciones web completas, desde interfaces modernas y accesibles hasta APIs, lógica de negocio, bases de datos y despliegues reproducibles.',
      tags: ['Angular', 'Java', 'Spring Boot', 'Docker'],
    },
    {
      key: 'mobile',
      title: 'Desarrollador Móvil',
      description:
        'Desarrollo aplicaciones móviles multiplataforma y nativas con Flutter, Ionic y Kotlin, enfocadas en rendimiento y una experiencia fluida en iOS y Android.',
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
