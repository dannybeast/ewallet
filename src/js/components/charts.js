import Chart from 'chart.js';

// График развития вашей команды
const ctx = document.getElementById('growth-graph');
Chart.defaults.global.elements.rectangle.backgroundColor = 'rgb(225, 173, 82)';
Chart.defaults.global.legend.display = false;
const myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['22/02', '23/02', '24/02', '25/02', '26/02', '27/02','28/02', '01/03', '02/03', '03/03', '04/03', '05/03', '06/03', '07/03', '08/03'],
    datasets: [{
        label: 'процентов',
        data: [5, 19, 3, 5, 2, 3, 5, 19, 3, 5, 2, 3, 5, 7, 10],
        hoverBackgroundColor: 'rgb(225, 173, 82)'
    }]
  },
  options: {
    scales: {
      xAxes: [{
        maxBarThickness: 25,
        gridLines: {
            offsetGridLines: false
        }
    }],
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}
});
//-