export class Network {
  constructor(load) {
    this.load = load;
  }

  getCongestionFactor() {
    switch (this.load) {
      case "low":
        return 0.8;
      case "medium":
        return 1.2;
      case "high":
        return 1.8;
      default:
        return 1;
    }
  }

  getLatency() {
    return Math.floor(300 * this.getCongestionFactor());
  }

  getFailureChance() {
    if (this.load === "high") return 0.15;
    if (this.load === "medium") return 0.07;
    return 0.02;
  }
}
