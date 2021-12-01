import HeaderConstruction from './common/header/HeaderConstruction';
import '../assets/css/global/header.css';
import React from 'react';
import { Outlet } from "react-router-dom";
import {
    home_icon, lecon_icon, paper_icon, bush, logo_parrot_adulte,
    flag_britain, flame_icon, down_arrow, feather_icon, profil_icon,exercice_icon

} from '../database/images'

const headerProps = {
    navProps: {
        home: {
            icon: home_icon,
            route: "home",
            text: "ACCEUIL",
        },
        exercice: {
            icon: lecon_icon,
            route: "exercicePage",
            text: "EXERCICES",
        },
        lecon: {
            icon: exercice_icon,
            route: "lessonPicker",
            text: "OUTILS",
        },
        paper: {
            icon: paper_icon,
            route: "paperPicker",
            text: "LIRE",
        },
        test: {
            icon: feather_icon,
            route: "toiecPage",
            text: "TOIEC TEST",
        },
    },
    userProps: {
        flag: {
            flag1: ["img", flag_britain, "infos-icon","dropdown"], //balise img [nom_balise,src,class]
            flag2: ["img", down_arrow, "arrow-icon"],
        },
        feather: {
            flag1: ["img", feather_icon, "infos-icon"],
            flag2: ["p", 4,"feather-number"],
        },
        flame: {
            flag1: ["img", flame_icon, "flame-icon"],
            flag2: ["p", 4,""],
        },
        profil: {
            flag1: ["img", profil_icon, "infos-icon"],
            flag2: ["img", down_arrow, "arrow-icon"],
        },
    }
}

function Layout() {
    console.log("-- Debug actif --")
    return (
        <div id="root-css">
            <img className="bush2" src={bush} />
            <HeaderConstruction header={headerProps}/>
            <Outlet />
        </div>
    );
}

export default Layout;


