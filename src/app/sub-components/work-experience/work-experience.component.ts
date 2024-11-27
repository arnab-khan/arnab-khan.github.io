import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { ScrollInformation } from '../../interfaces/scroll';
import { ScrollService } from '../../services/scroll.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
  scrollService = inject(ScrollService);

  @Input() scrollInformation: ScrollInformation = {};

  scrollPersentage = 0;
  sectionOpecity = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['scrollInformation']) {
      this.scrollPersentage = this.scrollService.calculateAvaiableScrollPercentage(this.scrollInformation);
      if (this.scrollPersentage <= 20) {
        this.sectionOpecity = this.setOpacity(0, 20);
      } else {
        this.sectionOpecity = 1;
      }
    }
  }

  setOpacity(minScrollPersentage: number, maxScrollPersentage: number): number {
    return this.scrollService.setOpacity(minScrollPersentage, maxScrollPersentage, this.scrollPersentage);
  }
}
