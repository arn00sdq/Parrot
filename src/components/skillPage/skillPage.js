import NavSection from '../header/NavSection';
import InfoSection from '../header/InfoSection';
import SectionCard from './exercice/SectionCard';

import '../../assets/css/main/main.css';
import '../../assets/css/general/header.css';
import '../../assets/css/skillPage/card.css';

import {
    bush,logo_parrot_adulte,orange_house,pencil,tool_icon,book_icon,
    flag_britain,flame_icon,down_arrow,feather_icon,profil_icon,
    pres_perfect,medium_parrot,small_parrot

} from '../../assets/img/index'

function SkillPage(props) {
    return (
        <div id="root-css">
            <img className="bush2" src={bush}/>
            <img id="large-parrot" src={logo_parrot_adulte}/>
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
  