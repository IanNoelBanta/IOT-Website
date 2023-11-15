import React from "react";
// import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="solar-irradiance">
      <div className="frame-parent">
        <div className="frame-group">
          
          <div className="dashboard-parent">
            <img className="dashboard-icon" alt="" src="/dashboard.svg" />
            <Link to="/DashboardHome">
              <div className="home">Home</div>
            </Link>
          </div>
          
          <div className="cash-parent">
            <div className="dashboard-icon" />
            <Link to="/AmbientTemp">
              <div className="ambient-temperature">Ambient Temperature</div>
            </Link>
          </div>
          
          <div className="cash-parent">
            <img className="cash-icon" alt="" src="/cash.svg" />
            <Link to="/SurfaceTemperature">
            <div className="ambient-temperature">Surface Temperature</div>
            </Link>
          </div>
          
          <div className="cash-parent">
            <img className="dashboard-icon" alt="" src="/cash1.svg" />
            <Link to="/RelativeHumidity">
            <div className="ambient-temperature">Relative Humidity</div>
            </Link>
          </div>
          
          <div className="cash-parent">
            <img className="dashboard-icon" alt="" src="/cash2.svg" />
            <Link to="/WindSpeedDirection">
            <div className="ambient-temperature">Wind Speed/Direction</div>
            </Link>
          </div>
          
          <div className="dashboard-parent">
            <img className="dashboard-icon" alt="" src="/cash3.svg" />
            <Link to="/SolarIrradiance">
            <div className="ambient-temperature">Solar Irradiance</div>
            </Link>
          </div>
          
          <div className="cash-parent">
            <div className="dashboard-icon" />
            <Link to="/Rainfall">
            <div className="rainfall">Rainfall</div>
            </Link>
          </div>

          <div className="cash-parent3">
            <div className="dashboard-icon" />
            <Link to="/PollutionParameters">
            <div className="pollution-parameters">Pollution Parameters</div>
            </Link>
          </div>

          <div className="cash-wrapper">
            <div className="dashboard-icon" alt="" src="/cash4.svg" />
          </div>

          <div />
          <div />
          <div className="cash-frame">
            <div className="dashboard-icon" />
          </div>

        </div>
        <div className="logout-wrapper">
        <Link to="/LandingPage">
          <img className="dashboard-icon" alt="" src="/logout.svg" />
        </Link>
        </div>
        

        <div className="rectangle-wrapper">
          <div className="frame-child" />
        </div>
        <img
          className="cloudy-climes-high-resolution-icon"
          alt=""
          src="/cloudyclimeshighresolutionlogoblacktransparent-1@2x.png"
        />
        <div className="cash-wrapper1">
          <div className="dashboard-icon" />
        </div>
      </div>
      <img
        className="thermostat-black-24dp-2-icon"
        alt=""
        src="/thermostat-black-24dp-2.svg"
      />
      <img
        className="cloudy-snowing-black-24dp-2-icon"
        alt=""
        src="/cloudy-snowing-black-24dp-2.svg"
      />
      <img
        className="location-city-black-24dp-2-icon"
        alt=""
        src="/location-city-black-24dp-2.svg"
      />
      {/* <div className="solar-irradiance2">SOLAR IRRADIANCE</div> */}
    </div>
  );
}

export default Navbar;
