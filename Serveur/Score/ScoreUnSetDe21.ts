import { IScore } from "./Score";

export class ScoreUnSetDe21 implements IScore {
    readonly valeurA: number;
    readonly valeurB: number;
    constructor(valeurA: number, valeurB: number) {
        this.valeurA = valeurA;
        this.valeurB = valeurB;
    }
    estValide(): boolean {
        if (this.valeurA == 21 || this.valeurB == 21){
            return true;
        }
        return false;
    }
}
