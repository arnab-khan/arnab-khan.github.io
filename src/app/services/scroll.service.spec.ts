import { TestBed } from '@angular/core/testing';

import { ScrollService } from './scroll.service';
import { ScrollInformation } from '../interfaces/scroll';

describe('ScrollService', () => {
  let service: ScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // ================================================================================

  const scrollInfo = [
    { start: 100, end: 200, currentPosition: 100, toBe: 0 },
    { start: 100, end: 200, currentPosition: 50, toBe: 0 },
    { start: 100, end: 200, currentPosition: 0, toBe: 0 },
    { start: 100, end: 200, currentPosition: 150, toBe: 50 },
    { start: 100, end: 200, currentPosition: 200, toBe: 100 },
    { start: 100, end: 200, currentPosition: 250, toBe: 100 },
    { start: 0, end: 100, currentPosition: 0, toBe: 0 }
  ]
  scrollInfo.forEach(element => {
    it(`Calculate the available scroll percentage: (start:${element.start}, end:${element.end}, currentPosition:${element.currentPosition})}`, () => {
      const scrollInfo: ScrollInformation = {
        start: element.start,
        end: element.end,
        currentPosition: element.currentPosition
      };
      const result = service.calculateAvailableScrollPercentage(scrollInfo);
      expect(result).toBeCloseTo(element.toBe, 3); // Using toBeCloseTo for precision in floating point numbers
    });
  })

  // ================================================================================

  const opacityTests = [
    { minScrollPercentage: 0, maxScrollPercentage: 100, scrollPercentage: 0, toBe: 0 },
    { minScrollPercentage: 0, maxScrollPercentage: 100, scrollPercentage: 50, toBe: 0.5 },
    { minScrollPercentage: 0, maxScrollPercentage: 100, scrollPercentage: 100, toBe: 1 },
    { minScrollPercentage: 0, maxScrollPercentage: 100, scrollPercentage: 150, toBe: .5 },
    { minScrollPercentage: 0, maxScrollPercentage: 100, scrollPercentage: 200, toBe: 0 },
    { minScrollPercentage: 0, maxScrollPercentage: 100, scrollPercentage: 250, toBe: 0 },
    { minScrollPercentage: 50, maxScrollPercentage: 100, scrollPercentage: 75, toBe: 0.5 },
    { minScrollPercentage: 50, maxScrollPercentage: 100, scrollPercentage: 100, toBe: 1 }
  ];
  opacityTests.forEach(element => {
    it(`Calculate the opacity: (min:${element.minScrollPercentage}, max:${element.maxScrollPercentage}, scroll:${element.scrollPercentage})`, () => {
      const result = service.setOpacity(element.minScrollPercentage, element.maxScrollPercentage, element.scrollPercentage);
      expect(result).toBeCloseTo(element.toBe, 3); // Using toBeCloseTo for precision in floating point numbers
    });
  });

  // ================================================================================

  const sizePercentageTests = [
    { minScrollPercentage: 20, maxScrollPercentage: 80, scrollPercentage: 10, toBe: 0 },
    { minScrollPercentage: 20, maxScrollPercentage: 80, scrollPercentage: 20, toBe: 0 },
    { minScrollPercentage: 20, maxScrollPercentage: 80, scrollPercentage: 80, toBe: 100 },
    { minScrollPercentage: 20, maxScrollPercentage: 80, scrollPercentage: 90, toBe: 100 },
    { minScrollPercentage: 20, maxScrollPercentage: 80, scrollPercentage: 50, toBe: 50 }
  ];
  sizePercentageTests.forEach(test => {
    it(`Calculate the size percentage: (min:${test.minScrollPercentage}, max:${test.maxScrollPercentage}, scroll:${test.scrollPercentage})`, () => {
      const result = service.setSizeInPercentage(test.minScrollPercentage, test.maxScrollPercentage, test.scrollPercentage);
      expect(result).toBeCloseTo(test.toBe, 3); // Using toBeCloseTo for precision in floating point numbers
    });
  });

});
