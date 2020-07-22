import { IScore } from "./Score";
import { SetDe11Points } from "./SetDe11Points";

export class ScoreDeuxSetsGagnantsDe11 implements IScore{
    private readonly set1: SetDe11Points;
    private readonly set2: SetDe11Points;
    private readonly set3: SetDe11Points;

    constructor(set1A: number, set1B: number,
        set2A: number, set2B: number,
        set3A?: number, set3B?: number) {
        this.set1 = new SetDe11Points({valeurA:set1A, valeurB:set1B});
        this.set2 = new SetDe11Points({valeurA:set2A, valeurB:set2B});
        if (set3A != undefined && set3B != undefined)
        {
            this.set3 = new SetDe11Points({valeurA:set3A, valeurB:set3B});
        }
    }

    public estValide(): boolean {
        return this.set1.estValide() && this.set2.estValide()
            && (this.set3 == undefined ||  this.set3.estValide())
            && this.leNombreDeSetGagnantEstDe(2);
    }

    private leNombreDeSetGagnantEstDe(nbreSetsGagnants:number):boolean{
        let sets = [ this.set1, this.set2];
        if (this.set3 != undefined)
        {
            sets.push(this.set3);
        }
        const nombreDeSetGagnantDeA = sets.filter(set => set.resultat() > 0).length;
        const nombreDeSetGagnantDeB = sets.filter(set => set.resultat() < 0).length;

        return Math.max(nombreDeSetGagnantDeA, nombreDeSetGagnantDeB) == nbreSetsGagnants;
    }
}
