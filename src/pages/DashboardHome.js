import Navbar from "../components/Navbar";
import "../styles/DashboardHome.css";
// import firebaseConfig from "../utils/FirebaseConfig"

// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { initializeApp } from "firebase/app";

// const app = initializeApp(firebaseConfig);

const DashboardHome = () => {
  return (
    <>



      <video
        autoPlay
        loop
        playsInline
        className="back-video"
        alt=""
        src="/MovingClouds.mp4"
      ></video>

      <div className="frame-container">
        <div className="welcome-parent">
          <div className="home">Welcome!</div>
          <div className="choose-a-parameter">
            Choose a parameter from the sidebar to view detailed data or explore
            the map below
          </div>
        </div>
        <div className="dashboard">Dashboard</div>
      </div>
      <div className="the-map-showcases">The map showcases the specific location where AWS has been deployed.
      </div>

      

     

    
      <Navbar></Navbar>

      
      <div class="weather-condition">
      <div class="card2">
        <h3 class="card-heading">Today's Highlights</h3>
        <div class="content"><img
              className="weather-png"
              alt=""
              src="/weather.png"
            />
            </div>
      </div>
    </div>

    <div class="current-weather">
      <div class="card2">
        <h4 class="card-heading">Current Weather</h4>
        
        
      </div>

       <div class="temprature">
        <h1 id="temp">0</h1>
        <span class="temp-unit">°C</span>
      </div> 

      <div class="date-time">
        <p id="date-time">Monday, 12:00</p>
      </div>

       <div class="condition-rain">
        <div class="condition">
          <div class="condition" id="condition">condition</div>
        </div>
      </div> 




      
    </div>

    <div class="wind-speed-direction">
    <div class="card2">
        <h4 class="card-heading">Wind Direction</h4>
        <div class="content">
        <img
              className="compass-png"
              alt=""
              src="/compass.png"
            />
            <div class="content-temp">
           <p class="value-index">0</p> 
          </div>
        </div>
      </div>
    
    </div>


    <div class="temp1">
    <div class="card2">
        <h4 class="card-heading">Ambient Temperature</h4>
        

         <img
              className="thermometer-png"
              alt=""
              src="/thermometer.png"
            /> 
            <div class="content-temp">
           <p class="value-index">0</p> 
           </div>
        
      </div>
    
    </div>

    <div class="humid">
      <div class="card2">
        <h4 class="card-heading">Relative Humidity</h4>
        <div class="content">
          <p class="value-index">0</p>
        </div>
      </div>
    
    </div>

    <div class="surf-temp">
    <div class="card2">
        <h4 class="card-heading">Surface Temperature</h4>
        <div class="content">
          <p class="value-index">0</p>
        </div>
      </div>
    
    </div>

    <div class="rain">
    <div class="card2">
        <h4 class="card-heading">Rainfall</h4>
        <div class="content">
          <p class="value-index">0</p>
        </div>
      </div>
    
    </div>

    <div class="solar">
    <div class="card2">
        <h4 class="card-heading">Solar Irradiance</h4>
        <div class="content">
          <p class="value-index">0</p>
        </div>
      </div>
    
    </div>

    <div class="wind-speed-direction1">
    <div class="card2">
        <h4 class="card-heading">Wind Speed</h4>
        <div class="content">
          <p class="value-index">0</p>
        </div>
      </div>
    
    </div>

    <div class="pol-par">
    <div class="card2">
        <h4 class="card-heading">Pollution Parameters</h4>
        <div class="content">
          <p class="value-index">0</p>
        </div>
      </div>

      
    
    </div>
    </>
  );
};

// document.addEventListener("DOMContentLoaded", function () {
//   const temp = document.getElementById("temp");
//   const date = document.getElementById("date-time");
//   let currentCity = "";
//   let currentUnit = "";
//   let hourlyorWeek = "Week";

//   function getDateTime() {
//     let now = new Date(),
//       hour = now.getHours(),
//       minute = now.getMinutes();

//     let days = [
//       "Sunday",
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//     ];

//     hour = hour % 12;
//     if (hour < 10) {
//       hour = "0" + hour;
//     }

//     if (minute < 10) {
//       minute = "0" + minute;
//     }

//     let dayString = days[now.getDay()];
//     return `${dayString}, ${hour}:${minute}`;
//   }

//   date.innerText = getDateTime();

//   setInterval(() => {
//     date.innerText = getDateTime();
//   }, 1000);
// });
    
export default DashboardHome;

