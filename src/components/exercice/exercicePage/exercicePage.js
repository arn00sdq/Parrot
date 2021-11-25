import React from 'react';
import { basket_jump, everest} from '../../../assets/img/index';
import DisplayContent from '../../common/DisplayContent/displayContent';

const pict_but_excercice = {

    title : "Instruments",
    exercice: {
        instruction: ["Selectionne le meilleur mot correspondant pour chaque image",
        "Selectionne les meilleur synonymes correspondant pour le mot"],
        Instrument: {
            btnSyno: {
                value: ["guitare", "flute", "voile", "acordeon", "chien", "bass", "chat", "prise"],
                type: "btn",
            },

            pictProps: {
                img: [basket_jump, everest, everest],
                opt: ["guitare", "flute", "acordeon"],
                type: "picture",
            },
        },
    },

    summarize: {
        id: 3100,
        level : "Débutant (A1 - A2)",
        repere :{
            title: "Repère :",
            elt : ["Present-perfect","Instruments"]},
        },
        reward :{
            id: 3102,
            title: "Récompense : ",
            elt : ["treasure","feather_icon"],
        },
    id: "0001", //0001 - 0999 : ex ; 1001 - 1999 : lecon; 2001 - 2999 : paper
}

function ExercicePage(props) {

    return (
        <main> {/*DisplayContent a appeler dans lecon et paper : mise en page*/}        
            <DisplayContent summarize={pict_but_excercice.summarize} 
                            exercice={pict_but_excercice.exercice} 
                            id={pict_but_excercice.id} 
                            title={pict_but_excercice.title}
            />
        </main>
    )
}

export default ExercicePage;
