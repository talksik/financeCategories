google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawBarChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Amount'],
          ['Food and Dining',     38.30],
          ['Transportation',      12.01],
          ['Utilities',  0],
          ['Clothing', 146.25],
          ['Entertainment', 20.50],
          ['Other', 100.01]
        ]);


        var options = {
          title: 'Spending Breakdown'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }

      function drawBarChart() {
        var data = google.visualization.arrayToDataTable([
          ['Category', 'You', 'Average 18 Year Old'],
          ['Food and Dining', 38.30, 35],
          ['Transportation', 12.01, 10],
          ['Utilities', 0, 4],
          ['Clothing', 146.25, 70],
          ['Entertainment', 20.50, 20],
          ['Other', 100.01, 100]
        ]);

        var options = {
          chart: {
            title: 'Spending Comparison',
            subtitle: 'Compared to other 18 year olds',
          },
          bars: 'horizontal' // Required for Material Bar Charts.
        };

        var chart = new google.charts.Bar(document.getElementById('barchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
