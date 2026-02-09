import { runSimulation } from "./engine/simulator.js";

const runBtn = document.getElementById("runBtn");
const log = document.getElementById("log");
const gasRange = document.getElementById("gasLimit");
const gasValue = document.getElementById("gasValue");

gasRange.oninput = () => {
  gasValue.textContent = gasRange.value;
};

runBtn.onclick = async () => {
  log.textContent = "";
  clearFlow();

  const config = {
    action: actionType.value,
    gas: Number(gasLimit.value),
    load: networkLoad.value,
    validators: Number(validators.value)
  };

  const result = await runSimulation(config, step => {
    activate(step);
  });

  log.textContent = result;
};

function activate(id) {
  document.getElementById(id).classList.add("active");
}

function clearFlow() {
  document.querySelectorAll(".node").forEach(n => n.classList.remove("active"));
}
