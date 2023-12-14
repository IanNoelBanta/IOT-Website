import Navbar from "../components/Navbar";
import "../styles/WindSpeedDirection.css";
import { FetchData } from "../utils/FetchData.js";
import { cleanKeys } from "../utils/CleanData.js";
import LineGraph from "../components/Graph.js";

const WindSpeedDirection = () => {
  const sensorName = "Wind Speed Sensor";
  const sensor = FetchData(sensorName);
  const key = sensor.map((entry) => entry.key);
  const value = sensor.map((entry) => entry.value);
  const filteredKey = cleanKeys(key, "HHMM", "12hour");

  return (
    <>
      <div className="wind-speeddirection">
        <div className="wind-speed">WIND SPEED</div>
        <div className="wind-direction">WIND DIRECTION</div>
      </div>
      <div>{value}</div>
      <div className="graph">
        <LineGraph data={value} labels={filteredKey} />
      </div>
      <Navbar />
    </>
  );
};

export default WindSpeedDirection;
