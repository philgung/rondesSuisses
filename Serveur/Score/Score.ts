export interface IScore{
    estValide(): boolean
}

export abstract class ScoreBase{
    readonly valeurA: number;
    readonly valeurB: number;
    constructor(valeurA: number, valeurB: number) {
        this.valeurA = valeurA;
        this.valeurB = valeurB;
    }
    protected abstract readonly NombreDePointsMax;
    protected abstract readonly NombreDePointsPourGagnerUnSet;
    estValide(): boolean {
        if (this.valeurA >= this.NombreDePointsPourGagnerUnSet - 1 && 
            this.valeurB >= this.NombreDePointsPourGagnerUnSet - 1)
        {
            if (this.valeurA > this.NombreDePointsMax || 
                this.valeurB > this.NombreDePointsMax)
            {
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
}