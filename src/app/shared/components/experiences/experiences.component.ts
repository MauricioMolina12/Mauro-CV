import { NgFor, NgIf } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent implements AfterViewInit {
  @ViewChildren('item') items!: QueryList<ElementRef>;

  constructor(private utilsService: UtilsService) {}

  experiences = [
    {
      company: 'Edutin Academy',
      role: 'Frontend Developer',
      time: 'Junio 2025 - Julio 2026',
      logo: 'assets/logo-edutin.png',
      positions: [
        {
          title: '',
          description:
            'Desarrollo y mantenimiento de interfaces web modernas con Angular, optimizando el rendimiento, la accesibilidad y la experiencia de usuario en producción.',
        },
        {
          title: '',
          description:
            'Colaboración en equipos ágiles para lanzar nuevas funcionalidades y mejorar de forma continua la plataforma educativa.',
        },
      ],
    },
    {
      company: 'Mercadatos',
      role: 'Desarrollador Frontend',
      time: 'Enero 2025 - Junio 2025',
      logo: 'assets/mercadatos.jpg',
      positions: [
        {
          title: '',
          description:
            'Lideré el rediseño del sitio corporativo con Angular y Figma, mejorando su estructura, rendimiento y accesibilidad.',
        },
        {
          title: '',
          description:
            'Desarrollé un software interno que automatizó tareas clave y aumentó la eficiencia operativa del equipo.',
        },
      ],
    },
    {
      company: 'Edutin Academy',
      role: 'Frontend & Mobile Developer · Instructor',
      time: 'Enero 2023 - Diciembre 2024',
      logo: 'assets/logo-edutin.png',
      positions: [
        {
          title: '',
          description:
            'Construí interfaces web y móviles con Angular, Ionic y Kotlin, integrando APIs REST/GraphQL y servicios de AWS (Amplify, S3, Cognito, AppSync).',
        },
        {
          title: '',
          description:
            'Implementé pruebas unitarias con Jasmine y Karma, trabajando con Git en entornos ágiles (Scrum/Kanban).',
        },
        {
          title: 'Instructor y diseñador de cursos',
          description:
            'Diseñé y grabé cursos virtuales de tecnología junto a equipos multidisciplinarios de diseño instruccional y edición.',
          courses: [
            {
              title: 'Angular',
              image: 'assets/angular.png',
              slug: 'https://edutin.com/curso-de-angular',
            },
            {
              title: 'CSS',
              image: 'assets/css.png',
              slug: 'https://edutin.com/curso-de-css3',
            },
            {
              title: 'Ionic',
              image: 'assets/ionic.png',
              slug: 'https://edutin.com/curso-de-ionic',
            },
          ],
        },
      ],
    },
  ];

  ngAfterViewInit(): void {
    this.utilsService.observeElements(this.items);
  }
}
