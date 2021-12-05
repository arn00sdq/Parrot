import React from 'react';

import ThemeContainer from '../common/filter/ThemeContainer'
import TimeContainer from '../common/filter/TimeContainer'
import PictTimeContainer from '../common/bandItem/PictTimeContainer'
import { data as exercisesData } from "../../database/exercises";

import { bush, pres_perfect } from '../../database/images'

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
        className: "ptc-picker-container",
        time: "10min",
        imgExercice: pres_perfect,
        state: "Terminer",
        text: "Cette lesson est basé sur une description d'image.\
        VOus devrez decrire l'image en alternant...\
        Au travers de cet exercice nous verrons l'utilisation\
        du present perfect avec des descriptions, texte a trous..."
    },
    {
        title: "Present Perfect",
        className: "ptc-picker-container",
        time: "10min",
        imgExercice: pres_perfect,
        state: "Terminer",
        text: "Cette lesson est basé sur une description d'image.\
            VOus devrez decrire l'image en alternant...\
            Au travers de cet exercice nous verrons l'utilisation\
            du present perfect avec des descriptions, texte a trous..."
    },
    {
        title: "Present Perfect",
        className: "ptc-picker-container",
        time: "10min",
        imgExercice: pres_perfect,
        state: "Terminer",
        text: "Cette lesson est basé sur une description d'image.\
            VOus devrez decrire l'image en alternant...\
            Au travers de cet exercice nous verrons l'utilisation\
            du present perfect avec des descriptions, texte a trous..."
    }
    ],
}

function ExercicePicker({ state, handles }) {

    const exPickerData = state.exercisePicker.exercises;
    const exId = Object.values(exPickerData).map(x => x.id);

    return (
        <div id="root-css">
            <img className="bush2" src={bush} />
            <main>

                <div className="card">
                    <div className="filter-container">
                        <div className="filter-container-header">
                            <div className="title-filter">Recherche</div>
                        </div>
                        <ThemeContainer key="89" title="Recherche" content={themeProps} />
                        <TimeContainer key="890" title="Durée" content={timeProps} />
                    </div>
                </div>

                <div className="exercice-picker-card card">
                    <div className="header-picker">
                        <div className="tag-point-medium">Present perfect</div>
                        <div className="n-exercices">8 exercices</div>
                    </div>
                    <PictTimeContainer
                        content={exercicePickerProps}
                        id={exId}
                        handles={handles}
                    />
                    <a href="#" className="button-ex-card">Charger plus</a>
                </div>

            </main>
        </div>
    )
}

export default ExercicePicker;
