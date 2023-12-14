import Navbar from "../components/Navbar";
import "../styles/RelativeHumidity.css";
import Chart from "chart.js/auto";
import { useEffect } from "react";
import { FetchData } from "../utils/FetchData.js";
import { cleanKeys } from "../utils/CleanData.js";
import LineGraph from "../components/Graph.js";

const RelativeHumidity = () => {
  const sensorName = "Relative Humidity";
  const sensor = FetchData(sensorName);
  const key = sensor.map((entry) => entry.key);
  const value = sensor.map((entry) => entry.value);
  const filteredKey = cleanKeys(key, "HHMM", "12hour");

  return (
    <>
      <div className="relative-humidity">
        <div className="relative-humidity2">RELATIVE HUMIDITY</div>
      </div>
      <div className="graph">
        <LineGraph data={value} labels={filteredKey} />
      </div>
      <Navbar />
    </>
  );
};

export default RelativeHumidity;
