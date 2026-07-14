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
import { ProjectsService } from '../../../core/services/projects.service';
import { Project } from '../../../core/models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgClass, NgIf, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChild('carouselWrapper', { static: false }) carouselWrapper!: ElementRef;
  @ViewChildren('card') cardsProject!: QueryList<ElementRef>;

  constructor(
    private utilsService: UtilsService,
    private projectsService: ProjectsService
  ) {}

  cards: Project[] = [];
  typeProject = '';

  tabs = [
    { name: 'web', filter: 'web' },
    { name: 'Apps Móviles', filter: 'mobile' },
    { name: 'Diseños', filter: 'design' },
  ];

  ngOnInit(): void {
    this.filterTypeProject('web');
  }

  ngAfterViewInit(): void {
    this.utilsService.observeElements(this.cardsProject);
  }

  filterTypeProject(type: string) {
    this.cards = this.projectsService.getByType(type);
    this.typeProject = type;
    setTimeout(() => {
      this.utilsService.observeElements(this.cardsProject);
    });
  }

  openExternal(url: string) {
    window.open(url, '_blank');
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
