import "./DashboardHome.css";

const DashboardHome = () => {
  return (
    <div className="dashboard-home">
      <div className="frame-parent">
        <div className="frame-group">
          <div className="dashboard-parent">
            <img className="dashboard-icon" alt="" src="/dashboard.svg" />
            <div className="home">Home</div>
          </div>
          <div className="cash-parent">
            <div className="dashboard-icon" />
            <div className="ambient-temperature">Ambient Temperature</div>
          </div>
          <div className="cash-parent">
            <img className="cash-icon" alt="" src="/cash.svg" />
            <div className="ambient-temperature">Surface Temperature</div>
          </div>
          <div className="cash-parent">
            <img className="dashboard-icon" alt="" src="/cash1.svg" />
            <div className="ambient-temperature">Relative Humidity</div>
          </div>
          <div className="cash-parent">
            <img className="dashboard-icon" alt="" src="/cash2.svg" />
            <div className="ambient-temperature">Wind Speed/Direction</div>
          </div>
          <div className="cash-parent">
            <img className="dashboard-icon" alt="" src="/cash3.svg" />
            <div className="ambient-temperature">Solar Irradiance</div>
          </div>
          <div className="cash-parent">
            <div className="dashboard-icon" />
            <div className="rainfall">Rainfall</div>
          </div>
          <div className="cash-parent3">
            <div className="dashboard-icon" />
            <div className="pollution-parameters">Pollution Parameters</div>
          </div>
          <div />
          <div />
          <div />
          <div className="cash-wrapper">
            <div className="dashboard-icon" />
          </div>
        </div>
        <div className="logout-wrapper">
          <img className="dashboard-icon" alt="" src="/logout.svg" />
        </div>
        <div className="rectangle-wrapper">
          <div className="frame-child" />
        </div>
        <img
          className="cloudy-climes-high-resolution-icon"
          alt=""
          src="/cloudyclimeshighresolutionlogoblacktransparent-1@2x.png"
        />
        <div className="cash-frame">
          <div className="dashboard-icon" />
        </div>
      </div>
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
      <div className="the-map-showcases">
        The map showcases the specific location where AWS has been deployed.
      </div>
      <div className="basemap-image" />
      <img
        className="thermostat-black-24dp-1-icon"
        alt=""
        src="/thermostat-black-24dp-1.svg"
      />
      <img
        className="cloudy-snowing-black-24dp-1-icon"
        alt=""
        src="/cloudy-snowing-black-24dp-1.svg"
      />
      <img
        className="location-city-black-24dp-1-icon"
        alt=""
        src="/location-city-black-24dp-1.svg"
      />
    </div>
  );
};

export default DashboardHome;
