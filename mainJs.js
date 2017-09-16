google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawAgeChart);
      google.charts.setOnLoadCallback(drawIncomeChart);
      google.charts.setOnLoadCallback(drawCityChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Amount'],
          ['Dining',     38.30],
          ['Transportation',      12.01],
          ['Utilities',  0],
          ['Clothing', 146.25],
          ['Entertainment', 20.50],
          ['Other', 320.40]
        ]);


        var options = {
          title: 'Spending Breakdown'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }

      function drawAgeChart() {
        var data = google.visualization.arrayToDataTable([
          ['Category', 'You', 'Average 18 Year Old'],
          ['Dining', 38.30, 25.71],
          ['Transportation', 12.01, 18.20],
          ['Utilities', 0, 8.00],
          ['Clothing', 146.25, 25.00],
          ['Entertainment', 20.50, 24.04],
          ['Other', 320.40, 45.03]
        ]);

        var options = {
          chart: {
            title: 'Spending Comparison',
            subtitle: 'Compared to 18 year olds',
          },
          bars: 'horizontal' // Required for Material Bar Charts.
        };

        var chart = new google.charts.Bar(document.getElementById('barchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }

      function drawIncomeChart() {
        var data = google.visualization.arrayToDataTable([
          ['Category', 'You', 'Average Person of Your Income'],
          ['Dining', 38.30, 25.82],
          ['Transportation', 12.01, 150.81],
          ['Utilities', 0, 8.31],
          ['Clothing', 146.25, 41.42],
          ['Entertainment', 20.50, 25.92],
          ['Other', 320.40, 105.25]
        ]);

        var options = {
          chart: {
            title: 'Spending Comparison',
            subtitle: 'Compared to people of your income group',
          },
          bars: 'horizontal' // Required for Material Bar Charts.
        };

        var chart = new google.charts.Bar(document.getElementById('barchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }

      function drawCityChart() {
        var data = google.visualization.arrayToDataTable([
          ['Category', 'You', 'Average Person in Your City'],
          ['Dining', 38.30, 50.24],
          ['Transportation', 12.01, 10.34],
          ['Utilities', 0, 10.40],
          ['Clothing', 146.25, 50.14],
          ['Entertainment', 20.50, 11.42],
          ['Other', 320.40, 104.13]
        ]);

        var options = {
          chart: {
            title: 'Spending Comparison',
            subtitle: 'Compared to poeple in yout city',
          },
          bars: 'horizontal' // Required for Material Bar Charts.
        };

        var chart = new google.charts.Bar(document.getElementById('barchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
