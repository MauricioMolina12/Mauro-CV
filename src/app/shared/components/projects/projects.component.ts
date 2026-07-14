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
      title: 'Star Grow Studio',
      slug: 'opera_website',
      type: 'web',
      description: 'Diseño y desarrollo de un sitio web corporativo para una empresa de desarrollo de software, diseño y asesoría empresarial, con un enfoque en transmitir profesionalismo, destacar sus servicios y fortalecer su presencia digital.',
      image: 'assets/projects/stargrowstudio.png',
      demo: 'https://stargrowstudio.com',
      techs: ['assets/tech/next.svg', 'assets/tech/sanity.svg'],
    },
    {
      title: 'Opera',
      slug: 'opera_website',
      type: 'web',
      description: 'Desarrollo integral de identidad digital para una empresa multiservicios, incluyendo branding, diseño de propuesta comercial y desarrollo de un sitio web corporativo moderno y orientado a la captación de clientes.',
      image: 'assets/projects/opera.png',
      demo: 'https://operawebsite.vercel.app/',
      techs: ['assets/tech/next.svg'],
    },

    {
      title: 'App Edutin Academy',
      slug: 'app_edutin_academy',
      type: 'mobile',
      description:
        'Aplicación móvil de Edutin Academy desarrollada con Angular e Ionic. Trabajé en interfaces intuitivas y responsivas, alineadas con la experiencia web de la plataforma.',
      image: 'assets/projects/appedutin.png',
      demo: 'https://play.google.com/store/apps/details?id=com.edutin.app&hl=es_CO',
      techs: ['assets/tech/ionic.svg'],
    },
    {
      title: 'Mercadatos',
      slug: 'mercadatos',
      type: 'web',
      description: 'Desarrollo de un sitio web corporativo durante mi etapa de prácticas profesionales, enfocado en fortalecer la presencia digital de la empresa. El proyecto incluyó el diseño y desarrollo de una plataforma moderna, optimizada para presentar sus servicios, mejorar la experiencia de navegación y proyectar una imagen profesional de la marca.',
      image: 'assets/projects/mercadatos.png',
      repo: 'https://github.com/MauricioMolina12/mercadatos',
      techs: ['assets/tech/angular.svg'],
    },
    {
      title: 'Renta GO',
      slug: 'renta_go',
      type: 'web',
      description:
        'Proyecto universitario: sistema de renta de autos donde cada vehículo cuenta con sus propias características y disponibilidad.',
      image: 'assets/projects/rentago.jpg',
      repo: 'https://github.com/Samue2408/Reserva_Vehiculos',
      techs: ['assets/tech/angular.svg', 'assets/tech/nodejs.svg'],
    },
    {
      title: 'Unilibre',
      slug: 'unilibre',
      type: 'web',
      description:
        'Plataforma universitaria para la gestión de las actividades de los profesores, con control de tareas, horarios y responsabilidades.',
      image: 'assets/projects/unilibre.png',
      repo: 'https://github.com/MauricioMolina12/ClassroomProject',
      techs: [
        'assets/tech/html5.svg',
        'assets/tech/css3.svg',
        'assets/tech/javascript.svg',
      ],
    },
    {
      title: 'Software método simplex',
      slug: 'pl-software',
      type: 'web',
      description:
        'Software que implementa el método simplex para resolver problemas de programación lineal, mostrando paso a paso la solución óptima.',
      image: 'assets/projects/PL-software.png',
      repo: 'https://github.com/MauricioMolina12/metodo-simplex',
      techs: ['assets/tech/vue.svg'],
    },
    {
      title: 'My Security',
      slug: 'my_security',
      type: 'mobile',
      description:
        'App móvil para mejorar la seguridad en Barranquilla, con alertas en tiempo real y seguimiento de ubicación para proteger a los usuarios.',
      image: 'assets/projects/mysecurity.jpg',
      repo: 'https://github.com/Blaskevorsz/FPD-Jhoan',
      techs: ['assets/tech/flutter.svg'],
    },
    {
      title: 'M&M Cake Shop',
      slug: '',
      type: 'design',
      description: 'Diseño UI/UX de una tienda de repostería, creado en Figma.',
      image: 'assets/projects/m&m.png',
      techs: ['assets/tech/figma.svg'],
    },
    {
      title: 'Vehicle care',
      slug: '',
      type: 'design',
      description:
        'Concepto de app para el cuidado y mantenimiento de vehículos, diseñado en Figma.',
      image: 'assets/projects/vehicleCare.png',
      techs: ['assets/tech/figma.svg'],
    },
    {
      title: 'Food app',
      slug: '',
      type: 'design',
      description:
        'Diseño de una app de comida a domicilio, prototipado en Figma.',
      image: 'assets/projects/food.png',
      techs: ['assets/tech/figma.svg'],
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
      (project) => project.type === this.typeProject,
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
