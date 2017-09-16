google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Food and Dining',     11],
    ['Clothing',  2],
    ['Entertainment', 2],
    ['Transportation',    7],
    ['Other',   1]
  ]);

  var options = {
    title: 'Spending'
    is3D: true
  };
