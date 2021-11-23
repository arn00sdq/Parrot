import NavSection from './common/header/NavSection';
import InfoSection from './common/header/InfoSection';
import '../assets/css/global/header.css';
import React from 'react';
import { Outlet } from "react-router-dom";
import {
    orange_house,pencil,tool_icon,book_icon,bush,logo_parrot_adulte,
    flag_britain,flame_icon,down_arrow,feather_icon,profil_icon,

} from '../assets/img/index'

function Layout(){
    return (
        <div id="root-css">
            <img className="bush2" src={bush}/>
            <img id="parrot-home" src={logo_parrot_adulte}/>
            <header id="container-header">
                <div className="brand-section">
                    <div id="brand-logo">PARROT</div>
                </div>
                <nav>
                    <NavSection src={orange_house} route="home" text="Accueil"/>
                    <NavSection src={pencil} route="ExercicePicker" text="Exercices"/>
                    <NavSection src={tool_icon} route="ExercicePage"  text="Outils"/>
                    <NavSection src={book_icon} route="ExercicePage"  text="Lire"/>
                </nav>
               
                <div className="user-infos">
                    <InfoSection srcFlag={flag_britain} srcArrow={down_arrow} classArrow="arrow-icon"/>
                    <div className="infos-section">
                        <img src={feather_icon} className="infos-icon"/>
                        <p id="feather-number">4</p>
                    </div>
                    <div className="infos-section">
                        <img src={flame_icon} id="flame-icon"/>
                        <p>4</p>
                    </div>
                    <div className="infos-section">
                        <img  src={profil_icon} className="infos-icon"/>
                        <img src={down_arrow} className="arrow-icon"/>
                    </div>
                </div>
            </header>
            <Outlet />
        </div>
    );
}

export default Layout;


