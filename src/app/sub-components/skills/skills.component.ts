import { Component, HostListener, inject, Input, SimpleChanges } from '@angular/core';
import { ScrollInformation } from '../../interfaces/scroll';
import { ScrollService } from '../../services/scroll.service';
import { Skill } from '../../interfaces/skill';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  scrollService = inject(ScrollService);

  @Input() scrollInformation: ScrollInformation = {};
  @Input() skills: Skill[] = [];

  scrollPersentage = 0;
  sectionOpecity = 0;
  cardOutlineBeforeOpecity = 0;
  cardOutlineCurrentOpecity = 0;
  cardOutlineAfterOpecity = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['scrollInformation']) {
      this.scrollPersentage = this.scrollService.calculateAvaiableScrollPercentage(this.scrollInformation);
      if (this.scrollPersentage <= 20) {
        this.sectionOpecity = this.setOpacity(0, 20);
      } else {
        this.sectionOpecity = 1;
      }
      this.cardOutlineBeforeOpecity = this.setOpacity(20, 60);
      this.cardOutlineCurrentOpecity = this.setOpacity(40, 80);
      this.cardOutlineAfterOpecity = this.setOpacity(60, 100);
    }
  }

  setOpacity(minScrollPersentage: number, maxScrollPersentage: number): number {
    return this.scrollService.setOpacity(minScrollPersentage, maxScrollPersentage, this.scrollPersentage);
  }
}
