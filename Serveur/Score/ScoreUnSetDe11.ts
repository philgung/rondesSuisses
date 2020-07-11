import { IScore } from "./Score";
export class ScoreUnSetDe11 implements IScore {
    readonly set: SetDe11Points;
    constructor(setA: number, setB: number) {
        this.set = new SetDe11Points(setA, setB);
    }
    estValide(): boolean {
        return this.set.estValide();
    }
}

class SetDe11Points{
    estValide(): boolean {
        if (this.valeurA >= 10 && this.valeurB >= 10) {
            if (this.valeurA > 15 || this.valeurB >= 15) {
                return false;
            }
            if (this.valeurA == 15 && this.valeurB == 15) {
                return false;
            }
            if (this.valeurA == 15 || this.valeurB == 15) {
                return true;
            }
            return Math.abs(this.valeurA - this.valeurB) == 2;
        }
        if (this.valeurA == 11)
            return true;
        if (this.valeurB == 11)
            return true;
        return false;
    }
    readonly valeurA: number;
    readonly valeurB: number;
    constructor(valeurA: number, valeurB: number) {
        this.valeurA = valeurA;
        this.valeurB = valeurB;
    }
}


