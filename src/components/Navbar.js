import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="frame-parent">
        <div className="frame-group">
          <div className="dashboard-parent">
            <img className="dashboard-icon" alt="" src="/dashboard.svg" />
            <Link to="/DashboardHome" style={{ textDecoration: 'none' }}>
              <div className="labels">Home</div>
            </Link>
          </div>

          <div className="dashboard-parent">
            <img
              className="dashboard-iconn"
              alt=""
              src="/thermostat-black-24dp-2.svg"
            />
            <Link to="/AmbientTemp" style={{ textDecoration: 'none' }}>
              <div className="labels">Ambient Temperature</div>
            </Link>
          </div>

          <div className="dashboard-parent">
            <img className="dashboard-icon" alt="" src="/cash.svg" />
            <Link to="/SurfaceTemperature" style={{ textDecoration: 'none' }}>
              <div className="labels">Surface Temperature</div>
            </Link>
          </div>

          <div className="dashboard-parent">
            <img className="dashboard-icon" alt="" src="/cash1.svg" />
            <Link to="/RelativeHumidity" style={{ textDecoration: 'none' }}>
              <div className="labels">Relative Humidity</div>
            </Link>
          </div>

          <div className="dashboard-parent">
            <img className="dashboard-icon" alt="" src="/cash2.svg" />
            <Link to="/WindSpeedDirection" style={{ textDecoration: 'none' }}>
              <div className="labels">Wind Speed/Direction</div>
            </Link>
          </div>

          <div className="dashboard-parent">
            <img className="dashboard-icon" alt="" src="/cash3.svg" />
            <Link to="/SolarIrradiance" style={{ textDecoration: 'none' }}>
              <div className="labels">Solar Irradiance</div>
            </Link>
          </div>

          <div className="dashboard-parent">
            <img className="dashboard-icon" alt="" src="/cloudy-snowing-black-24dp-2.svg" />
            <Link to="/Rainfall" style={{ textDecoration: 'none' }}>
              <div className="labels">Rainfall</div>
            </Link>
          </div>

          <div className="dashboard-parent">
            <img className="dashboard-icon" alt="" src="/location-city-black-24dp-2.svg" />
            <Link to="/PollutionParameters" style={{ textDecoration: 'none' }}>
              <div className="labels">Pollution Parameters</div>
            </Link>
          </div>
          <div />
          <div />
          <div />
        </div>

        <div className="logout-wrapper">
          <Link to="/Login">
            <img className="dashboard-icon" alt="" src="/logout.svg" />
          </Link>
        </div>

        <div className="rectangle-wrapper">
          <div className="frame-child" />
        </div>
        <img className="cloudy"
          alt=""
          src="/cloudyclimeshighresolutionlogoblacktransparent-1@2x.png"
        />
        
      </div>
    </>
  );
}

export default Navbar;
