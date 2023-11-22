import Navbar from "../components/Navbar";

const DashboardHome = () => {
  return (
    <>
      
      <div className="dashboard-home">
        
      {/* <div className="title">Dashboard</div> */}
      
      <video autoPlay loop playsInline className="back-video" alt="" src="/Clouds.mp4">
      </video>

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
      </div>

      

      <Navbar></Navbar>
    </>
  );
};

export default DashboardHome;
