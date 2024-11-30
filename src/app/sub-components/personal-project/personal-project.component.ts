import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ScrollInformation } from '../../interfaces/scroll';
import { ScrollService } from '../../services/scroll.service';
import { PersonalProject } from '../../interfaces/personal-project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal-project',
  imports: [CommonModule],
  templateUrl: './personal-project.component.html',
  styleUrl: './personal-project.component.scss'
})
export class PersonalProjectComponent implements OnChanges {
  scrollService = inject(ScrollService);

  @Input() scrollInformation: ScrollInformation = {};
  @Input() personalProject: PersonalProject[] = [];

  scrollPersentage = 0;
  sectionOpecity = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['scrollInformation']) {
      this.scrollPersentage = this.scrollService.calculateAvaiableScrollPercentage(this.scrollInformation);
      if (this.scrollPersentage <= 50) {
        this.sectionOpecity = this.setOpacity(0, 50);
      } else {
        this.sectionOpecity = 1;
      }
    }
  }

  setOpacity(minScrollPersentage: number, maxScrollPersentage: number): number {
    return this.scrollService.setOpacity(minScrollPersentage, maxScrollPersentage, this.scrollPersentage);
  }
}
