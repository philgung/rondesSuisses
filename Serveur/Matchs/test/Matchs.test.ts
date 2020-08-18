import { match } from "assert"

describe('Déclenchemnt d\'un match', () =>{
    it('Je déclenche un match à 13:31:30, l\'heure de début de match est 13:31:30', () => {
        let heureDeDebut = new Date(2020, 8, 3, 13, 31, 30);
        let match = new Match(heureDeDebut);
        expect(match.heureDeDebut.getHours()).toBe(13);
        expect(match.heureDeDebut.getMinutes()).toBe(31);
        expect(match.heureDeDebut.getSeconds()).toBe(30);
    })
});
// Arrêt Matchs
// Lorsque je débute un match, et que je l’arrête 5 min après, alors la durée dudit match est de 5
// min. Le match en question possède une heure de début et une heure de fin.


// Saisie score

class Match{
    readonly heureDeDebut: Date;
    constructor(heureDeDebut:Date){
        this.heureDeDebut = heureDeDebut;
    }

    
}