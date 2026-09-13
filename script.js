// ===== Flames Predictor Script =====
// Arena Glow Flames Style — Even‑Aligned Centred Layout
// Fully dynamic based on user selections

const canvas = document.getElementById("predictorCanvas");
const ctx = canvas.getContext("2d");

// ===== Make the team list draggable =====
Sortable.create(teamList, {
  animation: 150,
  ghostClass: "ghost"
});

// ===== Read the user's custom team order =====
function getTeamOrder() {
  return Array.from(document.querySelectorAll("#teamList li"))
              .map(li => li.textContent.trim());
}

// ===== Read the user's chosen winners =====
function getCupWinner() {
  return document.getElementById("cupWinner").value.trim();
}

function getPlayoffWinner() {
  return document.getElementById("playoffWinner").value.trim();
}

// ===== Glow + Frame =====
function drawArenaGlow() {
  const gradient = ctx.createRadialGradient(
    canvas.width / 2,
    canvas.height / 2,
    100,
    canvas.width / 2,
    canvas.height / 2,
    500
  );
  gradient.addColorStop(0, "#ffb400");
  gradient.addColorStop(0.4, "#ff6600");
  gradient.addColorStop(1, "#000000");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#FFD700";
  ctx.lineWidth = 10;
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

// ===== Title =====
function drawTitle() {
  ctx.textAlign = "center";
  ctx.fillStyle = "#FFD700";
  ctx.font = "bold 48px Varsity";
  ctx.fillText("2026/27 SEASON PREDICTOR", canvas.width / 2, 100);
}

// ===== Centred Even‑Aligned List =====
function drawTeamList(teams) {
  ctx.textAlign = "center";
  ctx.font = "bold 28px Varsity";
  ctx.fillStyle = "#FFFFFF";

  const startY = 180;
  const lineHeight = 40;

  teams.forEach((team, i) => {
    const number = (i + 1).toString().padStart(2, " ");
    const text = `${number}.  ${team}`;
    ctx.fillText(text, canvas.width / 2, startY + i * lineHeight);
  });
}

// ===== Winners Section =====
function drawWinners(cupWinner, playoffWinner) {
  ctx.textAlign = "center";
  ctx.font = "bold 26px Varsity";

  const baseY = 650;

  ctx.fillStyle = "#FFD700";
  ctx.fillText("Challenge Cup Winner:", canvas.width / 2, baseY);

  ctx.fillStyle = "#FFFFFF";
  ctx.fillText(cupWinner, canvas.width / 2, baseY + 35);

  ctx.fillStyle = "#FFD700";
  ctx.fillText("Playoff Winner:", canvas.width / 2, baseY + 90);

  ctx.fillStyle = "#FFFFFF";
  ctx.fillText(playoffWinner, canvas.width / 2, baseY + 125);
}

// ===== Generate Prediction (MAIN FUNCTION) =====
function generatePrediction() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const teams = getTeamOrder();          // ← User’s custom order
  const cupWinner = getCupWinner();      // ← User’s chosen Cup winner
  const playoffWinner = getPlayoffWinner(); // ← User’s chosen Playoff winner

  drawArenaGlow();
  drawTitle();
  drawTeamList(teams);
  drawWinners(cupWinner, playoffWinner);
}

// ===== Button Trigger =====
document.getElementById("generateBtn").addEventListener("click", generatePrediction);

// ===== Initial Render =====
generatePrediction();
