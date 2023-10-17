import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class DoughnutChartWithText extends Component {
  render() {
    const data = {
      labels: ["#f1eefd", "#f2419d", "#6139ea"],
      datasets: [
        {
          data: [30, 80, 100],
          backgroundColor: ["#f2419d", "#6139ea", "#f1eefd"],
        },
      ],
    };

    const options = {
      cutout: "70%",

      plugins: {
        legend: {
          display: false,
        },
      },
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10,
        },
      },
      responsive: true,
      maintainAspectRatio: true,
    };

    const centerTextPlugin = {
      beforeDraw: (chart) => {
        const ctx = chart.ctx;
        const chartArea = chart.chartArea;
        const centerX = (chartArea.left + chartArea.right) / 2;
        const centerY = (chartArea.top + chartArea.bottom) / 2;

        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#000";
        ctx.font = "bold " + "20px Arial";
        ctx.fillText("65%", centerX, centerY - 10);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#000";
        ctx.font = "16px Arial";
        ctx.fillText("Total New", centerX, centerY + 10);
        ctx.fillText("Customers", centerX, centerY + 30);
      },
    };

    return (
      <div>
        <Doughnut
          data={data}
          options={options}
          plugins={[centerTextPlugin]}
          style={{ maxWidth: "200px", height: "20vh" }}
        />
      </div>
    );
  }
}

export default DoughnutChartWithText;
