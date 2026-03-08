export class BgBook {
    id: string = '';
    dblId: string = '';
    relatedDbl: string | null = null;
    abbreviation: string = '';
    abbreviationLocal: string = '';
    name: string = '';
    nameLocal: string = '';
    description: string = '';
    descriptionLocal: string = '';
    type: string = '';
    updatedAt: Date = new Date();

    static default(): BgBook {
        return {
            id: "de4e12af7f28f599-02",
            dblId: "de4e12af7f28f599",
            relatedDbl: null,
            name: "King James (Authorised) Version",
            nameLocal: "King James Version",
            abbreviation: "engKJV",
            abbreviationLocal: "KJV",
            description: "Protestant",
            descriptionLocal: "Protestant",
            type: "text",
            updatedAt: new Date("2025-10-01T18:54:59.000Z"),
            audioBibles: []
        } as BgBook;
    }
}
