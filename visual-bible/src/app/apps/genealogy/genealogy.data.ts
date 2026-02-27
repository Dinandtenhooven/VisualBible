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
        { name: 'Enos', father: 'Seth', age: 912, bornAtFathersAge: 105 },
        { name: 'Cainan', father: 'Enos', age: 910, bornAtFathersAge: 90 },
        { name: 'Mahalaleel', father: 'Cainan', age: 895, bornAtFathersAge: 70 },
        { name: 'Jared', father: 'Mahalaleel', age: 962, bornAtFathersAge: 65 },
        { name: 'Enoch', father: 'Jared', age: 365, bornAtFathersAge: 162 },
        { name: 'Methuselah', father: 'Enoch', age: 969, bornAtFathersAge: 65 },
        { name: 'Lamech', father: 'Methuselah', age: 777, bornAtFathersAge: 187 },
        { name: 'Noah', father: 'Lamech', age: 950, bornAtFathersAge: 182 }
    ];
}

export function GetFather(entry: GenealogyEntry): GenealogyEntry | undefined {
    var genealogy = GetGenealogyData();
    return genealogy.find(e => e.name === entry.father);
}
