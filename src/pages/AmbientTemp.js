import Navbar from "../components/Navbar";
import "../styles/AmbientTemp.css";
import Chart from 'chart.js/auto';

const AmbientTemp = () => {
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>;

  const ctx = document.getElementById("myChart");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  return (
    <>
      <div className="ambient-temp">
        <div className="ambient-temperature1"> AMBIENT TEMPERATURE</div>
      </div>
      <canvas id="myChart"></canvas>
      <Navbar />
    </>
  );
};

export default AmbientTemp;
