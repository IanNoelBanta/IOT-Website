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
import LandingPage from "../src/pages/LandingPage";
import PollutionParameters from "../src/pages/PollutionParameters";
import Login from "../src/pages/Login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/Login",
    element: <Login />,
  },

  {
    path: "/DashboardHome",
    element: <DashboardHome />,
  },
  {
    path: "/AmbientTemp",
    element: <AmbientTemp />,
  },

  {
    path: "/SurfaceTemperature",
    element: <SurfaceTemperature />,
  },

  {
    path: "/RelativeHumidity",
    element: <RelativeHumidity />,
  },

  {
    path: "/WindSpeedDirection",
    element: <WindSpeedDirection />,
  },

  {
    path: "/Rainfall",
    element: <Rainfall />,
  },

  {
    path: "/SolarIrradiance",
    element: <SolarIrradiance />,
  },

  {
    path: "/PollutionParameters",
    element: <PollutionParameters />,
  },

  {
    path: "/LandingPage",
    element: <LandingPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
