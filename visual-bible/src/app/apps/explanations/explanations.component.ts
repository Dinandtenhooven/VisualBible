import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explanations',
  templateUrl: 'explanations.component.html',
  styleUrl: 'explanations.component.scss',
  imports: [CommonModule]
})
export class ExplanationsComponent {

  apps = [
    { name: "Precision distance for coordinate digits", path: "coordinate-distance" },
    { name: "Considering earth curvature and map making", path: "earth-curvature" }
  ]

  constructor(public router: Router) {}

  goto(url: string): void {
    var current = this.router.url;
    this.router.navigateByUrl(current + "/" + url);
  }

}
