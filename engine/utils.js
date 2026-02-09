export function calculateDelay(load) {
  if (load === "low") return 400;
  if (load === "medium") return 700;
  return 1100;
}

export function calculateGas(config) {
  let base = 50000;
  if (config.action === "deploy") base += 80000;
  if (config.action === "stake") base += 20000;
  return Math.min(base + config.gas * 0.3, config.gas);
}
