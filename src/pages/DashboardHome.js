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
    </>
  );
};

export default DashboardHome;
