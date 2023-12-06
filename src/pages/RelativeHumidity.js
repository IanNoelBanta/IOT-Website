import Navbar from "../components/Navbar";
import "../styles/RelativeHumidity.css";
import Chart from 'chart.js/auto';
import { useEffect } from 'react';

const RelativeHumidity = () => {
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
    <div className="relative-humidity">
    <div className="relative-humidity2">RELATIVE HUMIDITY</div>
    </div>
    <div class="chart-parent">
    <canvas id="myChart"></canvas>
    </div>
      <Navbar/>
      
    </>
  );
};

export default RelativeHumidity;
