Highcharts.chart('container2', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Percentage of Breweries per state in United States'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
      }
    }
  },
  series: [{
    name: 'States',
    colorByPoint: true,
    data: [{
      name: 'California',
      y: 11.55,
      sliced: true,
      selected: true
    }, {
      name: 'Colorado',
      y: 5.54
    }, {
      name: 'New York',
      y: 5.40
    }, {
      name: 'Washington',
      y: 5.23
    }, {
      name: 'Michigan',
      y: 4.81
    }, {
      name: 'Texas',
      y: 4.56
    }, {
      name: 'Pennsylvania',
      y: 4.47
    }, {
      name: 'Florida',
      y: 4.05
    }, {
      name: 'North Carolina',
      y: 3.98
    }, {
      name: 'Ohio',
      y: 3.93
    }, {
      name: 'Oregon',
      y: 3.74
    }, {
      name: 'Virginia',
      y: 3.24
    }, {
      name: 'Illinois',
      y: 3.22
    }, {
      name: 'Wisconsin',
      y: 2.66
    }, {
      name: 'Minnesota',
      y: 2.33
    }, {
      name: 'Massachusetts',
      y: 2.20
    }, {
      name: 'Indiana',
      y: 2.12
    }, {
      name: 'Arizona',
      y: 1.59
    }, {
      name: 'New Jersey',
      y: 1.51
    }, {
      name: 'Missouri',
      y: 1.46
    }, {
      name: 'Maine',
      y: 1.45
    }, {
      name: 'Maryland',
      y: 1.43
    }, {
      name: 'Tennessee',
      y: 1.41
    }, {
      name: 'Georgia',
      y: 1.31
    }, {
      name: 'Connecticut',
      y: 1.19
    }, {
      name: 'Montana',
      y: 1.17
    }, {
      name: 'Iowa',
      y: 1.1
    }, {
      name: 'New Mexico',
      y: 1.06
    }, {
      name: 'South Carolina',
      y: 1.02
    }, {
      name: 'New Hampshire',
      y: 0.92
    }, {
      name: 'Idaho',
      y: 0.78
    }, {
      name: 'Vermont',
      y: 0.77
    }, {
      name: 'Kentucky',
      y: 0.74
    }, {
      name: 'Nebraska',
      y: 0.68
    }, {
      name: 'Nevada',
      y: 0.67
    }, {
      name: 'Kansas',
      y: 0.61
    }, {
      name: 'Alabama',
      y: 0.58
    }, {
      name: 'Arkansas',
      y: 0.57
    }, {
      name: 'Alaska',
      y: 0.57
    }, {
      name: 'Louisiana',
      y: 0.56
    }, {
      name: 'Utah',
      y: 0.54
    }, {
      name: 'Oklahoma',
      y: 0.54
    }, {
      name: 'Wyoming',
      y: 0.43
    }, {
      name: 'West Virginia',
      y: 0.39
    }, {
      name: 'Delaware',
      y: 0.37
    }, {
      name: 'South Dakota',
      y: 0.35
    }, {
      name: 'Rhode Island',
      y: 0.3
    }, {
      name: 'Hawaii',
      y: 0.28
    }, {
      name: 'District of Columbia',
      y: 0.21
    }, {
      name: 'North Dakota',
      y: 0.2
    }, {
      name: 'Mississippi',
      y: 0.2
    }]
  }]
});