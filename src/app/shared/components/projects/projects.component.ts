import { NgClass, NgFor, NgIf } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { UtilsService } from '../../services/utils.service';

interface Project {
  title: string;
  slug: string;
  type: string;
  description: string;
  image: string;
  techs: string[];
  demo?: string;
  repo?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChild('carouselWrapper', { static: false }) carouselWrapper!: ElementRef;
  @ViewChildren('card') cardsProject!: QueryList<ElementRef>;

  constructor(private utilsService: UtilsService) {}

  cards: Project[] = [
    {
      title: 'App Edutin Academy',
      slug: 'app_edutin_academy',
      type: 'mobile',
      description:
        'Aplicación móvil de Edutin Academy desarrollada con Angular e Ionic. Trabajé en interfaces intuitivas y responsivas, alineadas con la experiencia web de la plataforma.',
      image: 'assets/appedutin.png',
      demo: 'https://play.google.com/store/apps/details?id=com.edutin.app&hl=es_CO',
      techs: ['assets/ionic.png'],
    },
    {
      title: 'Mercadatos',
      slug: 'mercadatos',
      type: 'web',
      description:
        'Lideré el desarrollo del sitio web de Mercadatos: planificación, implementación de funcionalidades clave y coordinación del equipo técnico.',
      image: 'assets/mercadatos.png',
      repo: 'https://github.com/MauricioMolina12/mercadatos',
      techs: ['assets/angular.png'],
    },
    {
      title: 'Renta GO',
      slug: 'renta_go',
      type: 'web',
      description:
        'Proyecto universitario: sistema de renta de autos donde cada vehículo cuenta con sus propias características y disponibilidad.',
      image: 'assets/rentago.jpg',
      repo: 'https://github.com/Samue2408/Reserva_Vehiculos',
      techs: ['assets/angular.png', 'assets/node.png'],
    },
    {
      title: 'Unilibre',
      slug: 'unilibre',
      type: 'web',
      description:
        'Plataforma universitaria para la gestión de las actividades de los profesores, con control de tareas, horarios y responsabilidades.',
      image: 'assets/unilibre.png',
      repo: 'https://github.com/MauricioMolina12/ClassroomProject',
      techs: ['assets/html.webp', 'assets/css.png', 'assets/js.png'],
    },
    {
      title: 'Software método simplex',
      slug: 'pl-software',
      type: 'web',
      description:
        'Software que implementa el método simplex para resolver problemas de programación lineal, mostrando paso a paso la solución óptima.',
      image: 'assets/PL-software.png',
      repo: 'https://github.com/MauricioMolina12/metodo-simplex',
      techs: ['assets/vue.png'],
    },
    {
      title: 'My Security',
      slug: 'my_security',
      type: 'mobile',
      description:
        'App móvil para mejorar la seguridad en Barranquilla, con alertas en tiempo real y seguimiento de ubicación para proteger a los usuarios.',
      image: 'assets/mysecurity.jpg',
      repo: 'https://github.com/Blaskevorsz/FPD-Jhoan',
      techs: ['assets/flutter.png'],
    },
    {
      title: 'Mi portafolio',
      slug: '',
      type: 'web',
      description:
        'Mi portafolio personal, donde presento una selección de proyectos, mostrando mis habilidades técnicas y experiencia en desarrollo y diseño.',
      image: 'assets/cv.png',
      repo: 'https://github.com/MauricioMolina12',
      techs: ['assets/angular.png'],
    },
    {
      title: 'M&M Cake Shop',
      slug: '',
      type: 'design',
      description: 'Diseño UI/UX de una tienda de repostería, creado en Figma.',
      image: 'assets/m&m.png',
      techs: ['assets/figma.png'],
    },
    {
      title: 'Vehicle care',
      slug: '',
      type: 'design',
      description: 'Concepto de app para el cuidado y mantenimiento de vehículos, diseñado en Figma.',
      image: 'assets/vehicleCare.png',
      techs: ['assets/figma.png'],
    },
    {
      title: 'Food app',
      slug: '',
      type: 'design',
      description: 'Diseño de una app de comida a domicilio, prototipado en Figma.',
      image: 'assets/food.png',
      techs: ['assets/figma.png'],
    },
  ];

  tabs = [
    {
      name: 'web',
      filter: 'web',
    },
    {
      name: 'Apps Móviles',
      filter: 'mobile',
    },
    {
      name: 'Diseños',
      filter: 'design',
    },
  ];

  ngOnInit(): void {
    this.typeProject = 'web';
    this.cards = this.cards.filter(
      (project) => project.type === this.typeProject
    );
  }

  ngAfterViewInit(): void {
    this.utilsService.observeElements(this.cardsProject);
  }

  allCards = [...this.cards];
  typeProject: string = '';
  filterTypeProject(type: string) {
    this.cards = this.allCards.filter((project) => project?.type === type);
    this.typeProject = type;
    setTimeout(() => {
      this.utilsService.observeElements(this.cardsProject);
    });
  }

  redirectProject(slug: string) {
    window.open(slug, '_blank');
  }

  scrollCarousel(direction: number) {
    if (this.carouselWrapper?.nativeElement) {
      const cardWidth =
        this.carouselWrapper.nativeElement.children[0].offsetWidth + 16;
      this.carouselWrapper.nativeElement.scrollBy({
        left: direction * cardWidth,
        behavior: 'smooth',
      });
    }
  }
}
