export class GenealogyEntry {
    name: string = '';
    father: string = '';
    age: number = 0;
    bornAtFathersAge: number = 0;
    bookRef: string | null = '';
}

export function GetGenealogyData(): GenealogyEntry[] {
    return [
        { name: 'Adam', father: '', age: 930, bornAtFathersAge: 0, bookRef: 'GEN.5.3' },
        { name: 'Seth', father: 'Adam', age: 912, bornAtFathersAge: 130, bookRef: 'GEN.5.6' },
        { name: 'Enosh', father: 'Seth', age: 905, bornAtFathersAge: 105, bookRef: 'GEN.5.9' },
        { name: 'Kenan', father: 'Enosh', age: 910, bornAtFathersAge: 90, bookRef: 'GEN.5.13' },
        { name: 'Mahalalel', father: 'Kenan', age: 895, bornAtFathersAge: 70, bookRef: 'GEN.5.15' },
        { name: 'Jared', father: 'Mahalalel', age: 962, bornAtFathersAge: 65, bookRef: 'GEN.5.18' },
        { name: 'Enoch', father: 'Jared', age: 365, bornAtFathersAge: 162, bookRef: 'GEN.5.21' },
        { name: 'Methuselah', father: 'Enoch', age: 969, bornAtFathersAge: 65, bookRef: 'GEN.5.25' },
        { name: 'Lamech', father: 'Methuselah', age: 777, bornAtFathersAge: 187, bookRef: 'GEN.5.30' },
        { name: 'Noah', father: 'Lamech', age: 950, bornAtFathersAge: 182, bookRef: 'GEN.5.32' },

        { name: 'Shem', father: 'Noah', age: 600, bornAtFathersAge: 502, bookRef: 'GEN.10.1' },
        { name: 'Arphaxad', father: 'Shem', age: 438, bornAtFathersAge: 100, bookRef: 'GEN.10.24' },
        { name: 'Shelah', father: 'Arphaxad', age: 433, bornAtFathersAge: 35, bookRef: 'GEN.10.24' },
        { name: 'Eber', father: 'Shelah', age: 464, bornAtFathersAge: 30, bookRef: 'GEN.10.25' },
        { name: 'Peleg', father: 'Eber', age: 239, bornAtFathersAge: 34, bookRef: null },
        { name: 'Joktan', father: 'Eber', age: 239, bornAtFathersAge: 34, bookRef: 'GEN.10.26' },
        { name: 'Reu', father: 'Joktan', age: 239, bornAtFathersAge: 30, bookRef: 'GEN.10.27' },
        { name: 'Serug', father: 'Reu', age: 230, bornAtFathersAge: 32, bookRef: 'GEN.10.28' },
        { name: 'Nahor', father: 'Serug', age: 148, bornAtFathersAge: 30, bookRef: 'GEN.10.29' },
        { name: 'Terah', father: 'Nahor', age: 205, bornAtFathersAge: 29, bookRef: 'GEN.10.30' },
        { name: 'Abraham', father: 'Terah', age: 175, bornAtFathersAge: 70, bookRef: 'GEN.10.30' },
    ];
}

export function GetFather(entry: GenealogyEntry): GenealogyEntry | undefined {
    var genealogy = GetGenealogyData();
    return genealogy.find(e => e.name === entry.father);
}
