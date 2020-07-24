import { SetBase } from "./SetBase";
export class SetDe11Points extends SetBase {
    protected readonly NombreDePointsMax = 15;
    protected readonly NombreDePointsPourGagnerUnSet = 11;

    constructor(set : {valeurA: number, valeurB: number}) {
        super(set);
    }
}
