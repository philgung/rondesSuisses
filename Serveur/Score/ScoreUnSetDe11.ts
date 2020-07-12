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
    private readonly NombreDePointsMax = 15;
    private readonly NombreDePointsPourGagnerUnSet = 11;

    estValide(): boolean {
        if (this.valeurA >= this.NombreDePointsPourGagnerUnSet - 1 && 
            this.valeurB >= this.NombreDePointsPourGagnerUnSet - 1) 
            {
            if (this.valeurA > this.NombreDePointsMax || 
                this.valeurB > this.NombreDePointsMax) {
                return false;
            }
            if (this.valeurA == this.NombreDePointsMax && 
                this.valeurB == this.NombreDePointsMax) {
                return false;
            }
            if (this.valeurA == this.NombreDePointsMax || 
                this.valeurB == this.NombreDePointsMax) {
                return true;
            }
            return Math.abs(this.valeurA - this.valeurB) == 2;
        }
        if (this.valeurA == this.NombreDePointsPourGagnerUnSet || 
            this.valeurB == this.NombreDePointsPourGagnerUnSet){
            return true;
        }
        return false;
    }
    readonly valeurA: number;
    readonly valeurB: number;
    constructor(valeurA: number, valeurB: number) {
        this.valeurA = valeurA;
        this.valeurB = valeurB;
    }
}


