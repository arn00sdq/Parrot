import React from 'react';

import NavSection from '../header/NavSection';
import InfoSection from '../header/InfoSection';

import ExerciceContainer from '../skillPage/exercice/ExerciceContainer'

import '../../assets/css/main/main.css';
import '../../assets/css/general/header.css';
import '../../assets/css/exercicePicker/filterCard.css';
import '../../assets/css/exercicePicker/exerciceCard.css';

import {
    bush,orange_house,pencil,tool_icon,book_icon,
    flag_britain,flame_icon,down_arrow,feather_icon,profil_icon,
    pres_perfect

} from '../../assets/img/index'



const Checkbox = ({ label, value, onChange }) => {
    return (
      <label className="filter-text-label">
        <input type="checkbox" checked={value} onChange={onChange} />
        {label}
      </label>
    );
  };

function ExercicePicker(props) {
    const [checkedOne, setCheckedOne] = React.useState(false);
    const [checkedTwo, setCheckedTwo] = React.useState(false);
    
    const handleChangeOne = () => {
        setCheckedOne(!checkedOne);
    };
    
    const handleChangeTwo = () => {
        setCheckedTwo(!checkedTwo);
    };

    function Slider(props){
        return(
            <input className={props.class} type="range" orient="vertical" />
        );
    }
    
    function ThemeContainer(props){
        return(
            <div className="theme-container">
            <div className="title-theme-container">{props.title}</div>
            <div className="content-theme">
                <div className="checkbox-section">
                    <Checkbox label="Present perfect" value={checkedOne} onChange={handleChangeOne}/>
                    <Checkbox label="Past" value={checkedOne} onChange={handleChangeOne}/>
                    <Checkbox label="Past continous" value={checkedOne} onChange={handleChangeOne}/>
                </div>
                <Slider class="slider"/>
            </div>
        </div>
        );
    }
    return (
        <div id="root-css">
            <img className="bush2" src={bush}/>
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

                <div className="filter-card">
                    <div className="filter-container">
                        <div className="title-filter">Recherche</div>
                        <ThemeContainer title="Conjugaisons"/>
                        <ThemeContainer title="Thème"/>
                        <div class="timer-container">
                            <div class="title-theme-container">Durée</div>
                            <div class="checkbox-section-timer">
                                <Checkbox label="5min" value={checkedOne} onChange={handleChangeOne}/>
                                <Checkbox label="10min" value={checkedOne} onChange={handleChangeOne}/>
                                <Checkbox label="15min" value={checkedOne} onChange={handleChangeOne}/>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="exercice-picker-card">
                    <div class="header-picker">
                        <div class="key-word">Present perfect</div>
                        <div class="n-exercices">8 exercices</div>
                    </div>
                    <ExerciceContainer className="exercice-filter-container" imgExercice={pres_perfect} time="10min" titleEx="Present Perfect"
                    state="Terminer" content="Cette lecon est basé sur une description d'image.
                    VOus devrez decrire l'image en alternant...
                    Au travers de cet exercice nous verrons l'utilisation
                    du present perfect avec des descriptions, texte a trous..."
                    />
                    <ExerciceContainer className="exercice-filter-container" imgExercice={pres_perfect} time="10min" titleEx="Present Perfect"
                    state="Terminer" content="Cette lecon est basé sur une description d'image.
                                              Vous devrez decrire l'image en alternant...
                                              Au travers de cet exercice nous verrons l'utilisation
                                              du present perfect avec des descriptions, texte a trous..."
                    />
                    <ExerciceContainer className="exercice-filter-container" imgExercice={pres_perfect} time="10min" titleEx="Present Perfect"
                    state="Terminer" content="Cette lecon est basé sur une description d'image.
                                              Vous devrez decrire l'image en alternant...
                                              Au travers de cet exercice nous verrons l'utilisation
                                              du present perfect avec des descriptions, texte a trous..."
                    />
                    <a href="#" class="button-ex-card">Charger plus</a>
                </div>
           
            </main>
        </div>
        )
}

export default ExercicePicker;
  