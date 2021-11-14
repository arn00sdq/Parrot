import NavSection from '../header/NavSection';
import InfoSection from '../header/InfoSection';
import SectionCard from './exercice/SectionCard';

import '../../assets/css/main/main.css';
import '../../assets/css/general/header.css';
import '../../assets/css/skillPage/card.css';


import bush from '../../assets/img/bush.png';
import adult_parrot from '../../assets/img/logo_parrot_adulte.png';
import orange_house from '../../assets/img/orange-house.png';
import pencil from '../../assets/img/pencil.png';
import tool_icon from '../../assets/img/tool-icon.png';
import book_icon from '../../assets/img/book-icon.png';
import flag_britain from '../../assets/img/flag_britain.png';
import down_arrow from '../../assets/img/down-arrow.png';
import feather_icon from '../../assets/img/feather-icon.jpg';
import flame_icon from '../../assets/img/flame-icon.jpg';
import profil_icon from '../../assets/img/profil-icon.png';

import pres_perfect from '../../assets/img/skillPage/pres-perfect.jpg';
import medium_parrot from '../../assets/img/medium_parrot.png';
import small_parrot from '../../assets/img/small_parrot.png';


function SkillPage(props) {
    return (
        <div id="root-css">
            <img className="bush2" src={bush}/>
            <img id="large-parrot" src={adult_parrot}/>
            <img id="medium-parrot" src={medium_parrot}/>
            <img id="baby-parrot" src={small_parrot}/>
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

            <main>
                    <SectionCard titleCard="Elementaire" titleEx="Present perfect" /*bd avec section correspondante */ imgExercice={pres_perfect}/>
                    <SectionCard titleCard="Indépendant" titleEx="Present perfect" imgExercice={pres_perfect}/>
                    <SectionCard titleCard="Avancé" titleEx="Present perfect" imgExercice={pres_perfect}/>
            </main>
        </div>
        )
}

export default SkillPage;
  