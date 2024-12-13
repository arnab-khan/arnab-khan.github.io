import { Injectable } from '@angular/core';
import { ScrollInformation } from '../interfaces/scroll';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  /**
   * Calculates the available scroll percentage based on the current position
   * within the start and end bounds of a scrollable area.
   * 
   * @param scrollInformation - Contains start, end, and current scroll position.
   * @returns The scroll percentage, clamped between 0 and 100.
  */
  calculateAvailableScrollPercentage(scrollInformation: ScrollInformation): number {
    const total = (scrollInformation?.end || 0) - (scrollInformation?.start || 0);
    const currentScroll = (scrollInformation?.currentPosition || 0) - (scrollInformation?.start || 0);
    const scrollPercentage = (currentScroll / total) * 100;
    return Math.min(Math.max(scrollPercentage, 0), 100); // Keep value in between 0 and 100
  }

  /**
   * Determines the opacity value based on the scroll percentage.
   * The opacity gradually increases within the specified scroll percentage range
   * and decreases beyond it, returning to 0 after exceeding double the range.
   * 
   * @param minScrollPercentage - The minimum scroll percentage to start changing opacity.
   * @param maxScrollPercentage - The maximum scroll percentage where opacity reaches its peak.
   * @param scrollPercentage - The current scroll percentage.
   * @returns The calculated opacity value, clamped between 0 and 1.
   */
  setOpacity(minScrollPercentage: number, maxScrollPercentage: number, scrollPercentage: number): number {
    const opacity = (scrollPercentage - minScrollPercentage) / (maxScrollPercentage - minScrollPercentage);
    if (opacity > 1) {
      if (opacity > 2) {
        return 0;
      } else {
        return 2 - opacity; // Decrease opacity after reaching the peak (1)
      }
    } else {
      return Math.max(opacity, 0); // Ensure opacity should not negative 
    }
  }

  /**
   * Determines the size (e.g., height or width) as a percentage based on the scroll percentage.
   * The size increases within the specified scroll percentage range, reaching a maximum of 100%.
   * 
   * @param minScrollPercentage - The minimum scroll percentage to start changing size.
   * @param maxScrollPercentage - The maximum scroll percentage where size reaches its peak.
   * @param scrollPercentage - The current scroll percentage.
   * @returns The calculated size in percentage, clamped between 0 and 100.
   */
  setSizeInPercentage(minScrollPercentage: number, maxScrollPercentage: number, scrollPercentage: number): number {
    const heightInPercentage = ((scrollPercentage - minScrollPercentage) / (maxScrollPercentage - minScrollPercentage)) * 100;
    return Math.min(Math.max(heightInPercentage, 0), 100); // Keep value in between 0 and 100
  }
}
