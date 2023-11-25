import { Component, Input } from '@angular/core';

@Component({
  selector: 'featured-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() imageUrl?: string;
  @Input() name?: string;
  @Input() handle?: string;
  @Input() followers?: number;
  @Input() tags?: string[];
  @Input() following?: boolean;
}
