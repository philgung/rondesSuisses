import { IScore } from "./Score";
import { SetDe11Points } from "./SetDe11Points";

export class ScoreUnSetDe11 implements IScore {
    readonly set: SetDe11Points;
    constructor(setA: number, setB: number) {
        this.set = new SetDe11Points({valeurA:setA, valeurB:setB});
    }
    estValide(): boolean {
        return this.set.estValide();
    }
}


