import { NgFor } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-whyme',
  standalone: true,
  imports: [NgFor],
  templateUrl: './whyme.component.html',
  styleUrls: ['./whyme.component.scss'],
})
export class WhymeComponent implements AfterViewInit {
  constructor(private utilsService: UtilsService) {}

  observer!: IntersectionObserver;
  @ViewChild('title') title!: ElementRef;

  ngAfterViewInit() {
    this.utilsService.observeElement(this.title.nativeElement, 'active', 0.2);
  }

  handleScroll = () => {
    if (this.title?.nativeElement instanceof HTMLElement) {
      const rect = this.title.nativeElement.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (isVisible) {
        this.title.nativeElement.classList.add('active');
      } else {
        this.title.nativeElement.classList.remove('active');
      }
    }
  };

  techs = [
    {
      name: 'HTML',
      type: 'Lenguaje de marcado',
      description: 'Lenguaje estándar para la creación de páginas web...',
      icon: 'assets/html.webp',
      officialUrl: 'https://developer.mozilla.org/es/docs/Web/HTML',
      learnMoreUrl: 'https://developer.mozilla.org/es/docs/Web/HTML/Tutorials',
      useCases: [
        'Estructuración de contenido web',
        'Desarrollo de páginas web estáticas',
      ],
      newsApiQuery: 'html',
      community: {
        discord: 'https://discord.com/invite/html',
        reddit: 'https://www.reddit.com/r/webdev/',
        stackOverflow: 'https://stackoverflow.com/questions/tagged/html',
      },
      popularProjects: ['HTML5 Boilerplate', 'Bootstrap', 'Materialize'],
    },
    {
      name: 'CSS',
      type: 'Lenguaje de hojas de estilo',
      description:
        'Lenguaje usado para describir la presentación de un documento HTML...',
      icon: 'assets/css.png',
      officialUrl: 'https://developer.mozilla.org/es/docs/Web/CSS',
      learnMoreUrl: 'https://developer.mozilla.org/es/docs/Web/CSS/Tutorials',
      useCases: [
        'Diseño de la estructura visual de páginas web',
        'Creación de interfaces responsivas',
      ],
      newsApiQuery: 'css',
      community: {
        discord: 'https://discord.com/invite/css',
        reddit: 'https://www.reddit.com/r/css/',
        stackOverflow: 'https://stackoverflow.com/questions/tagged/css',
      },
      popularProjects: ['Bootstrap', 'Tailwind CSS', 'Sass'],
    },
    {
      name: 'JavaScript',
      type: 'Lenguaje de programación',
      description:
        'Lenguaje de programación utilizado principalmente para la creación de scripts en páginas web...',
      icon: 'assets/js.png',
      officialUrl: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
      learnMoreUrl:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide',
      useCases: [
        'Desarrollo web interactivo',
        'Creación de aplicaciones dinámicas en la web',
      ],
      newsApiQuery: 'javascript',
      community: {
        discord: 'https://discord.com/invite/javascript',
        reddit: 'https://www.reddit.com/r/javascript/',
        stackOverflow: 'https://stackoverflow.com/questions/tagged/javascript',
      },
      popularProjects: ['React', 'Node.js', 'Vue.js'],
    },
    {
      name: 'Angular',
      type: 'Framework frontend',
      description: 'Framework de Google basado en TypeScript...',
      icon: 'assets/angular.png',
      officialUrl: 'https://angular.dev/',
      learnMoreUrl: 'https://angular.dev/tutorials/first-app',
      useCases: [
        'Aplicaciones empresariales',
        'Dashboards y paneles de administración',
        'Sistemas de gestión complejos',
      ],
      newsApiQuery: 'angular',
      community: {
        discord: 'https://discord.com/invite/angular',
        reddit: 'https://www.reddit.com/r/Angular2/',
        stackOverflow: 'https://stackoverflow.com/questions/tagged/angular',
      },
      popularProjects: ['Angular Material', 'Nx Monorepos', 'PrimeNG'],
    },
    {
      name: 'Vue',
      type: 'Framework frontend',
      description: 'Framework de Google basado en TypeScript...',
      icon: 'assets/vue.png',
      officialUrl: 'https://angular.dev/',
      learnMoreUrl: 'https://angular.dev/tutorials/first-app',
      useCases: [
        'Aplicaciones empresariales',
        'Dashboards y paneles de administración',
        'Sistemas de gestión complejos',
      ],
      newsApiQuery: 'angular',
      community: {
        discord: 'https://discord.com/invite/angular',
        reddit: 'https://www.reddit.com/r/Angular2/',
        stackOverflow: 'https://stackoverflow.com/questions/tagged/angular',
      },
      popularProjects: ['Angular Material', 'Nx Monorepos', 'PrimeNG'],
    },
    {
      name: 'React',
      type: 'Biblioteca frontend',
      description:
        'Biblioteca de JavaScript para crear interfaces de usuario...',
      icon: 'assets/react.png',
      officialUrl: 'https://reactjs.org/',
      learnMoreUrl: 'https://reactjs.org/tutorial/tutorial.html',
      useCases: [
        'Aplicaciones de una sola página (SPA)',
        'Interfaces de usuario dinámicas',
        'Aplicaciones móviles con React Native',
      ],
      newsApiQuery: 'react',
      community: {
        discord: 'https://discord.com/invite/reactiflux',
        reddit: 'https://www.reddit.com/r/reactjs/',
        stackOverflow: 'https://stackoverflow.com/questions/tagged/reactjs',
      },
      popularProjects: ['React Router', 'Redux', 'Next.js'],
    },
    {
      name: 'Next.js',
      type: 'Framework de React',
      description:
        'Framework para aplicaciones React con soporte para renderizado del lado del servidor...',
      icon: 'assets/next.png',
      officialUrl: 'https://nextjs.org/',
      learnMoreUrl: 'https://nextjs.org/learn',
      useCases: [
        'Renderizado del lado del servidor',
        'Generación de sitios estáticos',
        'Aplicaciones de React con optimización automática',
      ],
      newsApiQuery: 'next',
      community: {
        discord: 'https://discord.com/invite/nextjs',
        reddit: 'https://www.reddit.com/r/nextjs/',
        stackOverflow: 'https://stackoverflow.com/questions/tagged/next.js',
      },
      popularProjects: [
        'Next.js Image Optimization',
        'NextAuth.js',
        'Next.js Commerce',
      ],
    },
    {
      name: 'Astro',
      type: 'Framework de sitios estáticos',
      description:
        'Generador de sitios estáticos con soporte para múltiples frameworks frontend...',
      icon: 'assets/astro.png',
      officialUrl: 'https://astro.build/',
      learnMoreUrl: 'https://astro.build/learn',
      useCases: [
        'Generación de sitios estáticos rápidos',
        'Mezcla de frameworks frontend (React, Vue, Svelte)',
        'Creación de sitios con componentes ligeros',
      ],
      newsApiQuery: 'astro',
      community: {
        discord: 'https://astro.build/chat',
        reddit: 'https://www.reddit.com/r/astro_build/',
        stackOverflow: 'https://stackoverflow.com/questions/tagged/astro',
      },
      popularProjects: ['Astro Framework', 'Astro Components', 'Astro Themes'],
    },
    {
      name: 'Flutter',
      type: 'Framework para aplicaciones móviles',
      description:
        'Framework de UI para crear aplicaciones nativas de alta calidad en múltiples plataformas...',
      icon: 'assets/flutter.png',
      officialUrl: 'https://flutter.dev/',
      learnMoreUrl: 'https://flutter.dev/docs/get-started',
      useCases: [
        'Aplicaciones móviles nativas para Android e iOS',
        'Aplicaciones de escritorio',
        'Aplicaciones web',
      ],
      newsApiQuery: 'flutter',
      community: {
        discord: 'https://discord.com/invite/flutter',
        reddit: 'https://www.reddit.com/r/FlutterDev/',
        stackOverflow: 'https://stackoverflow.com/questions/tagged/flutter',
      },
      popularProjects: ['FlutterFire', 'Flutter DevTools', 'Flutter Gallery'],
    },
    {
      name: 'Ionic',
      type: 'Framework para aplicaciones móviles y web',
      description:
        'Framework para crear aplicaciones móviles híbridas y progresivas usando tecnologías web...',
      icon: 'assets/ionic.png',
      officialUrl: 'https://ionicframework.com/',
      learnMoreUrl: 'https://ionicframework.com/docs',
      useCases: [
        'Aplicaciones móviles híbridas',
        'Aplicaciones web progresivas',
        'Aplicaciones multiplataforma',
      ],
      newsApiQuery: 'ionic',
      community: {
        discord: 'https://discord.com/invite/ionic',
        reddit: 'https://www.reddit.com/r/ionicframework/',
        stackOverflow: 'https://stackoverflow.com/questions/tagged/ionic',
      },
      popularProjects: ['Ionic Angular', 'Ionic React', 'Capacitor'],
    },
    {
      name: 'Tailwind',
      type: 'Framework de CSS utilitario',
      description:
        'Framework CSS para crear interfaces de usuario personalizadas de manera rápida...',
      icon: 'assets/Tailwind.jpg',
      officialUrl: 'https://tailwindcss.com/',
      learnMoreUrl: 'https://tailwindcss.com/docs',
      useCases: [
        'Diseño de interfaces de usuario personalizadas',
        'Diseño móvil primero',
        'Desarrollo rápido de UI',
      ],
      newsApiQuery: 'tailwind',
      community: {
        discord: 'https://discord.com/invite/tailwindcss',
        reddit: 'https://www.reddit.com/r/tailwindcss/',
        stackOverflow:
          'https://stackoverflow.com/questions/tagged/tailwind-css',
      },
      popularProjects: ['Tailwind UI', 'Tailwind Labs', 'Headless UI'],
    },
    {
      name: 'SASS',
      type: 'Framework de CSS utilitario',
      description:
        'Framework CSS para crear interfaces de usuario personalizadas de manera rápida...',
      icon: 'assets/seal-color.png',
      officialUrl: 'https://tailwindcss.com/',
      learnMoreUrl: 'https://tailwindcss.com/docs',
      useCases: [
        'Diseño de interfaces de usuario personalizadas',
        'Diseño móvil primero',
        'Desarrollo rápido de UI',
      ],
      newsApiQuery: 'sass',
      community: {
        discord: 'https://discord.com/invite/tailwindcss',
        reddit: 'https://www.reddit.com/r/tailwindcss/',
        stackOverflow:
          'https://stackoverflow.com/questions/tagged/tailwind-css',
      },
      popularProjects: ['Tailwind UI', 'Tailwind Labs', 'Headless UI'],
    },
    {
      name: 'Figma',
      type: 'Herramienta de diseño de UI/UX',
      description:
        'Herramienta de diseño colaborativo para crear interfaces de usuario...',
      icon: 'assets/figma.png',
      officialUrl: 'https://www.figma.com/',
      learnMoreUrl: 'https://www.figma.com/resources/learn-design/',
      useCases: [
        'Diseño de interfaces de usuario',
        'Prototipos interactivos',
        'Colaboración en tiempo real',
      ],
      newsApiQuery: 'figma',
      community: {
        discord: 'https://discord.com/invite/figma',
        reddit: 'https://www.reddit.com/r/Figma/',
        stackOverflow: 'https://stackoverflow.com/questions/tagged/figma',
      },
      popularProjects: ['Figma Community', 'Figma Plugins', 'Figma Templates'],
    },
  ];
}
