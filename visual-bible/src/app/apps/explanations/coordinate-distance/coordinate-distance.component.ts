import { Component } from '@angular/core';
import { MentionComponent } from '../../../shared/mention/mention.component';

@Component({
  selector: 'app-coordinate-distance-explanation',
  standalone: true,
  templateUrl: 'coordinate-distance.component.html',
  styleUrls: ['coordinate-distance.component.scss'],
  imports: [
    MentionComponent
  ]
})
export class CoordinateDistanceExplanationComponent {}
