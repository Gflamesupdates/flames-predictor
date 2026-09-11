// Enable drag-and-drop
new Sortable(document.getElementById('teamList'), {
  animation: 150
});

// Handle submission
document.getElementById('submitBtn').addEventListener('click', () => {
  const items = document.querySelectorAll('#teamList li');
  const prediction = [];

  items.forEach((item, index) => {
    prediction.push(`${index + 1}. ${item.textContent}`);
  });

  document.getElementById('result').innerHTML =
    "<h3>Your Prediction:</h3>" + prediction.join("<br>");

  document.getElementById('downloadBtn').style.display = "block";

  drawPredictionImage(prediction);
});

// Draw prediction image with watermark
function drawPredictionImage(prediction) {
  const canvas = document.getElementById('shareCanvas');
  const ctx = canvas.getContext('2d');
  const flamesImg = document.getElementById('flamesImage');

  flamesImg.onload = () => {

    // Background
    const gradient = ctx.createRadialGradient(
      canvas.width / 2, canvas.height / 2, 150,
      canvas.width / 2, canvas.height / 2, 700
    );
    gradient.addColorStop(0, "#3a3a3a");
    gradient.addColorStop(0.5, "#1f1f1f");
    gradient.addColorStop(1, "#0f0f0f");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Gold frame
    ctx.strokeStyle = "#d4af37";
    ctx.lineWidth = 18;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

    // Bottom-right watermark
    const wmWidth = canvas.width * 0.35;
    const wmHeight = wmWidth * 0.45;
    const wmX = canvas.width - wmWidth - 40;
    const wmY = canvas.height - wmHeight - 160;

    ctx.globalAlpha = 0.25;
    ctx.drawImage(flamesImg, wmX, wmY, wmWidth, wmHeight);
    ctx.globalAlpha = 1.0;

    // Bottom banner
    ctx.fillStyle = "#800000";
    ctx.fillRect(20, canvas.height - 140, canvas.width - 40, 120);

    ctx.fillStyle = "#d4af37";
    ctx.font = "bold 36px Anton, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("#GuildfordFlames   #EIHL   #FlamesNation", canvas.width / 2, canvas.height - 70);

    // Prediction list
    ctx.fillStyle = "#ffffff";
    ctx.font = "32px Arial";
    ctx.textAlign = "left";

    let y = 180;
    prediction.forEach(line => {
      ctx.fillText(line, 100, y);
      y += 50;
    });
  };
}

// Download image
document.getElementById('downloadBtn').addEventListener('click', () => {
  const canvas = document.getElementById('shareCanvas');
  const link = document.createElement('a');
  link.download = "Flames_EIHL_Prediction.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
});
