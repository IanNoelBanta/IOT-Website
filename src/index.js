import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AmbientTemp from "../src/pages/AmbientTemp";
import DashboardHome from "../src/pages/DashboardHome";


import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "/AmbientTemp",
    element: <AmbientTemp/>,
  },

  {
    path: "/DashboardHome",
    element: <DashboardHome/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router}/>
);
