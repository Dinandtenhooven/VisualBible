import { Component } from "@angular/core";
import { GenealogyEntry, GetFather, GetGenealogyData } from "./genealogy.data";
import { BibleReferenceComponent } from "../../shared/bible-reference/bible-reference.component";

@Component({
    selector: 'app-genealogy',
    styleUrl: 'genealogy.component.scss',
    templateUrl: 'genealogy.component.html',
    imports: [BibleReferenceComponent]
})
export class GenealogyComponent {

    genealogy: GenealogyEntry[];
    readonly initialOffset = 40;

    constructor() {
        this.genealogy = GetGenealogyData();
    }

    getLineHeight(entry: GenealogyEntry): number {
        return entry.age;
    }

    getLineTop(entry: GenealogyEntry): number {
        var father = GetFather(entry);

        if (father) {
            return (entry.bornAtFathersAge / 2) + this.getLineTop(father);
        }

        return 10;
    }

    getMaxYear(): number {
        return 2000;
    }

    getLabelColor(period: any): string {
        return period.color.replace('0.2', '0.6');
    }
};