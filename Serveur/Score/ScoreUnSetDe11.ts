import { IScore } from "./Score";
import { SetDe11Points } from "./SetDe11Points";

export class ScoreUnSetDe11 implements IScore {
    private readonly set: SetDe11Points;
    constructor(setA: number, setB: number) {
        this.set = new SetDe11Points({valeurA:setA, valeurB:setB});
    }
    public estValide(): boolean {
        return this.set.estValide();
    }
}


