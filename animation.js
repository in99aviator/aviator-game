let plane = document.getElementById("plane");
let posX = 10, posY = 70;

function resetPlane() {
  posX = 10;
  posY = 70;
  plane.style.left = posX + "%";
  plane.style.top = posY + "%";
}

function animatePlane(multiplier) {
  posX += 0.5;
  posY -= 0.2;
  plane.style.left = posX + "%";
  plane.style.top = posY + "%";
  document.getElementById("multiplier").innerText = multiplier.toFixed(2) + "x";
}