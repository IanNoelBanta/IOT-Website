import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isHoveredHome, setIsHoveredHome] = useState(false);
  const [isHoveredAmbient, setIsHoveredAmbient] = useState(false);
  const [isHoveredRainfall, setIsHoveredRainfall] = useState(false);
  const [isHoveredPollution, setIsHoveredPollution] = useState(false);

  const handleMouseEnterHome = () => {
    setIsHoveredHome(true);
  };

  const handleMouseLeaveHome = () => {
    setIsHoveredHome(false);
  };

  const handleMouseEnterAmbient = () => {
    setIsHoveredAmbient(true);
  };

  const handleMouseLeaveAmbient = () => {
    setIsHoveredAmbient(false);
  };

  const handleMouseEnterRainfall = () => {
    setIsHoveredRainfall(true);
  };

  const handleMouseLeaveRainfall = () => {
    setIsHoveredRainfall(false);
  };

  const handleMouseEnterPollution = () => {
    setIsHoveredPollution(true);
  };

  const handleMouseLeavePollution = () => {
    setIsHoveredPollution(false);
  };

  const textStyles = {
    position: "relative",
    fontWeight: 600,
    transition: "transform 0.3s ease",
  };

  if (isHoveredHome) {
    textStyles.transform = "scale(1.1)";
    textStyles.opacity = 1;
  } else {
    textStyles.transform = "scale(1)";
    textStyles.opacity = 0.35;
  }

  return (
    <div className="solar-irradiance">
      <div className="frame-parent">
        <div className="frame-group">
          <div
            className="dashboard-parent"
            onMouseEnter={handleMouseEnterHome}
            onMouseLeave={handleMouseLeaveHome}
          >
            <img className="dashboard-icon" alt="" src="/dashboard.svg" />
            <Link to="/DashboardHome">
              <div className="home" style={textStyles}>
                Home
              </div>
            </Link>
          </div>

          <div
            className="cash-parent"
            onMouseEnter={handleMouseEnterAmbient}
            onMouseLeave={handleMouseLeaveAmbient}
          >
            <div className="dashboard-icon" />
            <Link to="/AmbientTemp">
              <div className="ambient-temperature" style={textStyles}>
                Ambient Temperature
              </div>
            </Link>
          </div>

          <div
            className="cash-parent"
            onMouseEnter={handleMouseEnterRainfall}
            onMouseLeave={handleMouseLeaveRainfall}
          >
            <img className="cash-icon" alt="" src="/cash.svg" />
            <Link to="/SurfaceTemperature">
              <div className="rainfall" style={textStyles}>
                Surface Temperature
              </div>
            </Link>
          </div>

          <div
            className="cash-parent"
            onMouseEnter={handleMouseEnterPollution}
            onMouseLeave={handleMouseLeavePollution}
          >
            <img className="dashboard-icon" alt="" src="/cash1.svg" />
            <Link to="/RelativeHumidity">
              <div className="pollution-parameters" style={textStyles}>
                Relative Humidity
              </div>
            </Link>
          </div>
          
          {/* You can continue adding similar elements here */}
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
    </div>
  );
}

export default Navbar;
