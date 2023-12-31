import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AmbientTemp from "../src/pages/AmbientTemp";
import DashboardHome from "../src/pages/DashboardHome";
import SurfaceTemperature from "../src/pages/SurfaceTemperature";
import RelativeHumidity from "../src/pages/RelativeHumidity";
import WindSpeedDirection from "../src/pages/WindSpeedDirection";
import SolarIrradiance from "../src/pages/SolarIrradiance";
import Rainfall from "../src/pages/Rainfall";
import PollutionParameters from "../src/pages/PollutionParameters";
import Login from "../src/pages/Login";
import SignUp from "../src/pages/SignUp";




import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  
  {
    path: "/DashboardHome",
    element: <DashboardHome/>,
  },
  {
    path: "/AmbientTemp",
    element: <AmbientTemp/>,
  },

  {
    path: "/SurfaceTemperature",
    element: <SurfaceTemperature/>,
  },

  {
    path: "/RelativeHumidity",
    element: <RelativeHumidity/>,
  },

  {
    path: "/WindSpeedDirection",
    element: <WindSpeedDirection/>,
  },

  {
    path: "/Rainfall",
    element: <Rainfall/>,
  },

  {
    path: "/SolarIrradiance",
    element: <SolarIrradiance/>,
  },

  {
    path: "/PollutionParameters",
    element: <PollutionParameters/>,
  },

  {
    path: "/Login",
    element: <Login/>,
  },

  {
    path: "/SignUp",
    element: <SignUp/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router}/>
);

