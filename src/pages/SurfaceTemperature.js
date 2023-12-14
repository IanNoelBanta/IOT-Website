import Navbar from "../components/Navbar";
import "../styles/SurfaceTemperature.css";
import Chart from "chart.js/auto";
import { useEffect } from "react";
import { FetchData } from "../utils/FetchData.js";
import { cleanKeys } from "../utils/CleanData.js";
import LineGraph from "../components/Graph.js";


const SurfaceTemperature = () => {
  const sensorName = "Surface Temperature";
  const sensor = FetchData(sensorName);
  const key = sensor.map((entry) => entry.key);
  const value = sensor.map((entry) => entry.value);
  const filteredKey = cleanKeys(key, "HHMM", "12hour");

  return (
    <>
      <div className="surface-temperature">
        <div className="surface-temperature2">SURFACE TEMPERATURE</div>
      </div>
      <div className="graph">
        <LineGraph data={value} labels={filteredKey} />
      </div>
      <Navbar />
    </>
  );
};

export default SurfaceTemperature;
