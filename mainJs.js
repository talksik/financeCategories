google.charts.load('current', {'packages':['corechart']});
<<<<<<< HEAD
      google.charts.setOnLoadCallback(drawChart);
      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawBarChart);
=======
google.charts.setOnLoadCallback(drawChart);
google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);
>>>>>>> parent of 3e059c2... d

function drawChart() {

<<<<<<< HEAD
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Amount'],
          ['Food and Dining',     11],
          ['Transportation',      2],
          ['Utilities',  2],
          ['Clothing', 2],
          ['Entertainment', 2],
          ['Other',7]
        ]);

        var options = {
          title: 'Spending Breakdown'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
=======
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Food and Dining',     11],
        ['Clothing',  2],
        ['Entertainment', 2],
        ['Transportation',    7],
        ['Other',   1]
    ]);

    var options = {
        title: 'My Daily Activities'
    };
>>>>>>> parent of 3e059c2... d

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
<<<<<<< HEAD
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
=======
     }
};

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Category', 'You', 'Average 18 Year Old'],
        ['Food and Dining', 1000, 400],
        ['Utilities', 1170, 460],
        ['Clothing', 660, 120],
        ['Entertainment', 1030, 540],
        ['Transportation', 1030, 540],
        ['Other', 1030, 540]
    ]);

    var options = {
        chart: {
            title: 'Comparing Spending Habits',
            subtitle: 'Based on other 18 year olds',
        },
        bars: 'horizontal', // Required for Material Bar Charts.
        hAxis: {
            format: 'decimal'
        },
        height: 400,
        colors: ['#1b9e77', '#d95f02', '#7570b3']
    };

    var chart = new google.charts.Bar(document.getElementById('chart_div'));

    chart.draw(data, google.charts.Bar.convertOptions(options));

    var btns = document.getElementById('btn-group');

    btns.onclick = function(e) {

        if (e.target.tagName === 'BUTTON') {
            options.hAxis.format = e.target.id === 'none' ? '' : e.target.id;
            chart.draw(data, google.charts.Bar.convertOptions(options));
        }
    }
}
>>>>>>> parent of 3e059c2... d
