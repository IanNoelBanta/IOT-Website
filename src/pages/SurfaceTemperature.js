import Navbar from "../components/Navbar";
import "../styles/SurfaceTemperature.css";
import LineGraph from "../components/Graph.js";
import { FetchData, GetWeekly } from "../utils/FetchData.js";
import { GetLowHighAveData, cleanKeys } from "../utils/CleanData.js";
import { useEffect, useState } from "react";



const SurfaceTemperature = () => {
  const sensorName = "mema";
  const sensor = FetchData(sensorName);
  const key = sensor.map((entry) => entry.key);
  const value = sensor.map((entry) => entry.value);
  const filteredKey = cleanKeys(key, "HHMM", "12hour");

  const isHourly = "Hourly";
  const isWeekly = "Weekly";
  const sensorWeekly = GetWeekly(sensorName);
  const weeklyKey = sensorWeekly.map((entry) => entry.key);
  const weeklyValue = sensorWeekly.map((entry) => entry.value);

  const [averageValue, lowestValue, highestValue] = GetLowHighAveData(value);

  const [averageWeekly, lowestWeekly, highestWeekly] = GetLowHighAveData(weeklyValue);

  const [buttonText, setButtonText] = useState("Weekly");
  const [shown, setShown] = useState(isHourly);

  const HandleToggle = () => {
    setShown((prevData) => (prevData === isHourly ? isWeekly : isHourly));

    setButtonText((prevText) =>
      prevText === "Hourly"
        ? "Weekly"
        : "Hourly"
    );
  };

  return (
    <>
   <img className="background" alt="" src="/bg21.jpg" />
      <div className="surface-temperature">
        <div className="surface-temperature2">SURFACE TEMPERATURE</div>
      </div>
 <div className="shown">{shown} </div>
      <div className="graph">

      <button onClick={HandleToggle}>{buttonText}</button>
      <LineGraph data={shown === isHourly ? value : weeklyValue} labels={shown === isHourly ? filteredKey : weeklyKey} />

      </div>
      <Navbar />
    </>
  );
};

export default SurfaceTemperature;