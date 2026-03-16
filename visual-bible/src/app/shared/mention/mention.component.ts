import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";
import { SafeHtml } from "@angular/platform-browser";

@Component({
    selector: "app-mention",
    templateUrl: "./mention.component.html",
    styleUrls: ["./mention.component.scss"],
    imports: [CommonModule]
})
export class MentionComponent {
    text = input<string | null>(null);
    html = input<SafeHtml | null>(null);

    type = input<"AI" | "MAP" | null>(null);  

    ngOnInit() {
        console.log(this.html());
    }

    hasHtml() {
        return !!this.html();
    }
}