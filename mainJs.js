google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
google.charts.load('current', {'packages':['bar']});
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
