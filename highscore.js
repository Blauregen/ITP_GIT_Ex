class Highscore {
    constructor() {
        this.scores = [];
    }

    addScore(name, score) {
        this.scores.push({ name, score });
        this.scores.sort((a, b) => b.score - a.score);
        if (this.scores.length > 10) {
            this.scores.pop();
        }
    }

    getTopScores() {
        return this.scores;
    }
}