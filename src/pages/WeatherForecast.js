// import { Icon } from "@iconify/react";
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function WeatherForecast(){
//     const [ForecastData, setForecastData] = useState ([]);

//     useEffect(() => {
//         const apiKey = "2969becdc5b13745e1ba84406273adff";
//         const city = "City of General Trias, PH"
//         const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}"

//         axios.get(apiUrl)
//       .then(response => {
//         const forecastData = response.data.list;

//         const formattedData = forecastData.slice(0, 8).map(item => ({
//           iconn: getWeatherIcon(item.weather[0].main),
//           Weather: item.weather[0].main,
//           Time: formatTime(item.dt_txt),
//         }));

//         setWeatherData(formattedData);
//       })
//       .catch(error => {
//         console.error("Error fetching weather data:", error);
//       });
//   }, []);

//   const getWeatherIcon = (weather) => {
//     switch (weather) {
//       case 'Clear':
//         return "material-symbols:sunny-outline";
//       case 'Clouds':
//         return "fluent-mdl2:cloudy";
//       case 'Partly Cloudy':
//         return "fontisto:day-cloudy";
//       case 'Windy':
//         return "mingcute:cloud-windy-line";
//       case 'Rainy':
//         return "carbon:rain";
//       case 'Stormy':
//         return "raphael:thunder";
//       default:
//         return "default-icon";
//     }
//   };

//   const formatTime = (timestamp) => {
//     const date = new Date(timestamp);
//     const hours = date.getHours();
//     const minutes = date.getMinutes();

//     return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
//   };






// }
// export WeatherForecast;