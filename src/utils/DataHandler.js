import { useEffect, useState } from 'react';
import { useAllDataFromFirebase } from "./Firebase";

/*
  Formats the label using "key" type in firebase from "YYYYMMDD_HHMMSS" to 
  a desire format such as DDMMYYYY or HHMM and has the ability to convert
  to 12 hour clock or remain 24 hour
*/
export const formatDataKeys = (dataKeys, displayDate = false, timeFormat = '24hour') => {
  return dataKeys.map(entry => {
    const datePart = entry.slice(0, 8);
    const year = datePart.slice(0, 4);
    const month = datePart.slice(4, 6);
    const day = datePart.slice(6, 8);
    const formattedDate = `${month}/${day}`;

    const timePart = entry.slice(9);
    let hours = parseInt(timePart.slice(0, 2), 10);
    const minutes = timePart.slice(2, 4);

    if (timeFormat === '12hour') {
      const period = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      const formattedTime = `${hours}:${minutes} ${period}`;
      return displayDate ? `${formattedDate} - ${formattedTime}` : formattedTime;
    } else {
      const formattedTime = `${hours}:${minutes}`;
      return displayDate ? `${formattedDate} - ${formattedTime}` : formattedTime;
    }
  });
};

// Using the data type in firebase, computes the lowest, highest and average data of the entire given array.
export const GetLowHighAveData = (values) => {
  const lowestValue = Math.min(...values);
  const highestValue = Math.max(...values);
  const averageValue = values.reduce((acc, val) => acc + val, 0) / values.length;
  const roundedAverage = Number(averageValue.toFixed(2));

  return [roundedAverage, lowestValue, highestValue];
};

/* DECAPRECATED 
//  Gets the current data using today's date.
export const useTodayDataFromFirebase = (path) => {
  const allData = useAllDataFromFirebase(path);
  const [todayData, setTodayData] = useState([]);

  useEffect(() => {
    const today = new Date();
    const todayFormatted = `${today.getFullYear()}${(today.getMonth() + 1).toString().padStart(2, '0')}${today.getDate().toString().padStart(2, '0')}`;

    const todayDataArray = allData.filter((item) => item.key.startsWith(todayFormatted));
    setTodayData(todayDataArray);
  }, [allData]);

  return todayData;
};
*/

//  Using the function "useAllDataFromFirebase" in FirebaseHander.js, collects the entire week data.
export const useWeeklyDataFromFirebase = (path) => {
  const dailyData = useAllDataFromFirebase(path);
  const [weeklyData, setWeeklyData] = useState([]);

  useEffect(() => {
    const groupDataByWeek = () => {
      // Ensure all relevant data is fetched for the entire week
      const last7DaysData = dailyData.slice(-7);

      const groupedData = last7DaysData.reduce((result, entry) => {
        const dateKey = entry.key.split('_')[0];
        const weekStart = getWeekStart(dateKey); // Function to get the start of the week (Sunday)

        if (!result[weekStart]) {
          result[weekStart] = [];
        }

        result[weekStart].push(entry.value);

        return result;
      }, {});

      const formattedWeeklyData = Object.entries(groupedData).map(([weekStart, values]) => ({
        key: weekStart,
        value: calculateAverage(values), // Calculate the average value for the week
      }));

      setWeeklyData(formattedWeeklyData);
    };

    groupDataByWeek();
  }, [dailyData]);

  const calculateAverage = (values) => {
    const sum = values.reduce((acc, value) => acc + value, 0);
    return sum / values.length;
  }
};
