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

    public estValide(): boolean {
        if (this.verifieValiditePourNombreDePointsMax())
        {
            return false;
        }

        if (this.lesDeuxScoresSontAuDelaDuNombreDePointsPourGagnerUnSetMoinsUn()) {
            const differenceDePoints = Math.abs(this.resultat());            
            return (differenceDePoints == 1 && 
                        (this.set.valeurA == this.NombreDePointsMax ||
                        this.set.valeurB == this.NombreDePointsMax)) ||
                    differenceDePoints == 2;            
        }

        return this.lunDesDeuxScoresEstEgaleAuNombreDePointsPourGagnerUnSet();
    }

    public resultat() : number {
        return this.set.valeurA - this.set.valeurB;
    }

    private verifieValiditePourNombreDePointsMax() : boolean{
        return (
            this.set.valeurA > this.NombreDePointsMax ||
            this.set.valeurB > this.NombreDePointsMax) ||
            (this.set.valeurA == this.NombreDePointsMax &&
                this.set.valeurB == this.NombreDePointsMax);
    }

    private lesDeuxScoresSontAuDelaDuNombreDePointsPourGagnerUnSetMoinsUn() : boolean{
        return this.set.valeurA >= this.NombreDePointsPourGagnerUnSet - 1 &&
        this.set.valeurB >= this.NombreDePointsPourGagnerUnSet - 1;
    }

    private lunDesDeuxScoresEstEgaleAuNombreDePointsPourGagnerUnSet() : boolean{
        return this.set.valeurA == this.NombreDePointsPourGagnerUnSet ||
            this.set.valeurB == this.NombreDePointsPourGagnerUnSet;
    }
}
