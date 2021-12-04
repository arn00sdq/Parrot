import HeaderConstruction from './common/header/HeaderConstruction';
import '../assets/css/global/header.css';
import React from 'react';
import { Outlet } from "react-router-dom";
import {
    home_icon, lesson_icon, paper_icon, bush, logo_parrot_adulte,
    flag_britain, flame_icon, down_arrow, feather_icon, profil_icon,exercise_icon

} from '../database/images'

const headerProps = {
    navProps: {
        home: {
            icon: home_icon,
            route: "home",
            text: "ACCEUIL",
        },
        exercice: {
            icon: lesson_icon,
            route: "exercicePage",
            text: "EXERCICES",
        },
        lesson: {
            icon: exercise_icon,
            route: "lessonPicker",
            text: "OUTILS",
        },
        paper: {
            icon: paper_icon,
            route: "paperPage",
            text: "LIRE",
        },
        test: {
            icon: "",
            route: "toiecPage",
            text: "TOIEC TEST",
        },
    },
    userProps: {
        flag: {
            flag1: ["img", flag_britain, "flag-icon","dropdown"], //balise img [nom_balise,src,class]
            flag2: ["img", down_arrow, "arrow-icon"],
        },
        feather: {
            flag1: ["img", feather_icon, "infos-icon"],
            flag2: ["p", 4,"user-number"],
        },
        flame: {
            flag1: ["img", flame_icon, "infos-icon"],
            flag2: ["p", 4,"user-number"],
        },
        profil: {
            flag1: ["img", profil_icon, "infos-icon"],
            flag2: ["img", down_arrow, "arrow-icon"],
        },
    }
}

function Layout({state, handles}) {
    console.log("-- Debug actif --")
    return (
        <div id="root-css">
            <img className="bush2" src={bush} />
            <HeaderConstruction state = {state} handles = {handles} header={headerProps}/>
            <Outlet />
        </div>
    );
}

export default Layout;


