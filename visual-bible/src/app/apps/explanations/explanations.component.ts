import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-explanations',
  templateUrl: 'explanations.component.html',
  styleUrl: 'explanations.component.scss',
  imports: [CommonModule, RouterLink]
})
export class ExplanationsComponent {

  apps = [
    { name: "Considering earth curvature and map making", path: "earth-curvature" }
  ]

}
