import Chart from 'chart.js';

// График развития вашей команды
const ctx = document.getElementById('growth-graph');

if (ctx) {

  Chart.defaults.global.elements.rectangle.backgroundColor = 'rgb(225, 173, 82)';
  Chart.defaults.global.legend.display = false;

  let labels = ctx.getAttribute('data-labels');
  let values = ctx.getAttribute('data-values');
  let labels_array = labels.split(',');
  let values_array = values.split(',');

  const myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels_array,
      datasets: [{
        label: 'процентов',
        data: values_array,
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
}