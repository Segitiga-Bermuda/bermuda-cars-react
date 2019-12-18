import React from "react";
import { Line as LineChart } from "react-chartjs-2";
import { AXIOS } from "../helpers";

let API = process.env.REACT_APP_API;

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
    margin: "0px auto"
  }
};

class chartLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {}
    };
  }

  componentDidMount() {
    let year = new Date().getFullYear();
    let path = `${API}/sales/revenue/${year}`;

    console.log(path);
    AXIOS()
      .get(path)
      .then(res => {
        let totalProfit = [];
        let totalLoss = [];
        let month = [];
        let newMonth = [];
        let newProfit = [];
        let newLoss = [];
        let newMonth2 = [];
        let newProfit2 = [];
        let newLoss2 = [];

        res.data.data.forEach(element => {
          totalProfit.push(element.profitTotal);
          totalLoss.push(element.totalLoss);
          month.push(element.month);
        });

        for (let x = 0; x < month.length; ++x) {
          switch (month[x]) {
            case "January":
              newMonth[0] = "January";
              newProfit[0] = totalProfit[x];
              newLoss[0] = totalLoss[x];
              break;
            case "February":
              newMonth[1] = "February";
              newProfit[1] = totalProfit[x];
              newLoss[1] = totalLoss[x];
              break;
            case "March":
              newMonth[2] = "March";
              newProfit[2] = totalProfit[x];
              newLoss[2] = totalLoss[x];
              break;
            case "April":
              newMonth[3] = "April";
              newProfit[3] = totalProfit[x];
              newLoss[3] = totalLoss[x];
              break;
            case "May":
              newMonth[4] = "May";
              newProfit[4] = totalProfit[x];
              newLoss[4] = totalLoss[x];
              break;
            case "June":
              newMonth[5] = "June";
              newProfit[5] = totalProfit[x];
              newLoss[5] = totalLoss[x];
              break;
            case "July":
              newMonth[6] = "July";
              newProfit[6] = totalProfit[x];
              newLoss[6] = totalLoss[x];
              break;
            case "August":
              newMonth[7] = "August";
              newProfit[7] = totalProfit[x];
              newLoss[7] = totalLoss[x];
              break;
            case "September":
              newMonth[8] = "September";
              newProfit[8] = totalProfit[x];
              newLoss[8] = totalLoss[x];
              break;
            case "October":
              newMonth[9] = "October";
              newProfit[9] = totalProfit[x];
              newLoss[9] = totalLoss[x];
              break;
            case "November":
              newMonth[10] = "November";
              newProfit[10] = totalProfit[x];
              newLoss[10] = totalLoss[x];
              break;
            case "December":
              newMonth[11] = "December";
              newProfit[11] = totalProfit[x];
              newLoss[11] = totalLoss[x];
              break;
          }
        }

        for (let x = 0; x < newMonth.length; ++x) {
          if (newMonth[x]) {
            newMonth2.push(newMonth[x]);
            newProfit2.push(newProfit[x]);
            newLoss2.push(newLoss[x]);
          }
        }

        this.setState({
          chartData: {
            labels: newMonth2,
            datasets: [
              {
                label: "Profit",
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
                data: newProfit2
              },
              {
                label: "Loss",
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
                data: newLoss2
              }
            ]
          }
        });
        console.log(this.state.chartData);
      });
  }
  render() {
    return (
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div style={styles.graphContainer}>
          <h3>2019</h3>
          <LineChart
            data={this.state.chartData}
            options={options}
            width="600"
            height="250"
          />
        </div>
      </div>
    );
  }
}

export default chartLine;
