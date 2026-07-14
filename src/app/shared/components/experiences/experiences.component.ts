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
          description: 'Lideré el desarrollo, mantenimiento y evolución de Edutin Business, Edutin Affiliate y Edutin Institutions, implementando nuevas funcionalidades y optimizaciones enfocadas en el rendimiento, la escalabilidad y la experiencia de usuario. Integré arquitecturas basadas en microfrontends con módulos desarrollados por otros equipos y gestioné la comunicación con servicios mediante APIs REST y GraphQL. Además, trabajé de forma colaborativa con los equipos de Diseño UI/UX, Comercial, Project Management y Backend para convertir requerimientos de negocio en soluciones técnicas de alta calidad, aplicando buenas prácticas de desarrollo y asegurando la evolución continua de las plataformas en producción.'
        }
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
          description: 'Diseñé y desarrollé un nuevo sitio web corporativo de extremo a extremo, definiendo la experiencia e interfaz de usuario en Figma, validando propuestas con los equipos de marketing y dirección, e implementando la solución con Angular bajo una metodología Scrum, logrando una plataforma moderna, optimizada y alineada con los objetivos de negocio.'
        },
      ],
    },
    {
      company: 'Edutin Academy',
      role: 'Frontend & Mobile Developer · Instructor',
      time: 'Mayo 2024  - Diciembre 2024',
      logo: 'assets/logo-edutin.png',
      positions: [
        {
          title: '',
          description: 'Participé en el desarrollo y evolución de la aplicación móvil de Edutin utilizando Angular, Ionic y Kotlin, implementando nuevas funcionalidades que formaron parte de importantes lanzamientos del producto. Integré servicios mediante APIs REST y GraphQL, así como servicios de AWS, colaborando estrechamente con un equipo multidisciplinario bajo metodologías ágiles para entregar soluciones de alta calidad que contribuyeron a la mejora continua de la experiencia del usuario y al crecimiento de la plataforma.'
        },
        {
          title: 'Instructor y diseñador de cursos',
          description:
            'Diseñé y grabé cursos virtuales de tecnología junto a equipos multidisciplinarios de diseño instruccional y edición.',
          courses: [
            {
              title: 'Angular',
              image: 'assets/tech/angular.svg',
              slug: 'https://edutin.com/curso-de-angular',
            },
            {
              title: 'CSS',
              image: 'assets/tech/css3.svg',
              slug: 'https://edutin.com/curso-de-css3',
            },
            {
              title: 'Ionic',
              image: 'assets/tech/ionic.svg',
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
