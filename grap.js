google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  // Set Data
  const data = google.visualization.arrayToDataTable([
    ['Country', 'Mhl'],
    ['Matematics', 80],
    ['Pysics', 90],
    ['Biology', 40],
    ['Chemistry', 50],
    ['English', 40]
  ]);

  // Set Options
  const options = {
    title: 'THEORITICAL SKILL',
    is3D: true,
    backgroundColor: 'transparent',
    titleTextStyle: {
      fontSize: 30,   // Ukuran font judul
      bold: true,     // Mengaktifkan teks tebal
      color: '#0000' // Warna font
    },
    legend: {
        position: 'bottom' // Menempatkan legend di bawah grafik
    }
  };

  // Draw
  const chart = new google.visualization.PieChart(document.getElementById('myChart'));
  chart.draw(data, options);
}
