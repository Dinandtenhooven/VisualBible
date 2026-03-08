import { Component, input } from "@angular/core";
import { SettingsComponent } from "../settings/settings.component";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [SettingsComponent]
})
export class HeaderComponent {

    settingsToggle = false;

    toggleSettings() {
        this.settingsToggle = !this.settingsToggle;
        console.log("Settings toggled: " + this.settingsToggle);
    }

}