import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { ScrollInformation } from '../../interfaces/scroll';
import { ScrollService } from '../../services/scroll.service';
import { RisingLinesAnimationComponent } from '../../elements/rising-lines-animation/rising-lines-animation.component';

@Component({
  selector: 'app-about-me',
  imports: [RisingLinesAnimationComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  scrollService = inject(ScrollService);

  @Input() scrollInformation: ScrollInformation = {};

  scrollPersentage = 0;
  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['scrollInformation']) {
      console.log(this.scrollService.calculateAvaiableScrollPercentage(this.scrollInformation));
      
      this.scrollPersentage = this.scrollService.calculateAvaiableScrollPercentage(this.scrollInformation);
    }
    console.log(this.scrollPersentage);
    
  }

  addClassBasedPosition() {
    if (this.scrollPersentage > 0) {
      return 'opened';
    } 
    return '';
  }
}
