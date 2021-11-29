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
            id:1000,
            icon: home_icon,
            route: "home",
            text: "ACCEUIL",
        },
        lecon: {
            id:1001,
            icon: lecon_icon,
            route: "exercicePicker",
            text: "EXERCICES",
        },
        exercice: {
            id:1002,
            icon: exercice_icon,
            route: "paperPicker",
            text: "OUTILS",
        },
        paper: {
            id:1003,
            icon: paper_icon,
            route: "lessonPicker",
            text: "LIRE",
        },
    },
    userProps: {
        flag: {
            id:2000,
            flag1: ["img", flag_britain, "infos-icon"], //balise img [nom_balise,src,class]
            flag2: ["img", down_arrow, "arrow-icon"],
        },
        feather: {
            id:2001,
            flag1: ["img", feather_icon, "infos-icon"],
            flag2: ["p", 4,"feather-number"],
        },
        flame: {
            id:2002,
            flag1: ["img", flame_icon, "flame-icon"],
            flag2: ["p", 4,""],
        },
        profil: {
            id:2003,
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
            <img id="parrot-home" src={logo_parrot_adulte} />
            <HeaderConstruction header={headerProps}/>
            <Outlet />
        </div>
    );
}

export default Layout;


