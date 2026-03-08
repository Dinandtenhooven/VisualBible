import { Injectable } from "@angular/core";
import { BgBook } from "./models/bg-book";

@Injectable({
    providedIn: 'root'
})
export class SettingsService {


    set defaultBibleVersion(version: BgBook) {
        var stringified = JSON.stringify(version);
        localStorage.setItem('defaultBibleVersion', stringified);
    }

    get defaultBibleVersion(): BgBook {
        const version = localStorage.getItem('defaultBibleVersion');

        if(!version) {
            var defaultVersion = BgBook.default();
            this.defaultBibleVersion = defaultVersion;
            return defaultVersion;
        }

        const book = JSON.parse(version ?? '{}') as BgBook;
        return book;
    }

}