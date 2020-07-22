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
        if (this.verifieValiditePourNombreDePointsMax())
        {
            return false;
        }

        // Les deux scores au dela de 10 points
        if (this.set.valeurA >= this.NombreDePointsPourGagnerUnSet - 1 &&
            this.set.valeurB >= this.NombreDePointsPourGagnerUnSet - 1) {
            const differenceDePoints = Math.abs(this.resultat());            
            return (differenceDePoints == 1 && 
                        (this.set.valeurA == this.NombreDePointsMax ||
                        this.set.valeurB == this.NombreDePointsMax)) ||
                    differenceDePoints == 2;            
        }
        // En dessous ou égal à 11 points
        return this.set.valeurA == this.NombreDePointsPourGagnerUnSet ||
            this.set.valeurB == this.NombreDePointsPourGagnerUnSet;
    }

    resultat() : number {
        return this.set.valeurA - this.set.valeurB;
    }

    private verifieValiditePourNombreDePointsMax() : boolean{
        return (
            this.set.valeurA > this.NombreDePointsMax ||
            this.set.valeurB > this.NombreDePointsMax) ||
            (this.set.valeurA == this.NombreDePointsMax &&
                this.set.valeurB == this.NombreDePointsMax);
    }
}
