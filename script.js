const teams = document.querySelectorAll('#teamList .team');

const cupWinner =
    document.getElementById('cupWinner').value;

const playoffWinner =
    document.getElementById('playoffWinner').value;

let y = 260;

teams.forEach((team, index) => {

    const teamName = team.textContent;

    // Number colour

    if (index === 0) {
        ctx.fillStyle = "#FFD700";
    }
    else if (index >= 8) {
        ctx.fillStyle = "#FF3030";
    }
    else {
        ctx.fillStyle = "#C0C0C0";
    }

    ctx.font = "bold 50px Arial";
    ctx.textAlign = "left";

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

    let badgeX = 900;

    // CC badge

    if (teamName === cupWinner) {

        ctx.fillStyle = "#FFD700";

        ctx.fillRect(
            badgeX,
            y - 45,
            70,
            45
        );

        ctx.fillStyle = "#000000";
        ctx.font = "bold 28px Arial";

        ctx.fillText(
            "CC",
            badgeX + 15,
            y - 10
        );

        badgeX -= 85;
    }

    // PO badge

    if (teamName === playoffWinner) {

        ctx.fillStyle = "#7A0019";

        ctx.fillRect(
            badgeX,
            y - 45,
            70,
            45
        );

        ctx.fillStyle = "#FFD700";
        ctx.font = "bold 28px Arial";

        ctx.fillText(
            "PO",
            badgeX + 15,
            y - 10
        );
    }

    y += 80;
});