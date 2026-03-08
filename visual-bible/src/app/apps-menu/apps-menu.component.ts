import { CommonModule } from "@angular/common";
import { Component, inject, signal, TemplateRef, WritableSignal } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap/modal';

@Component({
    selector: 'app-apps-menu',
    imports: [CommonModule, RouterLink],
    templateUrl: './apps-menu.component.html',
    styleUrls: ['./apps-menu.component.scss']
})
export class AppsMenuComponent {

    apps = [
        { name: "Genealogy", path: "genealogy" }
    ]

    private modalService = inject(NgbModal);
	closeResult: WritableSignal<string> = signal('');

    open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult.set(`Closed with: ${result}`);
			},
			(reason) => {
				this.closeResult.set(`Dismissed ${this.getDismissReason(reason)}`);
			},
		);
	}
    
    private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}
}