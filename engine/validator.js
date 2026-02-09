export class ValidatorSet {
  constructor(count) {
    this.count = count;
  }

  getConsensusTime() {
    if (this.count < 10) return 1200;
    if (this.count < 20) return 800;
    return 500;
  }

  hasConsensus() {
    // sadə majority logic
    const required = Math.floor(this.count * 0.67);
    const active = Math.floor(this.count * (0.9 + Math.random() * 0.1));
    return active >= required;
  }
}
