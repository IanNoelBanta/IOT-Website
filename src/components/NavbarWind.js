import React from "react";
import "../styles/NavbarWind.css";
import { Link } from "react-router-dom";

function NavbarWind() {
  return (
    <div className="frame-parent">
        <div className="frame-group">
          <div className="dashboard-parent">
            <img className="dashboard-icon" alt="" src="/dashboard.svg" />
            <Link to="/DashboardHome">
              <div className="labels">Home</div>
            </Link>
          </div>

          <div className="dashboard-parent">
            <img
              className="dashboard-icon"
              alt=""
              src="/thermostat-black-24dp-2.svg"
            />
            <Link to="/AmbientTemp">
              <div className="labels">Ambient Temperature</div>
            </Link>
          </div>

          <div className="dashboard-parent">
            <img className="dashboard-icon" alt="" src="/cash.svg" />
            <Link to="/SurfaceTemperature">
              <div className="labels">Surface Temperature</div>
            </Link>
          </div>

          <div className="dashboard-parent">
            <img className="dashboard-icon" alt="" src="/cash1.svg" />
            <Link to="/RelativeHumidity">
              <div className="labels">Relative Humidity</div>
            </Link>
          </div>

          <div className="dashboard-parent">
            <img className="dashboard-icon" alt="" src="/cash2.svg" />
            <Link to="/WindSpeedDirection">
              <div className="labels">Wind Speed/Direction</div>
            </Link>
          </div>

          <div className="dashboard-parent">
            <img className="dashboard-icon" alt="" src="/cash3.svg" />
            <Link to="/SolarIrradiance">
              <div className="labels">Solar Irradiance</div>
            </Link>
          </div>

          <div className="dashboard-parent">
            <img className="dashboard-icon" alt="" src="/cloudy-snowing-black-24dp-2.svg" />
            <Link to="/Rainfall">
              <div className="labels">Rainfall</div>
            </Link>
          </div>

          <div className="dashboard-parent">
            <img className="dashboard-icon" alt="" src="/location-city-black-24dp-2.svg" />
            <Link to="/PollutionParameters">
              <div className="labels">Pollution Parameters</div>
            </Link>
          </div>
          <div />
          <div />
          <div />
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
        
      </div>
  );
}

export default NavbarWind;


