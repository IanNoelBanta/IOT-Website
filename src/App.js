// import HelloWorld from "./components/HelloWorld";
// import AmbientTemp from "./pages/AmbientTemp";
// import DashboardHome from "./pages/DashboardHome";
// import LandingPage from "./pages/LandingPage";
// import Rainfall from "./pages/Rainfall";
// import RelativeHumidity from "./pages/RelativeHumidity";
import Navbar from "./components/Navbar";
import NavbarWind from "./components/NavbarWind";
import SolarIrradiance from "./pages/SolarIrradiance";
// import WindSpeedDirection from "./pages/WindSpeedDirection";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <NavbarWind/>
    </div>
  );
}

export default App;
