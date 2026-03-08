import { Component } from "@angular/core";
import { BibleGatewayService } from "../services/bible-gateway.service";
import { BgBook } from "../services/models/bg-book";
import { SettingsService } from "../services/settings.service";

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    providers: [BibleGatewayService, SettingsService]
})
export class SettingsComponent {

    books: BgBook[] = [];
    defaultBibleVersion: string = 'nkjv';

    bibleSearch: BgBook[] = [];
    
    constructor(
        public bibleGatewayService: BibleGatewayService,
        public settingsService: SettingsService
    ) { }

    ngOnInit(): void {
        this.defaultBibleVersion = this.settingsService.defaultBibleVersion?.name ?? 'nkjv';
    }

    onSearchBibleSearch(event: Event): void {
        const input = event.target as HTMLInputElement;
        const searchTerm = input.value?.toLowerCase() ?? '';

        this.bibleSearch = this.bibleGatewayService
            .books()
            .filter(book => {
                return book.name.toLowerCase().includes(searchTerm)
            })
            .slice(0, 10);
    }

    selectBibleVersion(book: BgBook): void {
        this.defaultBibleVersion = book.name;
        this.bibleSearch = [];
        this.settingsService.defaultBibleVersion = book;
    }
}