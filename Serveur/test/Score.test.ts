// Définir un scoring
// 1 set gagnant de 11 points
// 2 sets gagnants de 11 points
// 2 sets gagnants de 21 points

// Set de 21 points : Si score à 20-20, il faut 2 points d’écarts pour gagner le set. Si aucun départage, on arrête au premier arrivé à 30.
import { ScoreUnSetDe11 } from "../Score/ScoreUnSetDe11";
import { ScoreUnSetDe21 } from "../Score/ScoreUnSetDe21";

describe('Scoring',() => {
    describe('valide un set de 11 points', () => {
        it('11-09 est valide', () => {
            let scoreAValider = new ScoreUnSetDe11(11, 9);
            expect(scoreAValider.estValide()).toBe(true)
        })
        it('09-11 est valide', () => {
            let scoreAValider = new ScoreUnSetDe11(9, 11);
            expect(scoreAValider.estValide()).toBe(true)
        })
        it('10-10 n\'est pas valide', () => {
            let scoreAValider = new ScoreUnSetDe11(10, 10);
            expect(scoreAValider.estValide()).toBe(false)
        })
        it('12-10 est valide', () => {
            let scoreAValider = new ScoreUnSetDe11(12, 10);
            expect(scoreAValider.estValide()).toBe(true)
        })
        it('09-10 n\'est pas valide', () => {
            let scoreAValider = new ScoreUnSetDe11(9, 10);
            expect(scoreAValider.estValide()).toBe(false)
        })
        it('13-11 est valide', () => {
            let scoreAValider = new ScoreUnSetDe11(13, 11);
            expect(scoreAValider.estValide()).toBe(true)
        })
        it('15-14 est valide', () => {
            let scoreAValider = new ScoreUnSetDe11(15, 14);
            expect(scoreAValider.estValide()).toBe(true)
        })
        it('15-15 n\'est pas valide', () => {
            let scoreAValider = new ScoreUnSetDe11(15, 15);
            expect(scoreAValider.estValide()).toBe(false)
        })
        it('16-14 n\'est pas valide', () => {
            let scoreAValider = new ScoreUnSetDe11(16, 14);
            expect(scoreAValider.estValide()).toBe(false)
        })
    })
    describe('valide un set de 21 points', () => {
        it('21-11 est valide', () => {
            let scoreAValider = new ScoreUnSetDe21(21, 11);
            expect(scoreAValider.estValide()).toBe(true)
        })
        it('11-21 est valide', () => {
            let scoreAValider = new ScoreUnSetDe21(11, 21);
            expect(scoreAValider.estValide()).toBe(true)
        })
    })
    
});