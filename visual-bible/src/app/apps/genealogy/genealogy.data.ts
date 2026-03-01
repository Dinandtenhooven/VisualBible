export class GenealogyEntry {
    name: string = '';
    father: string = '';
    age: number = 0;
    bornAtFathersAge: number = 0;
}

export function GetGenealogyData(): GenealogyEntry[] {
    return [
        { name: 'Adam', father: '', age: 930, bornAtFathersAge: 0 },
        { name: 'Seth', father: 'Adam', age: 912, bornAtFathersAge: 130 },
        { name: 'Enosh', father: 'Seth', age: 905, bornAtFathersAge: 105 },
        { name: 'Kenan', father: 'Enosh', age: 910, bornAtFathersAge: 90 },
        { name: 'Mahalalel', father: 'Kenan', age: 895, bornAtFathersAge: 70 },
        { name: 'Jared', father: 'Mahalalel', age: 962, bornAtFathersAge: 65 },
        { name: 'Enoch', father: 'Jared', age: 365, bornAtFathersAge: 162 },
        { name: 'Methuselah', father: 'Enoch', age: 969, bornAtFathersAge: 65 },
        { name: 'Lamech', father: 'Methuselah', age: 777, bornAtFathersAge: 187 },
        { name: 'Noah', father: 'Lamech', age: 950, bornAtFathersAge: 182 },

        { name: 'Shem', father: 'Noah', age: 600, bornAtFathersAge: 502 },
        { name: 'Arphaxad', father: 'Shem', age: 438, bornAtFathersAge: 100 },
        { name: 'Shelah', father: 'Arphaxad', age: 433, bornAtFathersAge: 35 },
        { name: 'Eber', father: 'Shelah', age: 464, bornAtFathersAge: 30 },
        { name: 'Peleg', father: 'Eber', age: 239, bornAtFathersAge: 34 },
        { name: 'Reu', father: 'Peleg', age: 239, bornAtFathersAge: 30 },
        { name: 'Serug', father: 'Reu', age: 230, bornAtFathersAge: 32 },
        { name: 'Nahor', father: 'Serug', age: 148, bornAtFathersAge: 30 },
        { name: 'Terah', father: 'Nahor', age: 205, bornAtFathersAge: 29 },
        { name: 'Abraham', father: 'Terah', age: 175, bornAtFathersAge: 70 },
    ];
}

export function GetFather(entry: GenealogyEntry): GenealogyEntry | undefined {
    var genealogy = GetGenealogyData();
    return genealogy.find(e => e.name === entry.father);
}
