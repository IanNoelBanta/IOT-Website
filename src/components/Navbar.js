import "../styles/Navbar.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

function Navbar() {
  const navigate = useNavigate();

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

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
        navigate("/Login", { replace: true });
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const logoutUser = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      setAuthenticated(false);
      navigate("/Login", { replace: true });
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

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

      {authenticated && <button className="logout-wrapper" onClick={logoutUser}>
          <img className="dashboard-icon" alt="Logout" src="/logout.svg" />
      </button>}

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
