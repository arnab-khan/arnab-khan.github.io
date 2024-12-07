import { Injectable } from '@angular/core';
import { ScrollInformation } from '../interfaces/scroll';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  /**
   * Calculates the available scroll percentage based on the current position
   * within the start and end bounds of a scrollable area.
   * @param scrollInformation - Contains start, end, and current scroll position.
   * @returns The scroll percentage, clamped between 0 and 100.
  */
  calculateAvaiableScrollPercentage(scrollInformation: ScrollInformation): number {
    const total = (scrollInformation?.end || 0) - (scrollInformation?.start || 0);
    const currentScroll = (scrollInformation?.currentPosition || 0) - (scrollInformation?.start || 0);
    const scrollPersentage = (currentScroll / total) * 100;
    return Math.min(Math.max(scrollPersentage, 0), 100);
  }

  setOpacity(minScrollPersentage: number, maxScrollPersentage: number, scrollPersentage: number): number {
    const opacity = (scrollPersentage - minScrollPersentage) / (maxScrollPersentage - minScrollPersentage);
    if (opacity > 1) {
      if (opacity > 2) {
        return 0;
      } else {
        return 2 - opacity;
      }
    } else {
      return Math.max(opacity, 0)
    }
  }

  setSizeInPersentage(minScrollPersentage: number, maxScrollPersentage: number, scrollPersentage: number): number {
    const heightInPersentage = ((scrollPersentage - minScrollPersentage) / (maxScrollPersentage - minScrollPersentage)) * 100;
    return Math.min(Math.max(heightInPersentage, 0), 100);
  }
}
