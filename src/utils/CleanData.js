import { useEffect, useState } from "react";
import { FetchData, fetchData } from "../utils/FetchData";

export const cleanKeys = (key, displayDate = false, timeFormat = "24hour") => {
  return key.map((entry) => {
    const date = entry.slice(0, 10);
    const month = date.slice(0, 2);
    const day = date.slice(3, 5);
    const formattedDate = `${month}/${day}`;

    const time = entry.slice(11);
    let hours = parseInt(time.slice(0, 2), 10);
    const minutes = time.slice(2, 4);

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

export const GetLowHighAveData = (values) => {
  const lowestValue = Math.min(...values);
  const highestValue = Math.max(...values);
  const averageValue =
    values.reduce((acc, val) => acc + val, 0) / values.length;
  const roundedAverage = Number(averageValue.toFixed(2));

  return [roundedAverage, lowestValue, highestValue];
};

export const GetWeekly = (path) => {
  const daily = FetchData(path);
  const [weekly, setWeekly] = useState([]);

  useEffect(() => {
    const groupDataByWeek = () => {
      // Ensure all relevant data is fetched for the entire week
      const last7Days = daily.slice(-7);

      const groupedData = last7Days.reduce((result, entry) => {
        const key = entry.key.split("-")[0];
        const weekStart = getWeekStart(key);

        if (!result[weekStart]) {
          result[weekStart] = [];
        }

        result[weekStart].push(entry.value);

        return result;
      }, {});

      const formattedWeekly = Object.entries(groupedData).map(
        ([weekStart, values]) => ({
          key: weekStart,
          value: getAverage(values),
        })
      );

      setWeekly(formattedWeekly);
    };

    groupDataByWeek();
  }, [daily]);

  const getAverage = (values) => {
    const sum = values.reduce((acc, value) => acc + value, 0) / values.length;
    return sum;
  };

  const getWeekStart = (Key) => {
    const day = parseInt(Key.slice(6, 8), 10);
    const month = parseInt(Key.slice(4, 6), 10) - 1; // Months are zero-indexed
    const year = parseInt(Key.slice(0, 4), 10);
    const date = new Date(year, month, day);

    const monthsAbbreviated = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const monthAbbrev = monthsAbbreviated[date.getMonth()];
    const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
    const dayOfMonth = date.getDate();

    return `${monthAbbrev} ${dayOfMonth} - ${dayOfWeek}`;
  };

  return weekly;
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
  const [mostRecent, setMostRecent] = useState(null);

  useEffect(() => {
    if (allData.length > 0) {
      let mostRecent = null;
      allData.forEach((item) => {
        if (!mostRecent || item.key > mostRecent.key) {
          mostRecent = item;
        }
      });

      setMostRecent(mostRecent ? mostRecent.value : null);
    } else {
      setMostRecent(null);
    }
  }, [allData]);

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
