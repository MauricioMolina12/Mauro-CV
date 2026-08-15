import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-whyme',
  standalone: true,
  imports: [],
  templateUrl: './whyme.component.html',
  styleUrls: ['./whyme.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhymeComponent implements AfterViewInit {
  constructor(private utilsService: UtilsService) {}

  @ViewChild('title') title!: ElementRef;

  ngAfterViewInit() {
    this.utilsService.observeElement(this.title.nativeElement, 'active', 0.2);
  }
}
