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
            "rgba(163, 136, 201, 0.8)", // Light violet
            "rgba(146, 110, 190, 0.8)",
            "rgba(128, 84, 179, 0.8)",
            "rgba(111, 59, 168, 0.8)",
            "rgba(93, 34, 157, 0.8)",
            "rgba(122, 58, 125, 0.8)",
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
        
        borderColor: "white",
        borderWidth: 2.5,
        pointBorderColor: "#CBC3E3",
        pointBorderWidth: 6,
        tension: 0.5,
        fill: true,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 3,
        pointHoverBackgroundColor: "#431857",
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