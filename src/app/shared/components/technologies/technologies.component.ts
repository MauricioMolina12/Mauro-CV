import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { UtilsService } from '../../services/utils.service';

interface Tech {
  name: string;
  icon: string;
}

interface TechCategory {
  title: string;
  size: 'wide' | 'normal';
  techs: Tech[];
}

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologiesComponent implements AfterViewInit {
  constructor(private utilsService: UtilsService) {}

  @ViewChildren('cat') cats!: QueryList<ElementRef>;

  categories: TechCategory[] = [
    {
      title: 'Frontend Core',
      size: 'wide',
      techs: [
        { name: 'Angular', icon: 'assets/tech/angular.svg' },
        { name: 'TypeScript', icon: 'assets/tech/typescript.svg' },
        { name: 'JavaScript', icon: 'assets/tech/javascript.svg' },
        { name: 'HTML5', icon: 'assets/tech/html5.svg' },
        { name: 'CSS3', icon: 'assets/tech/css3.svg' },
        { name: 'Sass', icon: 'assets/tech/sass.svg' },
        { name: 'Tailwind CSS', icon: 'assets/tech/tailwind.svg' },
      ],
    },
    {
      title: 'Backend & APIs',
      size: 'wide',
      techs: [
        { name: 'Java', icon: 'assets/tech/java.svg' },
        { name: 'Spring Boot', icon: 'assets/tech/spring.svg' },
        { name: 'Node.js', icon: 'assets/tech/nodejs.svg' },
        // { name: 'Spring Security', icon: 'assets/tech/spring.svg' },
        // { name: 'Spring Data JPA', icon: 'assets/tech/spring.svg' },
        { name: 'Hibernate', icon: 'assets/tech/hibernate.svg' },
        { name: 'REST API', icon: 'assets/tech/restapi.svg' },
      ],
    },
    {
      title: 'Bases de Datos',
      size: 'normal',
      techs: [
        { name: 'PostgreSQL', icon: 'assets/tech/postgresql.svg' },
        { name: 'MySQL', icon: 'assets/tech/mysql.svg' },
      ],
    },
    {
      title: 'Ecosistema Angular',
      size: 'normal',
      techs: [
        { name: 'RxJS', icon: 'assets/tech/rxjs.svg' },
        { name: 'Angular Material', icon: 'assets/tech/angularmaterial.svg' },
        { name: 'NgRx', icon: 'assets/tech/ngrx.svg' },
      ],
    },
    {
      title: 'DevOps & Tools',
      size: 'wide',
      techs: [
        { name: 'Docker', icon: 'assets/tech/docker.svg' },
        // { name: 'Docker Compose', icon: 'assets/tech/docker.svg' },
        { name: 'Git', icon: 'assets/tech/git.svg' },
        { name: 'GitHub', icon: 'assets/tech/github.svg' },
        { name: 'Vercel', icon: 'assets/tech/vercel.svg' },
        { name: 'Firebase', icon: 'assets/tech/firebase.svg' },
        { name: 'VS Code', icon: 'assets/tech/vscode.svg' },
      ],
    },
    {
      title: 'UI / UX',
      size: 'normal',
      techs: [
        { name: 'Figma', icon: 'assets/tech/figma.svg' },
        { name: 'Prototipado', icon: 'assets/tech/prototyping.svg' },
        { name: 'Design System', icon: 'assets/tech/design-system.svg' },
      ],
    },
    {
      title: 'CMS & Contenido',
      size: 'normal',
      techs: [
        { name: 'Sanity', icon: 'assets/tech/sanity.svg' },
        { name: 'WordPress', icon: 'assets/tech/wordpress.svg' },
      ],
    },
    {
      title: 'Otras Tecnologías',
      size: 'wide',
      techs: [
        { name: 'React', icon: 'assets/tech/react.svg' },
        { name: 'Vue', icon: 'assets/tech/vue.svg' },
        { name: 'Astro', icon: 'assets/tech/astro.svg' },
        { name: 'Flutter', icon: 'assets/tech/flutter.svg' },
        { name: 'Ionic', icon: 'assets/tech/ionic.svg' },
        // { name: 'Kotlin', icon: 'assets/tech/kotlin.svg' },
        { name: 'Notion', icon: 'assets/tech/notion.svg' },
      ],
    },
  ];

  ngAfterViewInit(): void {
    this.utilsService.observeElements(this.cats);
  }
}
