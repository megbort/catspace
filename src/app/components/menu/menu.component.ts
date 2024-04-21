import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Output() openProfile = new EventEmitter<boolean>();

  openSidePanel(): void {
    this.openProfile.emit(true);
  }
}
