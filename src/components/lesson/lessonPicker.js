import React from 'react';

import ThemeContainer from '../common/filter/ThemeContainer'
import TimeContainer from '../common/filter/TimeContainer'
import PictTimeContainer from '../common/bandItem/PictTimeContainer'

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

const lessonPickerProps = {
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


function LessonPicker({ state, handles }) {

    const lecPickerData = state.lessonPicker.lessons;
    const lecId = Object.values(lecPickerData).map(x => x.id);
    console.log(handles)

    return (
        <div id="root-css">
            <img className="bush2" src={bush} />

            <main>

                <div className="card">
                    <div className="filter-container">
                        <div className="filter-container-header">
                            <div className="title-filter">Recherche</div>
                        </div>
                        <div className="container-card-body">
                            <ThemeContainer title="Recherche" content={themeProps} />
                            <TimeContainer title="Durée" content={timeProps} />
                        </div>
                    </div>
                </div>

                <div className="exercice-picker-card card">
                    <div className="header-picker">
                        <div className="tag-point-medium">Present perfect</div>
                        <div className="n-exercices">8 exercices</div>
                    </div>
                    <PictTimeContainer
                        content={lessonPickerProps}
                        id={lecId}
                        handles={handles}
                    />
                    <a href="#" className="button-ex-card">Charger plus</a>
                </div>

            </main>
        </div>
    )
}

export default LessonPicker;
