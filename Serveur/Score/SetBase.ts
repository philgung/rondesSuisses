export interface ISet{
    estValide(): boolean
}

type Set = {valeurA:number, valeurB:number}

export abstract class SetBase implements ISet{
    private readonly set:Set;
    protected abstract readonly NombreDePointsMax;
    protected abstract readonly NombreDePointsPourGagnerUnSet;

    constructor(set : {valeurA: number, valeurB: number}) {
        this.set = set;
    }

    public estValide(): boolean {
        if (this.verifieValiditePourNombreDePointsMax())
        {
            return false;
        }

        if (this.lesDeuxScoresSontAuDelaDe(this.NombreDePointsPourGagnerUnSet - 1)) {
            const differenceDePoints = Math.abs(this.resultat());            
            return (differenceDePoints == 1 && this.lunDesDeuxScoresEstEgaleA(this.NombreDePointsMax)) ||
                    differenceDePoints == 2;            
        }

        return this.lunDesDeuxScoresEstEgaleA(this.NombreDePointsPourGagnerUnSet);
    }

    public resultat() : number {
        return this.set.valeurA - this.set.valeurB;
    }

    private verifieValiditePourNombreDePointsMax() : boolean{
        return this.lunDesDeuxScoresEstSuperieurA(this.NombreDePointsMax) || this.lesDeuxScoresSontEgalesA(this.NombreDePointsMax);
    }

    private lesDeuxScoresSontAuDelaDe(valeur : number) : boolean{
        return this.set.valeurA >= valeur && this.set.valeurB >= valeur;
    }

    private lunDesDeuxScoresEstEgaleA(valeur : number) : boolean{
        return this.set.valeurA == valeur || this.set.valeurB == valeur;
    }

    private lesDeuxScoresSontEgalesA(valeur : number) : boolean{
        return this.set.valeurA == valeur && this.set.valeurB == valeur;
    }

    private lunDesDeuxScoresEstSuperieurA(valeur : number) : boolean{
        return this.set.valeurA > valeur || this.set.valeurB > valeur;
    }
}
