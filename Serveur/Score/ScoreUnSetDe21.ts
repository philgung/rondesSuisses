import { IScore } from "./Score";

export class ScoreUnSetDe21 implements IScore {
    readonly valeurA: number;
    readonly valeurB: number;
    constructor(valeurA: number, valeurB: number) {
        this.valeurA = valeurA;
        this.valeurB = valeurB;
    }
    estValide(): boolean {
        if (this.valeurA >= 20 && this.valeurB >= 20)
        {
            if (this.valeurA > 30 || this.valeurB > 30)
            {
                return false;
            }
            if (Math.abs(this.valeurA - this.valeurB) == 2)
            {
                return true;
            }
            else if (Math.abs(this.valeurA - this.valeurB) == 1 && 
            (this.valeurA == 30 || this.valeurB == 30)){
                return true;
            }
            return false;
        }
        if (this.valeurA == 21 || this.valeurB == 21){
            return true;
        }
        
        return false;
    }
}
