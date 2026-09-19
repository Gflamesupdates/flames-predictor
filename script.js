// Enable drag and drop
new Sortable(document.getElementById('teamList'), {
    animation: 150
});

// Generate Prediction Graphic
document.getElementById('submitBtn').addEventListener('click', () => {

    const canvas = document.getElementById('outputCanvas');
    const ctx = canvas.getContext('2d');

    canvas.style.display = "block";

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Arena glow background
    const gradient = ctx.createRadialGradient(
        540, 960, 200,
        540, 960, 1400
    );

    gradient.addColorStop(0, "#1a1a1a");
    gradient.addColorStop(1, "#000000");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Title
    ctx.fillStyle = "#FFD700";
    ctx.font = "70px Arial Black";
    ctx.textAlign = "center";
    ctx.fillText(
        "2026/27 Season Predictor",
        canvas.width / 2,
        140
    );

    const teams = document.querySelectorAll('#teamList .team');

    const cupWinner =
    document.getElementById('cupWinner').value;

const playoffWinner =
    document.getElementById('playoffWinner').value;

/* TABLE FRAME */

ctx.strokeStyle = "#FFD700";
ctx.lineWidth = 6;

ctx.strokeRect(
    40,    // left
    180,   // top
    1000,  // width
    900    // height
);

let y = 260;

teams.forEach((team, index) => {
// Team row background

ctx.fillStyle = "#65001C";

ctx.fillRect(
    140,
    y - 50,
    820,
    65
);

// Gold border

ctx.strokeStyle = "#FFD700";
ctx.lineWidth = 2;

ctx.strokeRect(
    140,
    y - 50,
    820,
    65
);
        const teamName = team.textContent;

        // Position colour

       if (index === 0) {
    ctx.fillStyle = "#D4AF37";
}
else if (index >= 8) {
    ctx.fillStyle = "#7A0019";
}
else {
    ctx.fillStyle = "#4A4A4A";
}

   ctx.fillStyle = "#C0C0C0";
ctx.strokeStyle = "#FFD700";
ctx.lineWidth = 2;
        }

        ctx.font = "bold 48px Arial";
        ctx.textAlign = "left";
// Row background

ctx.fillStyle = "#65001C";

ctx.fillRect(
    140,
    y - 50,
    820,
    65
);
        // Position Number
        ctx.fillText(
            `${index + 1}`,
            80,
            y
        );

        // Team Name
        ctx.fillStyle = "#FFFFFF";

        ctx.fillText(
            teamName,
            180,
            y
        );

        let badgeX = 880;

        // CC Badge
        if (teamName === cupWinner) {

            ctx.fillStyle = "#FFD700";

            ctx.fillRect(
                badgeX,
                y - 40,
                70,
                40
            );

            ctx.fillStyle = "#000000";
            ctx.font = "bold 24px Arial";

            ctx.fillText(
                "CC",
                badgeX + 15,
                y - 10
            );

            badgeX -= 85;
        }

        // PO Badge
        if (teamName === playoffWinner) {

            ctx.fillStyle = "#7A0019";

            ctx.fillRect(
                badgeX,
                y - 40,
                70,
                40
            );

            ctx.fillStyle = "#FFD700";
            ctx.font = "bold 24px Arial";

            ctx.fillText(
                "PO",
                badgeX + 15,
                y - 10
            );
        }

        y += 80;

    });

    // Download PNG
    const link = document.getElementById('downloadLink');

    link.href = canvas.toDataURL("image/png");
    link.download = "Flames_Prediction.png";
    link.style.display = "block";

});