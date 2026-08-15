import { NgClass, NgIf } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { UtilsService } from '../../services/utils.service';
import { ProjectsService } from '../../../core/services/projects.service';
import { Project } from '../../../core/models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgClass, NgIf, RouterLink, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChild('carouselWrapper', { static: false }) carouselWrapper!: ElementRef;
  @ViewChildren('card') cardsProject!: QueryList<ElementRef>;

  constructor(
    private utilsService: UtilsService,
    private projectsService: ProjectsService
  ) {}

  cards: Project[] = [];

  ngOnInit(): void {
    this.cards = this.projectsService.getAll();
  }

  ngAfterViewInit(): void {
    this.utilsService.observeElements(this.cardsProject);
  }

  openExternal(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
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
