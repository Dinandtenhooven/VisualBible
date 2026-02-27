import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-apps-menu',
    imports: [CommonModule, RouterLink],
    templateUrl: './apps-menu.component.html',
    styleUrls: ['./apps-menu.component.scss']
})
export class AppsMenuComponent {

    apps = [
        { name: "Genealogy", path: "genealogy" },
    ]



}