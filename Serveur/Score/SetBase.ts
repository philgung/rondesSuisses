export interface ISet{
    estValide(): boolean
}

type Set = {valeurA:number, valeurB:number}

export abstract class SetBase implements ISet{
    private readonly set:Set;
    constructor(set : {valeurA: number, valeurB: number}) {
        this.set = set;
    }

    protected abstract readonly NombreDePointsMax;
    protected abstract readonly NombreDePointsPourGagnerUnSet;
    estValide(): boolean {
        // Les deux scores au dela de 10 points
        if (this.set.valeurA > this.NombreDePointsMax ||
            this.set.valeurB > this.NombreDePointsMax) {
            return false;
        }
        
        if (this.set.valeurA >= this.NombreDePointsPourGagnerUnSet - 1 &&
            this.set.valeurB >= this.NombreDePointsPourGagnerUnSet - 1) {
            
            if (this.set.valeurA == this.NombreDePointsMax &&
                this.set.valeurB == this.NombreDePointsMax) {
                return false;
            }
            if (this.set.valeurA == this.NombreDePointsMax ||
                this.set.valeurB == this.NombreDePointsMax) {
                return true;
            }
            return Math.abs(this.set.valeurA - this.set.valeurB) == 2;
        }

        // En dessous ou égal à 11 points
        if (this.set.valeurA == this.NombreDePointsPourGagnerUnSet ||
            this.set.valeurB == this.NombreDePointsPourGagnerUnSet) {
            return true;
        }

        return false;
    }

    resultat() : number {
        return this.set.valeurA - this.set.valeurB;
    }
}
