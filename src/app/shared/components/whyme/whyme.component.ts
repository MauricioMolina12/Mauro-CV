import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-whyme',
  standalone: true,
  imports: [],
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

}
