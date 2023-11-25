import { Component } from '@angular/core';
import { FEATURED } from 'src/app/data/mocks/featured';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent {
  featuredProfiles = FEATURED;
}
