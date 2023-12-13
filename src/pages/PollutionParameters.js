// AmbientTemp.js
import React, { useState, useEffect } from 'react';
import LineChart from '../components/LineChart';
import { UserData } from '../components/Data';
import Navbar from '../components/Navbar';
import '../styles/PollutionParameters.css'; // Import AmbientTemp.css

function PollutionParameters() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    // Process your data if needed
    setUserData({
      labels: UserData.map((item) => item.year),
      datasets: [
        {
          label: 'Users Gained',
          data: UserData.map((item) => item.userGain),
          backgroundColor: [
            'rgba(75,192,192,1)',
            '#ecf0f1',
            '#50AF95',
            '#f3ba2f',
            '#2a71d0',
          ],
          borderColor: 'black',
          borderWidth: 2,
        },
      ],
    });
  }, []);

  return (
    <>
      <div className="PollutionParameters">
        <div className="chart-container">
          {userData ? (
            <LineChart chartData={userData} />
          ) : (
            <p>Loading data...</p>
          )}
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default PollutionParameters;
