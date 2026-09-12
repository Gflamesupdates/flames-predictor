// --------------------------------------------------
// Build Draggable Team Table
// --------------------------------------------------

function buildTable() {
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

    let html = "<ul class='team-list'>";
    teams.forEach(team => {
        html += `<li class="team">${team}</li>`;
    });
    html += "</ul>";

    document.getElementById("tableContainer").innerHTML = html;

    // Enable drag-and-drop
    new Sortable(document.querySelector('.team-list'), {
        animation: 150
    });
}

buildTable();


// --------------------------------------------------
// Generate Prediction Graphic
// --------------------------------------------------

document.getElementById("generate").addEventListener("click", function () {

    const canvas = document.getElementById("predictorCanvas");
    const ctx = canvas.getContext("2d");

    // Background
    const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 200,
        canvas.width / 2, canvas.height / 2, 900
    );
    gradient.addColorStop(0, "#1a1a1a");
    gradient.addColorStop(1, "#000000");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Title
    ctx.fillStyle = "gold";
    ctx.font = "70px Anton";
    ctx.textAlign = "center";
    ctx.fillText("2026/27 Season Predictor", canvas.width / 2, 120);

    // Rankings
    ctx.fillStyle = "white";
    ctx.font = "48px Arial";

    const rows = document.querySelectorAll(".team-list .team");
    let y = 240;

    rows.forEach((row, index) => {
        ctx.fillText(`${index + 1}. ${row.textContent}`, canvas.width / 2, y);
        y += 70;
    });

    // Winners
    const cupWinner = document.getElementById("cupWinner").value;
    const playoffWinner = document.getElementById("playoffWinner").value;

    ctx.fillStyle = "gold";
    ctx.font = "54px Arial";
    ctx.fillText(`Challenge Cup: ${cupWinner}`, canvas.width / 2, 1000);
    ctx.fillText(`Playoffs: ${playoffWinner}`, canvas.width / 2, 1080);

    // Hashtags
    ctx.fillStyle = "gold";
    ctx.font = "40px Arial";
    ctx.fillText("#EIHL   #FlamesNation   #2026Season", canvas.width / 2, 1300);
});
