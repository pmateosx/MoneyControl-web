import React from "react";
import ReactApexChart from "react-apexcharts";

class ExpenseCategoriesChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [44, 55, 41, 17, 15],
        options: {
          chart: {
            toolbar: {
                show: false
                },
            type: 'donut',
          },
          dataLabels: {
            enabled: false
          },
          legend: {
            show: false
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                show: false,
                position: 'bottom'
              }
            }
          }]
        },
      
      };
    }

  

    render() {
      return (
        <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height='300' width="300"/>
        </div>
      );
    }
  }

  export default ExpenseCategoriesChart