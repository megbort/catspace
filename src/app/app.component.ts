import { Component, ViewChild, Renderer2 } from '@angular/core';
import { ProfileComponent } from './components/profile/profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('drawer') drawerComponent!: ProfileComponent;
  enableContent = true;

  constructor(private renderer: Renderer2) {}

  toggleDrawer(isOpen: boolean): void {
    if (isOpen) {
      this.drawerComponent.open();
    } else {
      this.drawerComponent.close();
    }
  }

  handleStatusChange(isOpen: boolean): void {
    if (isOpen) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
      this.enableContent = false;
    } else {
      this.renderer.removeStyle(document.body, 'overflow');
      this.enableContent = true;
    }
  }
}
