import { Component, input } from "@angular/core";
import { SettingsComponent } from "../settings/settings.component";
import { Router } from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [SettingsComponent]
})
export class HeaderComponent {

    settingsToggle = false;

    constructor(public router: Router) {}

    toggleSettings() {
        this.settingsToggle = !this.settingsToggle;
        console.log("Settings toggled: " + this.settingsToggle);
    }

    goHome() {
        this.router.navigateByUrl('/');
    }

}