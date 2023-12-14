import Navbar from "../components/Navbar";
import "../styles/PollutionParameters.css";
import { FetchData } from "../utils/FetchData.js";
import { cleanKeys } from "../utils/CleanData.js";
import LineGraph from "../components/Graph.js";

const PollutionParameters = () => {
  const sensorName = "MQ-7 Sensor";
  const sensor = FetchData(sensorName);
  const key = sensor.map((entry) => entry.key);
  const value = sensor.map((entry) => entry.value);
  const filteredKey = cleanKeys(key, "HHMM", "12hour");
  return (
    <>
      <div className="solar-irradiance">
        <div className="pollution-parameters1">POLLUTION PARAMETERS</div>
      </div>
      <div className="graph">
        <LineGraph data={value} labels={filteredKey} />
      </div>
      <Navbar />
    </>
  );
};

export default PollutionParameters;