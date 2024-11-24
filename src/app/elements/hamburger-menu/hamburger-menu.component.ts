import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  imports: [CommonModule],
  templateUrl: './hamburger-menu.component.html',
  styleUrl: './hamburger-menu.component.scss'
})
export class HamburgerMenuComponent {
  @Output() clickedMenu = new EventEmitter<{ openedMenu: boolean }>();
  openedMenu = false;
  clickedOnMenu() {
    this.openedMenu = !this.openedMenu;
    this.clickedMenu.emit({ openedMenu: this.openedMenu });
  }
}
