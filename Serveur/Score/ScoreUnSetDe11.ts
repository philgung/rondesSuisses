import { IScore } from "./Score";
import { SetBase } from "./SetBase";

export class ScoreUnSetDe11 implements IScore {
    readonly set: SetDe11Points;
    constructor(setA: number, setB: number) {
        this.set = new SetDe11Points(setA, setB);
    }
    estValide(): boolean {
        return this.set.estValide();
    }
}

class SetDe11Points extends SetBase{
    protected readonly NombreDePointsMax = 15;
    protected readonly NombreDePointsPourGagnerUnSet = 11;
    
    constructor(valeurA: number, valeurB: number) {
        super(valeurA, valeurB)
    }
}


