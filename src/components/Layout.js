import HeaderConstruction from "./common/header/HeaderConstruction";
import "../assets/css/global/header.css";
import React from "react";
import { Outlet } from "react-router-dom";


function Layout({ state, handles }) {
  return (
    <div id="root-css">
      {/*<img className="bush2" src={bush} />*/}
      <HeaderConstruction state={state} handles={handles}/>
      <Outlet />
    </div>
  );
}

export default Layout;
