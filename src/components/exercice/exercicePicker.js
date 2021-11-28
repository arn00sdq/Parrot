import React from 'react';

import ThemeContainer from '../common/picker/filter/ThemeContainer'
import TimeContainer from '../common/picker/filter/TimeContainer'
import PictTimeContent from '../common/bandItem/PictTimeContent'

import {bush,pres_perfect} from '../../assets/img/index'

const themeProps = {
    Categorie : {
        title : "Conjugaisons",
        props : ["Present perfect","Past","PastContinous"],
    },
    Journaux: {
        title : "Themes",
        props : ["Voyage","Montagne","Hopital"],
    }
}

const timeProps = {
    Time : {
        title : "Durée",
        props:["5min","10min","15min"]
    }
}

function ExercicePicker(props) {

    return (
        <div id="root-css">
            <img className="bush2" src={bush}/>
            <main>

            <div className="card">
                    <div className="filter-container">
                        <div className="title-filter">Recherche</div>
                        <ThemeContainer key="89" title="Recherche" content={themeProps} />
                        <TimeContainer key="890" title="Durée" content={timeProps} />
                    </div>
                </div>
                
                <div className="exercice-picker-card card">
                    <div className="header-picker">
                        <div className="flag-point-medium">Present perfect</div>
                        <div className="n-exercices">8 exercices</div>
                    </div>
                    <PictTimeContent className="ptc-picker-container" imgExercice={pres_perfect} time="10min" titleEx="Present Perfect"
                    state="Terminer" content="Cette lecon est basé sur une description d'image.
                    VOus devrez decrire l'image en alternant...
                    Au travers de cet exercice nous verrons l'utilisation
                    du present perfect avec des descriptions, texte a trous..."
                    />
                    <PictTimeContent className="ptc-picker-container" imgExercice={pres_perfect} time="10min" titleEx="Present Perfect"
                    state="Terminer" content="Cette lecon est basé sur une description d'image.
                                              Vous devrez decrire l'image en alternant...
                                              Au travers de cet exercice nous verrons l'utilisation
                                              du present perfect avec des descriptions, texte a trous..."
                    />
                    <PictTimeContent className="ptc-picker-container" imgExercice={pres_perfect} time="10min" titleEx="Present Perfect"
                    state="Terminer" content="Cette lecon est basé sur une description d'image.
                                              Vous devrez decrire l'image en alternant...
                                              Au travers de cet exercice nous verrons l'utilisation
                                              du present perfect avec des descriptions, texte a trous..."
                    />
                    <a href="#" className="button-ex-card">Charger plus</a>
                </div>
           
            </main>
        </div>
        )
}

export default ExercicePicker;
  