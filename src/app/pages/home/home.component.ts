import { afterNextRender, Component, ElementRef, HostListener, inject, OnInit } from '@angular/core';
import { BannerComponent } from '../../sub-components/banner/banner.component';
import { DataTransferService } from '../../services/data-transfer.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  dataTransferService = inject(DataTransferService);

  hostElement: HTMLElement | undefined;
  totalScrollHeight = 0;
  scrollInPersentage = 0;
  headerHeight = 0;
  windowInnerHeight = 0;

  constructor(elementRef: ElementRef) {
    this.headerHeight = this.dataTransferService.header()?.height || 0;
    console.log(this.headerHeight); // every time change 'myWritableSignal' will log here
    this.hostElement = elementRef.nativeElement;
    afterNextRender({
      write: () => { },
      read: () => {
        setTimeout(() => {
          this.getScrollPersentage();
          console.log(this.windowInnerHeight);
          
          this.totalScrollHeight = (this.hostElement?.offsetHeight || 0) - this.windowInnerHeight;
        }, 0);
      }
    });
  }
  ngOnInit(): void {
    this.windowInnerHeight = window.innerHeight;
  }
  @HostListener('window:scroll', [])
  onScroll() {
    this.getScrollPersentage();
  }

  getScrollPersentage() {
    this.windowInnerHeight = window.innerHeight;
    const totalScrollHeight = (this.hostElement?.offsetHeight || 0) - this.windowInnerHeight + this.headerHeight;
    const scrollPosition = window.scrollY;
    this.scrollInPersentage = (scrollPosition / totalScrollHeight) * 100;
    // console.log(this.scrollInPersentage);
  }
}
