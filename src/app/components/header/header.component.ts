import { afterNextRender, afterRender, Component, ElementRef, HostListener, inject } from '@angular/core';
import { HamburgerMenuComponent } from '../../elements/hamburger-menu/hamburger-menu.component';
import { DataTransferService } from '../../services/data-transfer.service';

@Component({
  selector: 'app-header',
  imports: [HamburgerMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  dataTransferService = inject(DataTransferService);

  hostElement: HTMLElement | undefined;

  constructor(elementRef: ElementRef) {
    this.hostElement = elementRef.nativeElement;
    afterNextRender({
      write: () => { },
      read: () => {
        setTimeout(() => {
          this.trackHeaderHeight();
        }, 0);
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.trackHeaderHeight();
  }

  private trackHeaderHeight(): void {
    const headerHeight = this.hostElement?.getBoundingClientRect().height;
    // console.log('Header Height:', headerHeight);
    this.dataTransferService.header.set({ height: headerHeight })
  }
}
