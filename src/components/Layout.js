import HeaderConstruction from './common/header/HeaderConstruction';
import '../assets/css/global/header.css';
import React from 'react';
import { Outlet } from "react-router-dom";
import {
    home_icon, lecon_icon, tool_icon, paper_icon, bush, logo_parrot_adulte,
    flag_britain, flame_icon, down_arrow, feather_icon, profil_icon,

} from '../assets/img/index'

const headerProps = {
    navProps: {
        home: {
            icon: home_icon,
            route: "home",
            text: "Accueil",
        },
        lecon: {
            icon: lecon_icon,
            route: "ExercicePage",
            text: "Exercices",
        },
        tool: {
            icon: tool_icon,
            route: "ExercicePicker",
            text: "Outils",
        },
        paper: {
            icon: paper_icon,
            route: "ExercicePage",
            text: "Lire",
        },
    },
    userProps: {
        flag: {
            flag1: ["img", flag_britain, "infos-icon"], //balise img [nom_balise,src,class]
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
        }
    }
}

function Layout() {
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


