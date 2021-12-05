import React from 'react';
import SectionCard from './exercice/SectionCard';

import {
    bush, logo_parrot_adulte, pres_perfect, medium_parrot, small_parrot, sign_where, home_ex
} from '../../database/images'

const toiecBeginner = {
    exercice: [{
        title: "Present Perfect",
        className: "ptc-skill-container",
        time: "10min",
        imgExercice: pres_perfect,
        state: "Terminer",
        text: "Dans cette exercice nous verrons\
                l'utilisation du present perfect aux travers\
                de text à trous..."
    },
    {
        title: "Present Perfect",
        className: "ptc-skill-container",
        time: "10min",
        imgExercice: home_ex,
        state: "Terminer",
        text: "Dans cette exercice nous verrons\
                l'utilisation du present perfect aux travers\
                de text à trous..."
    },
    {
        title: "Present Perfect",
        className: "ptc-skill-container",
        time: "10min",
        imgExercice: sign_where,
        state: "Terminer",
        text: "Dans cette exercice nous verrons\
                l'utilisation du present perfect aux travers\
                de text à trous..."
    },
    {
        title: "Present Perfect",
        className: "ptc-skill-container",
        time: "10min",
        imgExercice: sign_where,
        state: "Terminer",
        text: "Dans cette exercice nous verrons\
                l'utilisation du present perfect aux travers\
                de text à trous..."
    },
    ],
}

const toiecIndependant = {
    exercice: [{
        title: "Present Perfect",
        className: "ptc-skill-container",
        time: "10min",
        imgExercice: pres_perfect,
        state: "Terminer",
        text: "Dans cette exercice nous verrons\
                l'utilisation du present perfect aux travers\
                de text à trous..."
    },
    {
        title: "Present Perfect",
        className: "ptc-skill-container",
        time: "10min",
        imgExercice: home_ex,
        state: "Terminer",
        text: "Dans cette exercice nous verrons\
                l'utilisation du present perfect aux travers\
                de text à trous..."
    },
    {
        title: "Present Perfect",
        className: "ptc-skill-container",
        time: "10min",
        imgExercice: sign_where,
        state: "Terminer",
        text: "Dans cette exercice nous verrons\
                l'utilisation du present perfect aux travers\
                de text à trous..."
    },
    {
        title: "Present Perfect",
        className: "ptc-skill-container",
        time: "10min",
        imgExercice: sign_where,
        state: "Terminer",
        text: "Dans cette exercice nous verrons\
                l'utilisation du present perfect aux travers\
                de text à trous..."
    }
    ],
}

const toiecAdvanced = {
    exercice: [{
        title: "Present Perfect",
        className: "ptc-skill-container",
        time: "10min",
        imgExercice: pres_perfect,
        state: "Terminer",
        text: "Dans cette exercice nous verrons\
                l'utilisation du present perfect aux travers\
                de text à trous..."
    },
    {
        title: "Present Perfect",
        className: "ptc-skill-container",
        time: "10min",
        imgExercice: home_ex,
        state: "Terminer",
        text: "Dans cette exercice nous verrons\
                l'utilisation du present perfect aux travers\
                de text à trous..."
    },
    {
        title: "Present Perfect",
        className: "ptc-skill-container",
        time: "10min",
        imgExercice: sign_where,
        state: "Terminer",
        text: "Dans cette exercice nous verrons\
                l'utilisation du present perfect aux travers\
                de text à trous..."
    },
    {
        title: "Present Perfect",
        className: "ptc-skill-container",
        time: "10min",
        imgExercice: sign_where,
        state: "Terminer",
        text: "Dans cette exercice nous verrons\
                l'utilisation du present perfect aux travers\
                de text à trous..."
    }
    ],
}


function ToiecPage({ state, handles }) {
    return (
        <div id="root-css">
            <img id="large-parrot" src={logo_parrot_adulte} />
            <img id="medium-parrot" src={medium_parrot} />
            <img id="baby-parrot" src={small_parrot} />
            <main>
                <SectionCard titleCard="Beginner" content={toiecBeginner} state={state} handles={handles}/>
                <SectionCard titleCard="Independant" content={toiecIndependant} state={state} handles={handles}/>
                <SectionCard titleCard="Advanced" content={toiecAdvanced} state={state} handles={handles}/>
            </main>
        </div>
    )
}

export default ToiecPage;
