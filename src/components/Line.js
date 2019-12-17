import React from "react";
import { Line as LineChart } from "react-chartjs-2";

function chartData() {
  return {
    labels: ["July", "Agustus", "September", "Oktober", "November", "Desember"],
    datasets: [
      {
        label: "My First dataset",
        fill: "false",
        lineTension: 0.1,
        borderCapStyle: "butt",
        borderJoinStyle: "miter",
        borderColor: "rgba(75,192,192,1)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: [65, 59, 80, 81, 56, 55]
      },
      {
        label: "My Second dataset",
        fill: "false",
        lineTension: 0.1,
        borderCapStyle: "butt",
        borderJoinStyle: "miter",
        borderColor: "rgba(240, 52, 52, 1)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: [28, 48, 40, 19, 86, 27]
      }
    ]
  };
}

const options = {
  scaleShowGridLines: true,
  scaleGridLineColor: "rgba(0,0,0,.05)",
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: true,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 4,
  pointDotStrokeWidth: 1,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  legendTemplate:
    '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
};

const styles = {
  graphContainer: {
    border: "1px solid black",
    padding: "15px",
    width: "70%",
    margin: "0px auto",
    marginTop: "100px"
  }
};

class chartLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: chartData()
    };
  }

  render() {
    return (
      <div style={styles.graphContainer}>
        <LineChart
          data={this.state.data}
          options={options}
          width="600"
          height="250"
        />
      </div>
    );
  }
}

export default chartLine;
