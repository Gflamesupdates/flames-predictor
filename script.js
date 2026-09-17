alert("latest script running");
// Enable drag and drop

new Sortable(document.getElementById('teamList'), {
    animation: 150
});

// Generate Prediction Graphic

document.getElementById('submitBtn').addEventListener('click', () => {

    const canvas = document.getElementById('outputCanvas');
    const ctx = canvas.getContext('2d');

    canvas.style.display = "block";

    // Background
    const gradient = ctx.createRadialGradient(
        540, 960, 200,
        540, 960, 1400
    );

    gradient.addColorStop(0, "#1a1a1a");
    gradient.addColorStop(1, "#000000");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Title
    ctx.fillStyle = "gold";
    ctx.font = "70px Arial Black";
    ctx.textAlign = "center";
    ctx.fillText("2026/27 Season Predictor", 540, 140);

    // Team List
    const teams = document.querySelectorAll('#teamList .team');

    let y = 260;

    ctx.fillStyle = "white";
    ctx.font = "50px Arial";

    teams.forEach((team, index) => {
        ctx.fillText(
            `${index + 1}. ${team.textContent}`,
            540,
            y
        );

        y += 80;
    });

    // Cup Winner
    const cupWinner =
        document.getElementById('cupWinner').value;

    ctx.fillStyle = "gold";
    ctx.font = "40px Arial Black";

    ctx.fillText(
        `Challenge Cup Winner`,
        540,
        1250
    );

    ctx.fillStyle = "white";

    ctx.fillText(
        cupWinner,
        540,
        1310
    );

    // Playoff Winner
    const playoffWinner =
        document.getElementById('playoffWinner').value;

    ctx.fillStyle = "gold";

    ctx.fillText(
        `Playoff Winner`,
        540,
        1420
    );

    ctx.fillStyle = "white";

    ctx.fillText(
        playoffWinner,
        540,
        1480
    );

    // Download Link
    const link =
        document.getElementById('downloadLink');

    link.href =
        canvas.toDataURL("image/png");

    link.download =
        "Flames_Prediction.png";

    link.style.display = "block";
});