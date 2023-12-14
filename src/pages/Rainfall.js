import Navbar from "../components/Navbar";
import "../styles/Rainfall.css";
import Chart from "chart.js/auto";
import { useEffect } from "react";
import { FetchData } from "../utils/FetchData.js";
import { cleanKeys } from "../utils/CleanData.js";
import LineGraph from "../components/Graph.js";

const Rainfall = () => {
  const sensorName = "Rainfall";
  const sensor = FetchData(sensorName);
  const key = sensor.map((entry) => entry.key);
  const value = sensor.map((entry) => entry.value);
  const filteredKey = cleanKeys(key, "HHMM", "12hour");

  return (
    <>
      <div className="solar-irradiance">
        <div className="rainfall2">RAINFALL</div>
      </div>
      <div className="graph">
        <LineGraph data={value} labels={filteredKey} />
      </div>
      <Navbar />
    </>
  );
};

export default Rainfall;
