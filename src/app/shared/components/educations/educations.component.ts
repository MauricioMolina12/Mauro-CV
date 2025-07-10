import { NgFor, NgIf } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-educations',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './educations.component.html',
  styleUrl: './educations.component.scss',
})
export class EducationsComponent implements AfterViewInit {
  constructor(private utilsService: UtilsService) {}

  @ViewChildren('item') items!: QueryList<ElementRef>;

  educations = [
    {
      education: 'Universidad de los Andes (Colombia)',
      time: '2024',
      logo: 'assets/uniandes.jpg',
      link: 'https://www.linkedin.com/posts/william-insignares-4648a837_innovaciaejn-tecnologaeda-educaciaejn-activity-7199898714579030019-5BVV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIoueEBV4n9JK6BzpcJ6umsx_k_7uD4kck',
      positions: [
        {
          title: 'Campamento Virtual METAVERSO',
        },
      ],
    },
    {
      education: 'Universidad Libre Seccional Barranquilla',
      time: 'Feb 2021 - Actualidad',
      logo: 'assets/unilibre.png',
      positions: [
        {
          title: 'Ingeniería de sistemas',
        },
      ],
    },
    {
      education: 'SENA',
      time: '2018 - 2020',
      logo: 'assets/sena.png',
      positions: [
        {
          title: 'Tecnico de sistemas',
        },
      ],
    },
    // {
    //   education: 'Institución Educativa Tecnico Industrial De Sabanalarga, Atlantico (Colombia)',
    //   time: '2015 - 2020',
    //   logo: 'assets/ietisa.jpg',
    //   positions: [
    //     {
    //       title: 'Secundaria'
    //     },
    //   ]
    // },
  ];

  ngAfterViewInit(): void {
    this.utilsService.observeElements(this.items);
  }
}
