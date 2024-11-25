import { Injectable } from '@angular/core';
import { ScrollInformation } from '../interfaces/scroll';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  calculateAvaiableScrollPercentage(scrollInformation: ScrollInformation): number {
    const total = (scrollInformation?.end || 0) - (scrollInformation?.start || 0);
    const currentScroll = (scrollInformation?.currentPosition || 0) - (scrollInformation?.start || 0);
    const scrollPersentage = (currentScroll / total) * 100;
    return scrollPersentage;
  }
}
