import { NgFor } from '@angular/common';
import {
  AfterViewInit,
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
  imports: [NgFor],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
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
        { name: 'Tailwind', icon: 'assets/tech/tailwind.svg' },
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
      title: 'UI / UX',
      size: 'normal',
      techs: [{ name: 'Figma', icon: 'assets/tech/figma.svg' }],
    },
    {
      title: 'Herramientas',
      size: 'wide',
      techs: [
        { name: 'VS Code', icon: 'assets/tech/vscode.svg' },
        { name: 'Git', icon: 'assets/tech/git.svg' },
        { name: 'Sanity Headless', icon: 'assets/tech/sanity.svg' },
        { name: 'GitHub', icon: 'assets/tech/github.svg' },
        { name: 'Node.js', icon: 'assets/tech/nodejs.svg' },
        { name: 'Firebase', icon: 'assets/tech/firebase.svg' },
        { name: 'Vercel', icon: 'assets/tech/vercel.svg' },
        { name: 'Notion', icon: 'assets/tech/notion.svg' },
        { name: 'MySQL', icon: 'assets/tech/mysql.svg' },
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
        { name: 'WordPress', icon: 'assets/tech/wordpress.svg' },
      ],
    },
  ];

  ngAfterViewInit(): void {
    this.utilsService.observeElements(this.cats);
  }
}
