import Navbar from "../components/Navbar";
import "../styles/PollutionParameters.css";
import Chart from 'chart.js/auto';
import { useEffect } from 'react';

const PollutionParameters = () => {
  useEffect(() => {
    const ctx = document.getElementById('myChart');

    const handleResize = () => {
      if (ctx) {
        myChart.resize();
      }
    };

    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      myChart.destroy();
    };
  }, []);
  
  return (
    <>
    <div className="solar-irradiance">
    <div className="pollution-parameters1">POLLUTION PARAMETERS</div>
    </div>
    <div class="chart-parent">
    <canvas id="myChart"></canvas>
    </div>
      <Navbar/>
    </>
  );
};

export default PollutionParameters;
