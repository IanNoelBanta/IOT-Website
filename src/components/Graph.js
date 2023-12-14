import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip
);

function LineGraph({ name, data, labels, unit = "", dataLimit }) {
  const limitedLabels = labels.slice(0, dataLimit).reverse();
  const graphData = {
    labels: limitedLabels,
    datasets: [
      {
        data: data,
        backgroundColor: (context) => {
          const bgColor = [
            "rgba(122, 58, 125, 0.8)", // White
            "rgba(122, 58, 125, 0.8)",
            "rgba(122, 58, 125, 0.8)",
            "rgba(122, 58, 125, 0.8)",
            "rgba(122, 58, 125, 0.8)",
            "rgba(122, 58, 125, 0.8)", // Fully transparent gray
          ];

          if (!context.chart.chartArea) {
            return;
          }

          const {
            ctx,
            chartArea: { top, bottom },
          } = context.chart;
          const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
          const colorTranches = 1 / (bgColor.length - 1);

          bgColor.forEach((color, index) => {
            gradientBg.addColorStop(index * colorTranches, color);
          });

          return gradientBg;
        },
        borderColor: "violet",
        borderWidth: 5,
        pointBorderColor: "black",
        pointBorderWidth: 4,
        tension: 0.5,
        fill: true,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 3,
        pointHoverBackgroundColor: "#431857",
        // Animation: {
        //   tension: {
        //     duration: 1000,
        //     easing: 'linear',
        //     from: 1,
        //     to: 0,
        //     loop: true
        //   }
        // }
      },
    ],
  };

  const options = {
    plugins: {
      legend: false,
    },

    layout: {
      padding: {
        left: 12,
        top: 20,
        bottom: 10,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      y: {
        min: Math.floor(Math.min(...data)) - 1,
        max: Math.ceil(Math.max(...data)) + 1,
        ticks: {
          stepSize: 1,
          callback: (value) => Math.round(value) + " " + unit,
          precision: 2,
        },
        grid: {
          borderDash: [20],
        },
      },
    },
  };

  return (
    <div>
        <div>
          {data.length > 0 && (
            <Line
              data={graphData}
              options={options}
              width={`${(3000 / window.innerHeight) * 100}vh`}
              height={`${(1000 / window.innerHeight) * 100}vh`}
            ></Line>
          )}
        </div>
    </div>
  );
}

export default LineGraph;