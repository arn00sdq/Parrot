import React from 'react';

import Checkbox from '../tool/Checkbox'
import Slider from '../tool/Slider'
import ExerciceContainer from '../exerciceItem/ExerciceContainer'
import HeaderComponent from '../header/Header';

import '../../assets/css/main/main.css';
import '../../assets/css/exercicePicker/filterCard.css';
import '../../assets/css/exercicePicker/exerciceCard.css';

import {bush,pres_perfect} from '../../assets/img/index'

function ExercicePicker(props) {
    const [checkedOne, setCheckedOne] = React.useState(false);
    const [checkedTwo, setCheckedTwo] = React.useState(false);
    
    const handleChangeOne = () => {
        setCheckedOne(!checkedOne);
    };
    
    const handleChangeTwo = () => {
        setCheckedTwo(!checkedTwo);
    };


    
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

            <HeaderComponent />

            <main>

                <div className="card">
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
                
                <div class="exercice-picker-card card">
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
  