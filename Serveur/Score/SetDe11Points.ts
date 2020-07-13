import { SetBase } from "./SetBase";
export class SetDe11Points extends SetBase {
    protected readonly NombreDePointsMax = 15;
    protected readonly NombreDePointsPourGagnerUnSet = 11;

    constructor(valeurA: number, valeurB: number) {
        super(valeurA, valeurB);
    }
}
