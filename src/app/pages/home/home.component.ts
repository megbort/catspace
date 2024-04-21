import { Component, OnInit } from '@angular/core';
import { FeaturedProfile } from 'src/app/data/mocks/featured';
import { FEATURED } from 'src/app/data/mocks/featured';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeFeaturedProfiles?: FeaturedProfile[];

  ngOnInit(): void {
    this.homeFeaturedProfiles = FEATURED.slice(0, 4);
  }

  clickHandler(): void {
    window.alert('Create account form coming soon...');
  }
}
