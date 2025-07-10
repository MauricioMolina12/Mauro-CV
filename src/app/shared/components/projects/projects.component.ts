import { NgClass, NgFor } from '@angular/common';
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

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChild('carouselWrapper', { static: false }) carouselWrapper!: ElementRef;
  @ViewChildren('card') cardsProject!: QueryList<ElementRef>;

  constructor(private utilsService: UtilsService) {}

  cards = [
    {
      title: 'App Edutin Academy',
      slug: 'app_edutin_academy',
      type: 'mobile',
      description:
        'Formé parte del equipo de desarrollo de la aplicación móvil de Edutin Academy, contribuyendo a la implementación de funcionalidades clave con tecnologías como Angular e Ionic. Trabajé en la creación de interfaces intuitivas, responsivas y alineadas con la experiencia web de la plataforma, asegurando una experiencia de usuario ',
      image: 'assets/appedutin.png',
      url: 'https://play.google.com/store/apps/details?id=com.edutin.app&hl=es_CO',
      techs: ['assets/ionic.png'],
    },
    {
      title: 'Mercadatos',
      slug: 'mercadatos',
      type: 'web',
      description:
        'Actualmente lidero el desarrollo de la página web de Mercadatos, encargándome de la planificación, implementación de funcionalidades clave y coordinación del equipo técnico.',
      image: 'assets/mercadatos.png',
      url: 'https://github.com/MauricioMolina12/mercadatos',
      techs: ['assets/angular.png'],
    },
    {
      title: 'Renta GO',
      slug: 'renta_go',
      type: 'web',
      description:
        'Este fue un proyecto universitario, el cual trata de rentar autos, donde cada auto tieneEste fue un proyecto universitario que consiste en un sistema de renta de autos, donde cada vehículo cuenta con sus propias características y disponibilidad.',
      image: 'assets/rentago.jpg',
      url: 'https://github.com/Samue2408/Reserva_Vehiculos',
      techs: ['assets/angular.png', 'assets/node.png'],
    },
    {
      title: 'Unilibre',
      slug: 'unilibre',
      type: 'web',
      description:
        'Este fue un proyecto universitario enfocado en el desarrollo de una plataforma para la gestión y administración de las actividades asignadas a los profesores, permitiendo llevar un control organizado de sus tareas, horarios y responsabilidades dentro de la institución.',
      image: 'assets/unilibre.',
      url: 'https://github.com/MauricioMolina12/ClassroomProject',
      techs: ['assets/html.webp', 'assets/css.png', 'assets/js.png'],
    },
    {
      title: 'Software método simplex',
      slug: 'pl-software',
      type: 'web',
      description:
        'Proyecto universitario para crear un software que implementa el método simplex, permitiendo resolver problemas de programación lineal de forma práctica y guiada, mostrando paso a paso la solución óptima.',
      image: 'assets/PL-software.png',
      url: 'https://github.com/MauricioMolina12/metodo-simplex',
      techs: ['assets/vue.png'],
    },
    {
      title: 'My Security',
      slug: 'my_security',
      type: 'mobile',
      description:
        'Proyecto universitario enfocado en el desarrollo de una aplicación móvil para mejorar la seguridad de la ciudad de Barranquilla, incorporando funciones como alertas en tiempo real y seguimiento de ubicación para brindar mayor protección a los usuarios. ',
      image: 'assets/mysecurity.jpg',
      url: 'https://github.com/Blaskevorsz/FPD-Jhoan',
      techs: ['assets/flutter.png'],
    },
    {
      title: 'Mi portafolio',
      slug: '',
      type: 'web',
      description:
        'Este es mi portafolio personal, donde presento una selección de proyectos realizados, mostrando mis habilidades técnicas, creatividad y experiencia en desarrollo web y diseño.',
      image: 'assets/cv.png',
      techs: ['assets/angular.png'],
    },
    {
      title: 'M&M Cake Shop',
      slug: '',
      type: 'design',
      description: '',
      image: 'assets/m&m.png',
      techs: ['assets/figma.png'],
    },
    {
      title: 'Vehicle care',
      slug: '',
      type: 'design',
      description: '',
      image: 'assets/vehicleCare.png',
      techs: ['assets/figma.png'],
    },
    {
      title: 'Food app',
      slug: '',
      type: 'design',
      description: '',
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
