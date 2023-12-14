import Navbar from "../components/Navbar";
import "../styles/SolarIrradiance.css";
import { FetchData } from "../utils/FetchData.js";
import { cleanKeys } from "../utils/CleanData.js";
import LineGraph from "../components/Graph.js";

const SolarIrradiance = () => {
  const sensorName = "Irradiance Sensor";
  const sensor = FetchData(sensorName);
  const key = sensor.map((entry) => entry.key);
  const value = sensor.map((entry) => entry.value);
  const filteredKey = cleanKeys(key, "HHMM", "12hour");

  return (
    <>
      <div className="solar-irradiance">
        <div className="solar-irradiance2">SOLAR IRRADIANCE</div>
      </div>
      <div className="graph">
        <LineGraph data={value} labels={filteredKey} />
      </div>
      <Navbar></Navbar>
    </>
  );
};

export default SolarIrradiance;
