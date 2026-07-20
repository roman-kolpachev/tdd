export class BowlingGame {
  players: Record<string, Array<number>> = {};
  extraScore: Record<string, Array<number>> = {};
  addPlayer(name: string): void {
    if (this.players.hasOwnProperty(name)) {
      return;
    }

    this.players[name] = [];
    this.extraScore[name] = [];
  }
  getScore(name: string): number {
    if (!this.players.hasOwnProperty(name)) {
      throw new Error(`Player ${name} does not exist`);
    }
    return (
      this.players[name].reduce((acc, score) => acc + score, 0) +
      this.extraScore[name]?.reduce((acc, score) => acc + score, 0)
    );
  }
  addScore(name: string, score: number): void {
    if (!this.players.hasOwnProperty(name)) {
      throw new Error(`Player ${name} does not exist`);
    }
    if (this.players[name].length % 2 === 0) {
      if (
        (this.players[name]?.at(-1) || 0) +
          (this.players[name]?.at(-2) || 0) ===
        10
      ) {
        this.extraScore[name].push(score);
      }
    }
    this.players[name].push(score);
  }
  
}
