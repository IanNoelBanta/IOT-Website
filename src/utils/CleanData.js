import { useEffect, useState } from "react";
import { FetchData, fetchData } from "../utils/FetchData";

export const cleanKeys = (key, displayDate = false, timeFormat = "24hour") => {
  return key.map((entry) => {
    const date = entry.slice(0, 8);
    const month = date.slice(4, 6);
    const day = date.slice(6, 8);
    const formattedDate = `${month}/${day}`;

    const time = entry.slice(9);
    let hours = parseInt(time.slice(0, 2), 10);
    const minutes = time.slice(2 , 4);

    if (timeFormat === "12hour") {
      const period = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      const formattedTime = `${hours}:${minutes} ${period}`;
      return displayDate
        ? `${formattedDate} - ${formattedTime}`
        : formattedTime;
    } else {
      const formattedTime = `${hours}:${minutes}`;
      return displayDate
        ? `${formattedDate} - ${formattedTime}`
        : formattedTime;
    }
  });
};

export const getAverage = (values) => {
  var sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += Number(values[i]);
  }
  return sum / values.length;
};

export const GetWeek = (path) => {
  const allData = FetchData(path);
  const [week, setWeek] = useState([]);

  useEffect(() => {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());

    const weekDataArray = allData.filter((item) => {
      const itemDate = new Date(item.key.substring(0, 10));
      return itemDate >= startOfWeek && itemDate <= today;
    });

    setWeek(weekDataArray);
  }, [allData]);

  return week;
};

export const GetMostRecent = (path) => {
  const allData = FetchData(path);
  const mostRecent = allData.slice(-1);
  return mostRecent;
};

// export const getCardinalDirection = (angle) => {
//   const adjustedAngle = (angle + 360) % 360;

//   if (adjustedAngle >= 337.5 || adjustedAngle < 22.5) {
//     return "East";
//   } else if (adjustedAngle >= 22.5 && adjustedAngle < 67.5) {
//     return "North of East";
//   } else if (adjustedAngle >= 67.5 && adjustedAngle < 112.5) {
//     return "North";
//   } else if (adjustedAngle >= 112.5 && adjustedAngle < 157.5) {
//     return "North of West";
//   } else if (adjustedAngle >= 157.5 && adjustedAngle < 202.5) {
//     return "West";
//   } else if (adjustedAngle >= 202.5 && adjustedAngle < 247.5) {
//     return "South of West";
//   } else if (adjustedAngle >= 247.5 && adjustedAngle < 292.5) {
//     return "South";
//   } else if (adjustedAngle >= 292.5 && adjustedAngle < 337.5) {
//     return "South of East";
//   } else {
//     return "Unknown Direction";
//   }
// };