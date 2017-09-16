google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawBarChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Amount'],
          ['Food and Dining',     11],
          ['Transportation',      2],
          ['Utilities',  2],
          ['Clothing', 2],
          ['Entertainment', 2],
          ['Other',    7]
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
          ['Food and Dining', 1000, 400],
          ['Transportation', 1170, 460],
          ['Utilities', 660, 1120],
          ['Clothing', 1030, 540],
          ['Entertainment', 1030, 540],
          ['Other', 1030, 540]
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
