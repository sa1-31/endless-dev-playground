import { calculateDelay, calculateGas } from "./utils.js";

export async function runSimulation(config, onStep) {
  const steps = ["user", "mempool", "validator", "block", "final"];

  let log = `Action: ${config.action}\n`;

  for (const step of steps) {
    onStep(step);
    await wait(calculateDelay(config.load));
    log += `✔ ${step} processed\n`;
  }

  const gasUsed = calculateGas(config);
  log += `\nGas Used: ${gasUsed}`;
  log += `\nValidators: ${config.validators}`;
  log += `\nStatus: SUCCESS`;

  return log;
}

function wait(ms) {
  return new Promise(res => setTimeout(res, ms));
}
