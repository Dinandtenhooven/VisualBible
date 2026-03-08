import { Component, input, Input, signal } from "@angular/core";
import { BibleGatewayService } from "../../services/bible-gateway.service";

@Component({
    selector: 'bible-reference',
    providers: [BibleGatewayService],
    templateUrl: './bible-reference.component.html',
    styleUrls: ['./bible-reference.component.scss']
})
export class BibleReferenceComponent {
    
    bookRef = input<string>('');

    showPopup = false;
    popupX = 0;
    popupY = 0;

    result = signal('');

    constructor(private bibleGatewayService: BibleGatewayService) {}

    async onHoverEnter(event: MouseEvent) {
        this.showPopup = true;
        this.popupX = event.clientX; // small offset
        this.popupY = event.clientY + 10;

        this.bibleGatewayService
            .getVerse(this.bookRef())
            .then(result => {
                this.result.set(result);
            });
    }

    hidePopup() {
        this.showPopup = false;
    }
}