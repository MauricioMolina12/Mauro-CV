import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  experiences = [
    {
      company: 'Mercadatos SAS',
      time: 'April 2025 - Present',
      logo: 'assets/mercadatos.jpg',
      positions: [
        {
          title: 'Ingeniero de sistemas',
          description: `          
          Realicé mantenimiento preventivo de los equipos de cómputo de la empresa, mejorando su rendimiento y prolongando su vida útil y posteriormente laboré y documenté hojas de vida técnicas para cada equipo, registrando especificaciones, estado de hardware, software instalado y observaciones técnicas          `,
        },
        {
          title: '',
          description: 'Actualmente lidero el desarrollo del nuevo sitio web institucional utilizando Angular, con enfoque en diseño moderno, responsivo y centrado en la experiencia del usuario.          ',
        },
      ],
    },
    {
      company: 'Edutin Academy',
      time: 'Abril 2024 - Diciembre 2024 (9 Meses)',
      logo: 'assets/logo-edutin.png',
      positions: [
        {
          title: 'Desarrollador frontend y Móvil Android',
          description: `Diseñé y desarrollé aplicaciones modernas con Angular, Figma e Ionic, garantizando un alto rendimiento y adaptabilidad en múltiples dispositivos. Desarrollé funcionalidades nativas para Android utilizando Kotlin como lenguaje principal. Integré eficientemente las API REST y GraphQL para optimizar el intercambio de datos en tiempo real, mejorar la escalabilidad y cumplir los objetivos de negocio. Gestioné el control de versiones con Git, colaborando con equipos multidisciplinares en entornos ágiles para garantizar entregas puntuales y de alta calidad. Además, implementé estrategias de accesibilidad y optimización para alinear los productos con los estándares actuales y mejorar la experiencia del usuario final.`,
        },
        {
          title: 'Profesor y diseñador de cursos',
          description: `Creé, desarrollé y grabé nuevos cursos para Edutin Academy. Trabajé en estrecha colaboración con equipos multidisciplinares para diseñar y desarrollar contenido educativo interactivo. Presté servicios de revisión de actividades y corregí errores en cursos activos.`,
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
}
