import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
ChartJS.register();

export default function BarChart() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [100, 80, 150, 110, 130, 60, 130, 150, 140, 120, 110, 130],
        backgroundColor: " #f2eefe",
        hoverBackgroundColor: "#5b32eb",
        borderRadius: 15,
        borderSkipped: false,
      },
    ],
  };
  const option = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },

        display: true,
      },
      y: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return <Bar style={{ height: "28vh" }} data={data} options={option} />;
}
