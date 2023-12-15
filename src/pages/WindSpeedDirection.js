import Navbar from "../components/Navbar";
import "../styles/WindSpeedDirection.css";

const WindSpeedDirection = () => {
  return (
    <>

    <div className="wind-speeddirection">
  
    <div className="wind-speed">WIND SPEED</div>
    <div className="wind-direction">WIND DIRECTION</div>
      </div>

      <Navbar></Navbar>
    </>
  );
};

export default WindSpeedDirection;
