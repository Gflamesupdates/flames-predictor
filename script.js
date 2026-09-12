new Sortable(document.getElementById('teamList'), {
    animation: 150
document.getElementById("generate").addEventListener("click", generateImage);

function generateImage() {
    const canvas = document.getElementById("predictorCanvas");
    const ctx = canvas.getContext("2d");

    // Background arena glow
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "#1a1a1a");
    gradient.addColorStop(1, "#3a3a3a");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Header
    ctx.fillStyle = "gold";
    ctx.font = "bold 70px Arial Black";
    ctx.textAlign = "center";
    ctx.fillText("2026/27 SEASON PREDICTOR", canvas.width / 2, 120);

    const teams = [
        "Cardiff Devils",
        "Belfast Giants",
        "Dundee Stars",
        "Coventry Blaze",
        "Glasgow Clan",
        "Fife Flyers",
        "Guildford Flames",
        "Manchester Storm",
        "Nottingham Panthers",
        "Sheffield Steelers"
    ];

    let y = 250;

    for (let i = 0; i < teams.length; i++) {

        // Row colours
        if (i === 0) ctx.fillStyle = "gold";               // 1st
        else if (i >= 1 && i <= 7) ctx.fillStyle = "#d0d0d0"; // 2nd–8th neutral grey
        else ctx.fillStyle = "#b30000";                   // 9th–10th red

        ctx.fillRect(150, y, 780, 80);

        // Divider line
        ctx.strokeStyle = "gold";
        ctx.lineWidth = 2;
        ctx.strokeRect(150, y, 780, 80);

        // Text
        ctx.fillStyle = (i === 0) ? "black" : "white";
        ctx.font = "bold 40px Arial";
        ctx.textAlign = "left";
        ctx.fillText(`${i + 1}. ${teams[i]}`, 170, y + 55);

        y += 90;
    }

    // Winner selections
    const cup = document.getElementById("cupWinner").value;
    const playoffs = document.getElementById("playoffWinner").value;

    ctx.fillStyle = "gold";
    ctx.font = "bold 45px Arial";
    ctx.textAlign = "center";

    if (cup) ctx.fillText(`Challenge Cup Winner: ${cup}`, canvas.width / 2, 1150);
    if (playoffs) ctx.fillText(`Playoff Winner: ${playoffs}`, canvas.width / 2, 1220);
}
