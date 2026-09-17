// Enable drag and drop

new Sortable(document.getElementById('teamList'), {
    animation: 150
});

// Generate graphic

document.getElementById('submitBtn').addEventListener('click', () => {

    const canvas = document.getElementById('outputCanvas');
    const ctx = canvas.getContext('2d');

    canvas.style.display = 'block';

    // Background
    const gradient = ctx.createRadialGradient(
        540, 960, 200,
        540, 960, 1400
    );

    gradient.addColorStop(0, '#1a1a1a');
    gradient.addColorStop(1, '#000000');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Title
    ctx.fillStyle = 'gold';
    ctx.font = '70px Arial Black';
    ctx.textAlign = 'center';
    ctx.fillText(
        '2026/27 Season Predictor',
        canvas.width / 2,
        120
    );

    // League table
    ctx.fillStyle = 'white';
    ctx.font = '40px Arial';

    const teams = document.querySelectorAll('#teamList .team');

    let y = 250;

    teams.forEach((team, index) => {
        ctx.fillText(
            `${index + 1}. ${team.textContent}`,
            canvas.width / 2,
            y
        );

        y += 70;
    });

    // Cup winner
    const cupWinner =
        document.getElementById('cupWinner').value;

    // Playoff winner
    const playoffWinner =
        document.getElementById('playoffWinner').value;

    y += 40;

    ctx.fillStyle = 'gold';
    ctx.font = '50px Arial Black';

    ctx.fillText(
        `Challenge Cup Winner: ${cupWinner}`,
        canvas.width / 2,
        y
    );

    y += 80;

    ctx.fillText(
        `Playoff Winner: ${playoffWinner}`,
        canvas.width / 2,
        y
    );

    // Download link

    const downloadLink =
        document.getElementById('downloadLink');

    downloadLink.href =
        canvas.toDataURL('image/png');

    downloadLink.download =
        'Flames_Prediction.png';

    downloadLink.style.display = 'block';
});