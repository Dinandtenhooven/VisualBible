import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal} from '@angular/core';
import { BgBook } from './models/bg-book';
import { SettingsService } from './settings.service';

@Injectable({providedIn: 'root'})
export class BibleGatewayService {
    
    private readonly baseUrl = "https://api.scripture.api.bible/v1";
    private readonly apiKey = "780d392699683094e702baee3a2cde62";

    private readonly http: HttpClient = inject(HttpClient);

    books = signal<BgBook[]>([]);

    constructor(public settingsService: SettingsService) {
        this.loadBooks();
    }

    loadBooks() {
        this.http.get<any>(`${this.baseUrl}/bibles`, {
            headers: this.getHeaders()
        }).subscribe(res => {
            var books = res.data as BgBook[];
            this.books.set(books);
        });
    }

    public async getVerse(bookRef: string): Promise<string> {
        var result = await this.getVerses(bookRef).then(response => {
            var verse = response.data.content;
            verse = verse.replace(/<[^>]*>/g, '');
            verse = verse.replace(/^\d+/, ' ').trim();

            return verse;
        });

        return result;
    }

    private async getVerses(bookRef: string): Promise<any> {
        const bibleId = this.settingsService.defaultBibleVersion?.id ?? 'de4e12af7f28f599-02';

        return this.http.get(
            `${this.baseUrl}/bibles/${bibleId}/verses/${bookRef}`
            , {
            headers: this.getHeaders()
        }).toPromise();
    }

    private getHeaders(): HttpHeaders {
        return new HttpHeaders({
        "api-key": this.apiKey
        });
    }


}