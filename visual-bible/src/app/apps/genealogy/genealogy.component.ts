import { Component } from "@angular/core";
import { GenealogyEntry, GetFather, GetGenealogyData } from "./genealogy.data";

@Component({
    selector: 'app-genealogy',
    styleUrl: 'genealogy.component.scss',
    templateUrl: 'genealogy.component.html'
})
export class GenealogyComponent {

    genealogy: GenealogyEntry[];

    periods = [
        { name: 'Creation to 500', start: 0, end: 500, color: 'rgba(255,0,0,0.2)' },
        { name: '500 to 1000', start: 500, end: 1000, color: 'rgba(0,255,0,0.2)' },
        { name: '1000 to 1500', start: 1000, end: 1500, color: 'rgba(0,0,255,0.2)' },
        { name: '1500 to 2000', start: 1500, end: 2000, color: 'rgba(255,255,0,0.2)' }
    ];

    constructor() {
        this.genealogy = GetGenealogyData();
    }

    getLineHeight(entry: GenealogyEntry): number {
        return entry.age / 2;
    }

    getLineTop(entry: GenealogyEntry): number {
        var father = GetFather(entry);
        if (father) {
            return (entry.bornAtFathersAge / 2) + this.getLineTop(father);
        }

        return 0;
    }

    getMaxYear(): number {
        return 2000;
    }

    getLabelColor(period: any): string {
        return period.color.replace('0.2', '0.6');
    }
};