import NavbarWind from "../components/NavbarWind";
// import "../styles/WindSpeedDirection.css";

const WindSpeedDirection = () => {
  return (
    <>
    <div className="wind-speeddirection">
    <div className="wind-speed">WIND SPEED</div>
      <div className="wind-direction">WIND DIRECTION</div>

      <NavbarWind></NavbarWind>
      </div>
    </>
  );
};

export default WindSpeedDirection;
