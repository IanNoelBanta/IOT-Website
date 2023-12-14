import Navbar from "../components/Navbar";
import "../styles/PollutionParameters.css";
import LineGraph from "../components/Graph.js";
import { FetchData, GetWeekly } from "../utils/FetchData.js";
import { GetLowHighAveData, cleanKeys } from "../utils/CleanData.js";
import { useEffect, useState } from "react";

const PollutionParameters = () => {
  const sensorName = "mema";
  const sensor = FetchData(sensorName);
  const key = sensor.map((entry) => entry.key);
  const value = sensor.map((entry) => entry.value);
  const filteredKey = cleanKeys(key, "HHMM", "12hour");

  const isHourly = "Hourly";
  const isWeekly = "Weekly";
  const sensorWeekly = GetWeekly(sensorName);
  const weeklyKey = sensorWeekly.map((entry) => entry.key).reverse();
  const weeklyValue = sensorWeekly.map((entry) => entry.value);

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
      <div className="pollution-parameters">
        <div className="pollution-parameters1">POLLUTION PARAMETERS</div>
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

export default PollutionParameters;