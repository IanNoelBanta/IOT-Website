import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

export const FetchData = (path) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const database = getDatabase();
    const dataRef = ref(database, path);

    const handleDataChange = (snapshot) => {
      if (snapshot.exists()) {
        setData(
          Object.entries(snapshot.val()).map(([key, value]) => ({ key, value })) .reverse());
      } else {
        console.log("No data available");
        setData([]);
      }
    };

    const unsubscribe = onValue(dataRef, handleDataChange);

    return () => {
      unsubscribe();
    };
  }, [path]);

  return data;
};

export const GetWeekly = (path) => {
  const daily = FetchData(path);
  const [weekly, setWeekly] = useState([]);

  useEffect(() => {
    const groupDataByWeek = () => {
      const last7Days = daily.slice(-7);

      const groupedData = last7Days.reduce((result, entry) => {
        const key = entry.key.split("_")[0];
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