import Navbar from "../components/Navbar";
import "../styles/Rainfall.css";
import { FetchData, GetWeekly } from "../utils/FetchData.js";
import { GetLowHighAveData, cleanKeys } from "../utils/CleanData.js";
import LineGraph from "../components/Graph.js";
import { useEffect, useState } from "react";

const Rainfall = () => {
  const sensorName = "Rainfall";
  const sensor = FetchData(sensorName);
  const key = sensor.map((entry) => entry.key);
  const value = sensor.map((entry) => entry.value);
  const filteredKey = cleanKeys(key, "HHMM", "12hour");

  const dummyhr = [1, 2, 3, 4, 5];
  const dummyhrlbl = ["a", "b", "c", "d", "e"];

  const dummywk = [5, 4, 3, 2, 1];
  const dummywklbl = ["e", "d", "c", "b", "a"];

  const isHourly = "Hourly";
  const isWeekly = "Weekly";



  const sensorWeekly = GetWeekly(sensorName);
  const weeklyKey = sensorWeekly.map((entry) => entry.key);
  const weeklyValue = sensorWeekly.map((entry) => entry.value);

  const [averageValue, lowestValue, highestValue] = GetLowHighAveData(value);

  const [averageWeekly, lowestWeekly, highestWeekly] = GetLowHighAveData(weeklyValue);

  const [chartData, setChartData] = useState(dummyhr);
  const [buttonText, setButtonText] = useState("Weekly");
  const [chartLabel, setChartLabel] = useState(dummywklbl);
  const [shown, setShown] = useState(isHourly);

  const handleToggle = () => {
    setChartData((prevData) => (prevData === dummyhr ? dummywk : dummyhr));
    setChartLabel((prevData) => (prevData === dummywklbl ? dummyhrlbl : dummywklbl));
    setShown((prevData) => (prevData === isHourly ? isWeekly : isHourly));


    setButtonText((prevText) =>
      prevText === "Hourly"
        ? "Weekly"
        : "Hourly"
    );
  };

  return (
    <>
      <div className="solar-irradiance">
        <div className="rainfall2">RAINFALL</div>
    <>{averageValue}, {highestValue}, {lowestValue}</>
    <>{shown}</>
      </div>
      <div className="graph">
        <button onClick={handleToggle}>{buttonText}</button>
        <LineGraph data={chartData} labels={chartLabel} />
      </div>
      <Navbar />
    </>
  );
};

export default Rainfall;
