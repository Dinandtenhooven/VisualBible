import { Component } from '@angular/core';
import { MentionComponent } from '../../../shared/mention/mention.component';

@Component({
  selector: 'app-earth-curvature-explanation',
  standalone: true,
  templateUrl: 'earth-curvature.component.html',
  styleUrls: ['earth-curvature.component.scss'],
  imports: [
    MentionComponent
  ]
})
export class EarthCurvatureExplanationComponent {}
