new Sortable(document.getElementById('teamList'), {
    animation: 150
});

document.getElementById('submitBtn').addEventListener('click', () => {

    console.log("Button clicked");   // ← ADD IT RIGHT HERE

    const canvas = document.getElementById('outputCanvas');
    const ctx = canvas.getContext('2d');

    // Background
    const gradient = ctx.createRadialGradient(540, 960, 200, 540, 960, 1400);
    gradient.addColorStop(0, "#1a1a1a");
    gradient.addColorStop(1, "#000");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Title
    ctx.fillStyle = "gold";
    ctx.font = "70px Arial Black";
    ctx.textAlign = "center";
    ctx.fillText("2026/27 Season Predictor", 540, 200);

    // Team List
    ctx.fillStyle = "white";
    ctx.font = "50px Arial";
    const teams = document.querySelectorAll('.team');
    let y = 350;

    teams.forEach((team, index) => {
        ctx.fillText(`${index + 1}. ${team.textContent}`, 540, y);
        y += 90;
    });

   const link = document.getElementById('downloadLink');
link.href = canvas.toDataURL("image/png");
link.download = "Flames_Prediction.png";
link.style.display = "block";

