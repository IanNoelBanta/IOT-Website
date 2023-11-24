import Navbar from "../components/Navbar";
import "../styles/DashboardHome.css";

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
      <div className="the-map-showcases">
        The map showcases the specific location where AWS has been deployed.
      </div>

      

     

    
      <Navbar></Navbar>
      <div class="weather-condition">
    <h3>Current Weather</h3>
    </div>

    <div class="wind-speed-direction">
    <h3>Wind Direction</h3>
    </div>

    <div class="temp">
    <h3>Temperature</h3>
    </div>

    <div class="humid">
    <h3>Humidity</h3>
    </div>

    <div class="surf-temp">
    <h3>Temperature</h3>
    </div>

    <div class="rain">
    <h3>Rainfall</h3>
    </div>

    <div class="solar">
    <h3>Solar Irradiance</h3>
    </div>

    <div class="wind-speed-direction1">
    <h3>Wind Speed</h3>
    </div>

    <div class="pol-par">
    <h3>Pollution Parameters</h3>
    </div>
    </>
  );
};

export default DashboardHome;
