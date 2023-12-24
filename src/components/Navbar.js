import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const NavBtns = [
    {
      label: "Home",
      icon: "/dashboard.svg",
      link: "/DashboardHome",
    },
    {
      label: "Ambient Temperature",
      // icon: "/thermostat-black-24dp-2.svg", img size problem
      link: "/AmbientTemp",
    },
    {
      label: "Surface Temperature",
      icon: "/cash.svg",
      link: "/SurfaceTemperature",
    },
    {
      label: "Relative Humidity",
      icon: "/cash1.svg",
      link: "/RelativeHumidity",
    },
    {
      label: "Wind Speed/Direction",
      icon: "/cash2.svg",
      link: "/WindSpeedDirection",
    },
    {
      label: "Solar Irradiance",
      icon: "/cash3.svg",
      link: "/SolarIrradiance",
    },
    {
      label: "Rainfall",
      icon: "/cloudy-snowing-black-24dp-2.svg",
      link: "/Rainfall",
    },
    {
      label: "Pollution Parameters",
      icon: "/location-city-black-24dp-2.svg",
      link: "/PollutionParameters",
    },
    
  ];

  return (
    <div className="frame-parent">
      <div className="frame-group">
        {NavBtns.map((btn, index) => (
          <div className="dashboard-parent" key={index}>
            <img className="dashboard-icon" alt={btn.label} src={btn.icon} />
            <Link to={btn.link} style={{ textDecoration: "none" }}>
              <a href= {btn.web}>
              <div className="labels">{btn.label}</div>
              </a>
            </Link>
          </div>
        ))}
      </div>
      <div/>

      <div className="logout-wrapper">
        <Link to="/Login">
          <img className="dashboard-icon" alt="Logout" src="/logout.svg" />
        </Link>
      </div>

      <div className="rectangle-wrapper">
        <div className="frame-child" />
      </div>

      <img
        className="cloudy"
        alt=""
        src="/cloudyclimeshighresolutionlogoblacktransparent-1@2x.png"
      />
    </div>
  );
}

export default Navbar;
