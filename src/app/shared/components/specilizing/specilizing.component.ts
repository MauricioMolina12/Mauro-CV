import { NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-specilizing',
  standalone: true,
  imports: [NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault, TranslatePipe],
  templateUrl: './specilizing.component.html',
  styleUrl: './specilizing.component.scss',
})
export class SpecilizingComponent implements AfterViewInit {
  constructor(private utilsService: UtilsService) {}

  @ViewChildren('chart') chart!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.utilsService.observeElements(this.chart);
  }

  jobs = [
    {
      key: 'fullstack',
      title: 'skills.fullstack',
      description: 'skills.fullstackDesc',
      tags: ['Angular', 'Java', 'Spring Boot', 'Docker'],
    },
    {
      key: 'mobile',
      title: 'skills.mobile',
      description: 'skills.mobileDesc',
      tags: ['Flutter', 'Ionic', 'Kotlin'],
    },
    {
      key: 'design',
      title: 'skills.design',
      description: 'skills.designDesc',
      tags: ['Figma', 'Prototipado', 'Design System'],
    },
  ];
}
