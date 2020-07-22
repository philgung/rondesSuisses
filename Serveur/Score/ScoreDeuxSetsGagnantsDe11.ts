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
    estValide(): boolean {
        return this.set1.estValide() && this.set2.estValide()
            && (this.set3 == undefined ||  this.set3.estValide())
            && this.leNombreDeSetGagnantEstDe(2);
    }

    private leNombreDeSetGagnantEstDe(nbreSetsGagnants:number):boolean{
        let joueurAGagneLePremierSet = this.set1.resultat() > 0;
        let joueurAGagneLeSecondSet = this.set2.resultat() > 0;
        let leNombreDeSetGagnant = 0;
        if (this.set3 == undefined)
        {
            if (joueurAGagneLePremierSet && joueurAGagneLeSecondSet ||
                !joueurAGagneLePremierSet && !joueurAGagneLeSecondSet)
            {
                leNombreDeSetGagnant = 2;
            }
        }
        else
        {
            let joueurAGagneLeTroisiemeSet = this.set3.resultat() > 0;
            let nombreDeSetGagneParLeJoueurA = [ joueurAGagneLePremierSet, joueurAGagneLeSecondSet, joueurAGagneLeTroisiemeSet];
            leNombreDeSetGagnant = Math.max(
                nombreDeSetGagneParLeJoueurA.filter(element => element).length,
                nombreDeSetGagneParLeJoueurA.filter(element => !element).length);
        }
        
        return leNombreDeSetGagnant == nbreSetsGagnants;
    }
}
