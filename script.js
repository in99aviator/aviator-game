let progress = 0;
let interval;

function getSignal() {
  const multiplier = (Math.random() * 300).toFixed(2);
  document.getElementById("multiplier").innerText = `${multiplier}x`;

  let seconds = 44;
  document.getElementById("seconds").innerText = `${seconds} seconds`;

  clearInterval(interval);
  progress = 0;
  const progressBar = document.getElementById("progress");
  progressBar.style.width = "0%";

  interval = setInterval(() => {
    seconds--;
    progress += 100 / 44;
    progressBar.style.width = `${progress}%`;
    document.getElementById("seconds").innerText = `${seconds} seconds`;

    if (seconds <= 0) {
      clearInterval(interval);
    }
  }, 1000);
}

function backToMenu() {
  alert("Menu pe wapas ja rahe hain...");
}
