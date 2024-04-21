import {
  Component,
  ViewChild,
  EventEmitter,
  Output,
  OnInit,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { PROFILE, User } from '../data/mocks/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @ViewChild('drawer')
  drawer!: MatDrawer;
  @Output()
  statusChange = new EventEmitter<boolean>();

  user?: User;

  ngOnInit(): void {
    this.user = PROFILE;
  }

  open(): void {
    this.drawer.open();
    this.statusChange.emit(true);
  }

  close(): void {
    this.drawer.close();
    this.statusChange.emit(false);
  }
}
