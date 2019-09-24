import 'chart.js';


let data = $('.graph').data('values');
let dates = $('.graph').data('dates');
let data_array = data.split(',');
let dates_array = dates.split(',');

console.log(data, dates)
export var ctx = document.getElementById('summary-chart');
export var myChart = new Chart(ctx, {
  type: 'line',

  data: {
    labels: dates_array,
    datasets: [{
      data: data_array,
      backgroundColor: [
        'rgba(166,232,244,0.6)'
      ],

      pointBackgroundColor: 'rgba(0, 0, 0, 0)',
      pointBorderColor: 'rgba(0, 0, 0, 0)',
      lineTension: 0,
      borderColor: [
        '#1b69af'
      ],

      borderWidth: 2
    }]
  },

  options: {
    tooltips: {
      //position: 'center',
      mode: 'index',
      intersect: false,
      caretSize: 0,
      callbacks: {
        label: function (tooltipItem, data) {
          return '$' + data['datasets'][0]['data'][tooltipItem['index']];
        },

      },
      backgroundColor: '#005ca8',
      titleFontSize: 0,
      titleMarginBottom: 0,
      titleSpacing: 0,
      bodyFontFamily: 'NotoSans',
      bodyFontStyle: '600',
      xPadding: 16,
      yPadding: 8,
      cornerRadius: 16,
      bodyFontColor: '#fff',
      bodyFontSize: 16,
      borderColor: '#005ca8',
      borderWidth: 1,
      displayColors: false
    },

    scales: {

      yAxes: [{
        display: false,

      }],
      xAxes: [{
        ticks: {

        }
      }],
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },

    legend: {
      display: false,
    }
  }
});