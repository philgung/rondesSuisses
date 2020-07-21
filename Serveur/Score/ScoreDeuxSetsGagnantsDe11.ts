import { IScore } from "./Score";
import { SetDe11Points } from "./SetDe11Points";

export class ScoreDeuxSetsGagnantsDe11 implements IScore{
    readonly set1: SetDe11Points;
    readonly set2: SetDe11Points;
    readonly set3: SetDe11Points;

    constructor(set1A: number, set1B: number,
        set2A: number, set2B: number,
        set3A?: number, set3B?: number) {
        this.set1 = new SetDe11Points(set1A, set1B);
        this.set2 = new SetDe11Points(set2A, set2B);
        if (set3A != undefined && set3B != undefined)
        {
            this.set3 = new SetDe11Points(set3A, set3B);
        }
    }
    estValide(): boolean {
        return this.set1.estValide() && this.set2.estValide()
            && (this.set3 == undefined ||  this.set3.estValide());
    }
}
