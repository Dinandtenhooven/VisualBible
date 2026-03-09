export class GenealogyEntry {
    name: string = '';
    father: string = '';
    age: number = 0;
    bornAtFathersAge: number = 0;
    bookRef: string = '';
}

export function GetGenealogyData(): GenealogyEntry[] {
    return [
        { name: 'Adam', father: '', age: 930, bornAtFathersAge: 0, bookRef: 'GEN.5.3' },
        { name: 'Seth', father: 'Adam', age: 912, bornAtFathersAge: 130, bookRef: 'GEN.5.6' },
        { name: 'Enosh', father: 'Seth', age: 905, bornAtFathersAge: 105, bookRef: 'GEN.5.9' },
        { name: 'Kenan', father: 'Enosh', age: 910, bornAtFathersAge: 90, bookRef: 'GEN.5.8' },
        { name: 'Mahalalel', father: 'Kenan', age: 895, bornAtFathersAge: 70, bookRef: 'GEN.5.9' },
        { name: 'Jared', father: 'Mahalalel', age: 962, bornAtFathersAge: 65, bookRef: 'GEN.5.10' },
        { name: 'Enoch', father: 'Jared', age: 365, bornAtFathersAge: 162, bookRef: 'GEN.5.24' },
        { name: 'Methuselah', father: 'Enoch', age: 969, bornAtFathersAge: 65, bookRef: 'GEN.5.25' },
        { name: 'Lamech', father: 'Methuselah', age: 777, bornAtFathersAge: 187, bookRef: 'GEN.5.31' },
        { name: 'Noah', father: 'Lamech', age: 950, bornAtFathersAge: 182, bookRef: 'GEN.6.10' },

        { name: 'Shem', father: 'Noah', age: 600, bornAtFathersAge: 502, bookRef: 'GEN.10.1' },
        { name: 'Arphaxad', father: 'Shem', age: 438, bornAtFathersAge: 100, bookRef: 'GEN.10.2' },
        { name: 'Shelah', father: 'Arphaxad', age: 433, bornAtFathersAge: 35, bookRef: 'GEN.10.3' },
        { name: 'Eber', father: 'Shelah', age: 464, bornAtFathersAge: 30, bookRef: 'GEN.10.4' },
        { name: 'Peleg', father: 'Eber', age: 239, bornAtFathersAge: 34, bookRef: 'GEN.10.5' },
        { name: 'Reu', father: 'Peleg', age: 239, bornAtFathersAge: 30, bookRef: 'GEN.10.6' },
        { name: 'Serug', father: 'Reu', age: 230, bornAtFathersAge: 32, bookRef: 'GEN.10.7' },
        { name: 'Nahor', father: 'Serug', age: 148, bornAtFathersAge: 30, bookRef: 'GEN.10.8' },
        { name: 'Terah', father: 'Nahor', age: 205, bornAtFathersAge: 29, bookRef: 'GEN.11.10' },
        { name: 'Abraham', father: 'Terah', age: 175, bornAtFathersAge: 70, bookRef: 'GEN.12.1' },
    ];
}

export function GetFather(entry: GenealogyEntry): GenealogyEntry | undefined {
    var genealogy = GetGenealogyData();
    return genealogy.find(e => e.name === entry.father);
}
