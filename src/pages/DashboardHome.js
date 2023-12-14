import Navbar from "../components/Navbar";
import "../styles/DashboardHome.css";

const DashboardHome = () => {
  return (
    <>
     <img className="dhbg" alt="" src="/bg4.jpg" />
      <div className="frame-container">
        <div className="welcome-parent">
          <div className="home">Welcome!</div>
          <div className="choose-a-parameter">

          </div>
        </div>
        <div className="dashboard">Dashboard</div>
      </div>
      <div className="the-map-showcases">
      </div>

      
      <div class="weather-condition">
      <div class="card2">
        <h3 class="card-heading">Today's Highlights</h3>
        <div class="content"><img
              className="daily-png"
              alt=""
              src="/daily.png"
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
              className="compsie-png"
              alt=""
              src="/compsie.png"
            />
            <div class="content-temp">
           <p class="value-index">0</p> 
          </div>
        </div>
      </div>
    
    </div>
    <Navbar/>

    <div class="temp1">
    <div class="card2">
        <h4 class="card-heading">Ambient Temperature</h4>
        

         <img
              className="therms-png"
              alt=""
              src="/therms.png"
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

export default DashboardHome;

