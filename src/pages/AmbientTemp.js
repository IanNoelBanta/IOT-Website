import Navbar from "../components/Navbar";
import "../styles/AmbientTemp.css";
import { FetchData } from "../utils/FetchData.js";
import { cleanKeys } from "../utils/CleanData.js";
import LineGraph from "../components/Graph.js";

const AmbientTemp = () => {
  const sensorName = "Ambient Temperature";
  const sensor = FetchData(sensorName);
  const key = sensor.map((entry) => entry.key);
  const value = sensor.map((entry) => entry.value);
  const filteredKey = cleanKeys(key, "HHMM", "12hour");

  return (
    <>
      <div className="ambient-temp">
        <div className="ambient-temperature1"> AMBIENT TEMPERATURE</div>
      </div>
      <div className="graph">
        <LineGraph data={value} labels={filteredKey} />
      </div>
      <Navbar />
    </>
  );
};

export default AmbientTemp;