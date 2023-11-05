import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <img
        className="untitled-1440-x-1024-px-1"
        alt=""
        src="/untitled-1440-x-1024-px-1@2x.png"
      />
      <img
        className="cloudy-climes-high-resolution-icon"
        alt=""
        src="/cloudyclimeshighresolutionlogoblacktransparent-1@2x.png"
      />
      <div className="cloudy-climes">CLOUDY CLIMES</div>
      <div className="designing-an-automatic">
        Designing an Automatic Weather Station for Continuous, Accurate Data
        Collection with Meteorological Instruments in Cavite City
      </div>
      <div className="hover" />
      <button className="log-in" onClick={() => window.location.href = 'http://localhost:3001'}>GET STARTED</button>
    </div>
  );
};

export default LandingPage;
