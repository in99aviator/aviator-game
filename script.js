let history = [];

function makePrediction() {
  const input = document.getElementById("prediction");
  const resultDisplay = document.getElementById("resultDisplay");
  const historyList = document.getElementById("historyList");

  const userPrediction = parseFloat(input.value);
  if (isNaN(userPrediction) || userPrediction <= 0) {
    resultDisplay.textContent = "कृपया एक सही prediction दर्ज करें।";
    return;
  }

  // Simulate actual result (random multiplier between 1.00 to 5.00)
  const actualMultiplier = (Math.random() * 4 + 1).toFixed(2);

  let outcome = "";
  if (userPrediction <= actualMultiplier) {
    outcome = "सही भविष्यवाणी! (जीत)";
  } else {
    outcome = "गलत भविष्यवाणी। (हार)";
  }

  const resultText = `आपने अनुमान लगाया: ${userPrediction}, असली मल्टीप्लायर था: ${actualMultiplier} → ${outcome}`;
  resultDisplay.textContent = resultText;

  // Save to history
  history.unshift(resultText);
  if (history.length > 10) history.pop();

  // Update history list
  historyList.innerHTML = "";
  history.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    historyList.appendChild(li);
  });

  input.value = "";
}
