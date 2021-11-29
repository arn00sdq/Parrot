import React from 'react';

import ThemeContainer from '../common/picker/filter/ThemeContainer'
import TimeContainer from '../common/picker/filter/TimeContainer'
import PictTimeContainer from '../common/bandItem/PictTimeContainer'

import { bush, pres_perfect } from '../../assets/img/index'

const themeProps = {
    Categorie: {
        title: "Conjugaisons",
        props: ["Present perfect", "Past", "PastContinous"],
    },
    Journaux: {
        title: "Themes",
        props: ["Voyage", "Montagne", "Hopital"],
    }
}

const timeProps = {
    Time: {
        title: "Durée",
        props: ["5min", "10min", "15min"]
    }
}

const exercicePickerProps = {
    exercice: [{
        title: "Present Perfect",
        className:"ptc-picker-container",
        time: "10min",
        imgExercice: pres_perfect,
        state: "Terminer",
        text: "Cette lecon est basé sur une description d'image.\
        VOus devrez decrire l'image en alternant...\
        Au travers de cet exercice nous verrons l'utilisation\
        du present perfect avec des descriptions, texte a trous..."
    },
    {
        title: "Present Perfect",
        className:"ptc-picker-container",
        time: "10min",
        imgExercice: pres_perfect,
        state: "Terminer",
        text: "Cette lecon est basé sur une description d'image.\
            VOus devrez decrire l'image en alternant...\
            Au travers de cet exercice nous verrons l'utilisation\
            du present perfect avec des descriptions, texte a trous..."
    },
    {
        title: "Present Perfect",
        className:"ptc-picker-container",
        time: "10min",
        imgExercice: pres_perfect,
        state: "Terminer",
        text: "Cette lecon est basé sur une description d'image.\
            VOus devrez decrire l'image en alternant...\
            Au travers de cet exercice nous verrons l'utilisation\
            du present perfect avec des descriptions, texte a trous..."
    }
    ],
}

function ExercicePicker(props) {

    return (
        <div id="root-css">
            <img className="bush2" src={bush} />
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
                        <div className="tag-point-medium">Present perfect</div>
                        <div className="n-exercices">8 exercices</div>
                    </div>
                    <PictTimeContainer content={exercicePickerProps} />
                    <a href="#" className="button-ex-card">Charger plus</a>
                </div>

            </main>
        </div>
    )
}

export default ExercicePicker;
