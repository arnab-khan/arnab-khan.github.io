import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ScrollInformation } from '../../interfaces/scroll';
import { ScrollService } from '../../services/scroll.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent implements OnChanges {
  scrollService = inject(ScrollService);

  @Input() scrollInformation: ScrollInformation = {};

  scrollPersentage = 0;
  sectionOpecity = 0;
  contentOpecity = 0;
  gradientContentSize = '0%';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['scrollInformation']) {
      this.scrollPersentage = this.scrollService.calculateAvailableScrollPercentage(this.scrollInformation);
      if (this.scrollPersentage >= 90 && this.scrollPersentage <= 100) {
        this.contentOpecity = (1-this.setOpacity(90, 100));
      }
      if (this.scrollPersentage >= 20 && this.scrollPersentage <= 90) {
        this.gradientContentSize = this.setSize(20, 90);
      }
      if (this.scrollPersentage >= 10 && this.scrollPersentage <= 40) {
        this.contentOpecity = this.setOpacity(10, 40);
      }
      if (this.scrollPersentage <= 10) {
        this.sectionOpecity = this.setOpacity(0, 10);
      } else {
        this.sectionOpecity = 1;
      }
    }
  }

  setOpacity(minScrollPersentage: number, maxScrollPersentage: number): number {
    return this.scrollService.setOpacity(minScrollPersentage, maxScrollPersentage, this.scrollPersentage);
  }

  setSize(minScrollPersentage: number, maxScrollPersentage: number): string {
    return `${this.scrollService.setSizeInPercentage(minScrollPersentage, maxScrollPersentage, this.scrollPersentage)}%`;
  }
}
