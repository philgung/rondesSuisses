import { SetBase } from "./SetBase";
import { IScore } from "./Score";

export class ScoreUnSetDe21 implements IScore {
    readonly set: SetDe21Points;
    constructor(valeurA: number, valeurB: number) {
        this.set = new SetDe21Points({valeurA, valeurB});
    }
    estValide(): boolean {
        return this.set.estValide();
    }
}

class SetDe21Points extends SetBase{
    protected readonly NombreDePointsMax = 30;
    protected readonly NombreDePointsPourGagnerUnSet = 21;

    constructor(set : {valeurA: number, valeurB: number}) {
        super(set)
    }
}
