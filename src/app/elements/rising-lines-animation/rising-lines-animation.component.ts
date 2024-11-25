import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rising-lines-animation',
  imports: [CommonModule],
  templateUrl: './rising-lines-animation.component.html',
  styleUrl: './rising-lines-animation.component.scss'
})
export class RisingLinesAnimationComponent implements OnInit {

  @Input() scrollPercentage = 0;

  linesInformation = [
    {
      code: 1,
      position: 150,
      speed: 2.5
    },
    {
      code: 2,
      position: 100,
      speed: 2
    },
    {
      code: 3,
      position: 50,
      speed: 1.5
    },
    {
      code: 4,
      position: 0,
      speed: 1
    }
  ]

  linesPattern = [
    1, 2, 1, 3, 1, 2, 1, 3, 1, 4, 1, 2, 1, 3, 1, 2, 1, 3, 1, 4, 1, 2, 1, 3, 1, 2, 1, 3, 1, 4, 1, 2, 1, 3, 1, 2, 1, 3, 1
  ]

  lines: ({ code: number; position: number; speed: number; } | undefined)[] | undefined;

  ngOnInit(): void {
    this.setLineInformation();
  }

  setLineInformation() {
    this.lines = this.linesPattern.map(element => {
      const findLineInformation = this.linesInformation.find(lineInformation => {
        return lineInformation.code === element;
      })
      return findLineInformation;
    })
  }

  generateArray(noOfItem: number): number[] {
    return Array(noOfItem).fill('');
  }
}
