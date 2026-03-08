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

    periods = [
        { name: 'Creation to Flood', start: 0, end: 2347 , color: 'rgba(255,0,0,0.2)' }, // year / 2 to fit in 1000px
        { name: 'Flood to Jesus', start: 2347, end: 4747, color: 'rgba(0,255,0,0.2)' },
        { name: 'Jesus to now', start: 4747, end: 6773, color: 'rgba(0,0,255,0.2)' }
    ];

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