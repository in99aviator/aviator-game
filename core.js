let multiplier = 1.0;
let balance = 1000;
let bet = 0;
let isCrashed = false, hasCashedOut = false;
let crashPoint = 2.0;
let interval;
let autoPlay = false;

function updateBalance() {
  document.getElementById("balance").innerText = `Balance: ₹${balance.toFixed(2)}`;
}

function startGame() {
  clearInterval(interval);
  playStartSound();
  resetPlane();
  multiplier = 1.0;
  isCrashed = false;
  hasCashedOut = false;
  document.getElementById("status").innerText = "";

  bet = parseFloat(document.getElementById("betAmount").value);
  let autoCash = parseFloat(document.getElementById("autoCashout").value);
  if (!bet || bet <= 0 || bet > balance) {
    document.getElementById("status").innerText = "Invalid bet amount!";
    return;
  }

  balance -= bet;
  updateBalance();
  crashPoint = (Math.random() * 5 + 1).toFixed(2);
  interval = setInterval(() => {
    multiplier += 0.05;
    animatePlane(multiplier);

    if (!hasCashedOut && autoCash && multiplier >= autoCash) {
      cashOut(true);
    }

    if (multiplier >= crashPoint) {
      clearInterval(interval);
      isCrashed = true;
      playCrashSound();
      vibrate();
      updateHistory(multiplier);
      if (!hasCashedOut) {
        document.getElementById("status").innerText = `Crashed at ${crashPoint}x. You lost ₹${bet}.`;
      }
      if (autoPlay) setTimeout(startGame, 2000);
    }
  }, 100);
}

function cashOut(auto = false) {
  if (isCrashed || hasCashedOut) return;
  hasCashedOut = true;
  clearInterval(interval);
  let winnings = (bet * multiplier).toFixed(2);
  balance += parseFloat(winnings);
  updateBalance();
  playCashoutSound();
  vibrate();
  document.getElementById("status").innerText = `${auto ? "Auto" : "Manual"} Cashout at ${multiplier.toFixed(2)}x — Won ₹${winnings}`;
  updateHistory(multiplier);
  if (autoPlay) setTimeout(startGame, 2000);
}

function toggleAutoPlay() {
  autoPlay = !autoPlay;
  document.querySelector("button[onclick='toggleAutoPlay()']").innerText = `Auto Play: ${autoPlay ? "ON" : "OFF"}`;
}