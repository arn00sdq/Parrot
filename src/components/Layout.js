import HeaderConstruction from "./common/header/HeaderConstruction";
import "../assets/css/global/header.css";
import React from "react";
import { Outlet } from "react-router-dom";
import {
  home_icon,
  lesson_icon,
  paper_icon,
  bush,
  logo_parrot_adulte,
  exercise_icon,
} from "../database/images";

const headerProps = {
  navProps: {
    home: {
      icon: home_icon,
      route: "home",
      text: "ACCEUIL",
    },
    exercice: {
      icon: lesson_icon,
      route: "exercicePicker",
      text: "EXERCICES",
    },
    lesson: {
      icon: exercise_icon,
      route: "lessonPicker",
      text: "OUTILS",
    },
    paper: {
      icon: paper_icon,
      route: "paperPicker",
      text: "LIRE",
    },
    test: {
      icon: "",
      route: "toiecPage",
      text: "TOIEC TEST",
    },
  },
};

function Layout({ state, handles }) {
  console.log("-- Debug actif --");
  return (
    <div id="root-css">
      {/*<img className="bush2" src={bush} />*/}
      <HeaderConstruction state={state} handles={handles} header = {headerProps}/>
      <Outlet />
    </div>
  );
}

export default Layout;
