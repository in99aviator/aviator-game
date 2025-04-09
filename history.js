let history = [];

function updateHistory(multiplier) {
  history.unshift(multiplier.toFixed(2) + "x");
  if (history.length > 10) history.pop();
  document.getElementById("historyValues").innerText = history.join(", ");
}