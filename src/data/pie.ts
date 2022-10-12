export default {
  chart: {
    type: "pie",
    marginBottom: 100
  },
  title: {
    text: ''
  },
  subtitle: {
    text: '215<br>133 (+74)<br>82',
    verticalAlign: 'middle',
    y: -20,
    floating: true,
    style: {
      fontSize: 14,
      fontWeight: "bold",
      color: "#000000"
    }
  },
  series: [{
    type: 'pie',
    name: 'Browser share',
    innerSize: '80%',
    data: [
      ['38%', 38],
      ['62%', 62],
    ]
  }]
}