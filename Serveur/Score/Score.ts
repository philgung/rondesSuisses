export class Score {
    readonly set : Set;
    constructor(setA : number, setB : number){
        this.set = new Set(setA, setB);
    }
    estValide(): boolean {
        return this.set.estValide();
    }
}

class Set{
    estValide(): boolean {
        if (this.valeurA >= 10 && this.valeurB >= 10)
        {
            if (this.valeurA > 15 || this.valeurB >= 15)
            {
                return false;
            }
            if (this.valeurA == 15 && this.valeurB == 15)
            {
                return false;
            }
            if (this.valeurA == 15 || this.valeurB == 15)
            {
                return true;
            }
           return Math.abs(this.valeurA - this.valeurB) == 2; 
        }
        if (this.valeurA == 11) return true;
        if (this.valeurB == 11) return true;
        return false;
    }
    readonly valeurA : number;
    readonly valeurB : number;
    constructor(setA : number, setB : number){
        this.valeurA = setA;
        this.valeurB = setB;
    }
}