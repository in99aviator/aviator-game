const players = [
  { name: "Raju", score: 7520 },
  { name: "Seema", score: 6890 },
  { name: "Amit", score: 6230 },
  { name: "Priya", score: 5880 },
  { name: "Brijesh", score: 5700 }
];

function updateLeaderboard() {
  const list = document.getElementById("players");
  list.innerHTML = "";
  players.sort((a, b) => b.score - a.score);
  players.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.name}: ₹${p.score}`;
    list.appendChild(li);
  });
}

updateLeaderboard();