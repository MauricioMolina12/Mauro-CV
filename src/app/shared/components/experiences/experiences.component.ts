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
      company: 'Desarrollador Frontend',
      time: `Enero 2025 - Junio 2025`,
      logo: 'assets/mercadatos.jpg',
      positions: [
        {
          title: '',
          description: `
          Lideré la mejora y rediseño del sitio web corporativo de la empresa, optimizando su estructura, accesibilidad y rendimiento. Utilicé Angular para implementar una nueva version más rápida y moderna, y diseñé interfaces atractivas y funcionales en figma, alineadas con la identidad de marca.
          `,
        },
        {
          title: '',
          description:
            'Adicionalmente, desarrollé un software interno en Angular que automatizó tareas claves y mejoró la eficiencia operative del equipo, aumentando la productividad y reduciendo tiempos de ejecución. Participé activamente en todas las etapas del desarrollo, desde la planificación hasta el despliegue, entregando soluciones escalables y orientadas a resultados.',
        },
      ],
    },
    {
      company: 'Edutin Academy',
      time: 'Enero 2023 - Diciembre 2024',
      logo: 'assets/logo-edutin.png',
      positions: [
        {
          title: 'Desarrollador frontend y Móvil Android',
          description: `Diseñé e implementé interfaces intuitivas y atractivas para aplicaciones web y móviles, aplicando principios sólidos de UX/UI y utilizando tecnologías como HTML, CSS, JavaScript y TypeScript. Desarrollé aplicaciones modernas con Angular, Ionic y Figma, garantizando alto rendimiento, adaptabilidad y una experiencia de usuario optimizada en distintos dispositivos.`,
        },
        {
          title: '',
          description:
            'Contribuí activamente en el desarrollo de nuevas funcionalidades, tanto en tecnologías híbridas como en código nativo para Android con Kotlin, integrando eficientemente SDKs de terceros y asegurando una comunicación fluida con servicios backend a través de APIs REST y GraphQL. Utilicé servicios en la nube como AWS Amplify, S3, CloudFront CDN, Cognito y AppSync, optimizando la arquitectura de integración para mayor escalabilidad y seguridad.',
        },
        {
          title: '',
          description:
            'Implementé pruebas unitarias con Jasmine y Karma, garantizando la calidad del código y la estabilidad de los componentes. Además, realicé seguimiento del rendimiento de features y métricas clave mediante reportes organizados en hojas de cálculo (Excel) para facilitar la toma de decisiones y priorización de mejoras.',
        },
        {
          title: '',
          description:
            'Gestioné el control de versiones con Git, colaborando de manera efectiva en entornos ágiles (Scrum/Kanban), y apliqué prácticas de accesibilidad y optimización para cumplir con los estándares actuales y mejorar la experiencia general del usuario.',
        },
        {
          title: 'Profesor y diseñador de cursos',
          description: `
          Diseñé, desarrollé y grabé cursos virtuales enfocados en temáticas tecnológicas, combinando conocimientos técnicos con estrategias pedagógicas para garantizar un aprendizaje efectivo. Colaboré estrechamente con equipos multidisciplinarios de diseño instruccional, edición audiovisual y revisión académica para producir contenido interactivo, dinámico y alineado con los estándares de calidad de la plataforma.          
          `,
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
        {
          title: '',
          description: 'Además, brindé soporte post-lanzamiento mediante la revisión de actividades, retroalimentación a estudiantes y corrección de errores en cursos habilitados, contribuyendo a la mejora continua de la experiencia educativa y la retención de estudiantes.'
        }
      ],
    },
  ];

  ngAfterViewInit(): void {
    this.utilsService.observeElements(this.items);
  }
}
