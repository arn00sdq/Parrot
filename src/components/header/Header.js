import NavSection from './headerElement/NavSection';
import InfoSection from './headerElement/InfoSection';
import '../../assets/css/general/header.css';
import React from 'react';
import {
    orange_house,pencil,tool_icon,book_icon,
    flag_britain,flame_icon,down_arrow,feather_icon,profil_icon,

} from '../../assets/img/index'

function HeaderComponent(){
    return (
        <header id="container-header">
            <div className="brand-section">
                <div id="brand-logo">PARROT</div>
            </div>
            <nav>
                <NavSection src={orange_house} href="#" text="Accueil"/>
                <NavSection src={pencil} href="#" text="Exercices"/>
                <NavSection src={tool_icon} href="#" text="Outils"/>
                <NavSection src={book_icon} href="#" text="Lire"/>
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
    );
}

export default HeaderComponent;


