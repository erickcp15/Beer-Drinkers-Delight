Highcharts.chart('container', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Percentage of Breweries in United States'
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
    name: 'Brewery Type',
    colorByPoint: true,
    data: [{
      name: 'Micro',
      y: 50.32,
      sliced: true,
      selected: true
    }, {
      name: 'Brewpub',
      y: 29.40
    }, {
      name: 'Planning',
      y: 12.97
    }, {
      name: 'Contract',
      y: 2.79
    }, {
      name: 'Regional',
      y: 2.68
    }, {
      name: 'Large',
      y: 0.95
    }, {
      name: 'Proprietor',
      y: 0.90
    }]
  }]
});