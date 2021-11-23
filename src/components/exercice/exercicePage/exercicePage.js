import React from 'react';
import '../../../assets/css/common/flag/flag.css';
import '../../../assets/css/exercice/exercicePage/exerciceCard.css';
import '../../../assets/css/exercice/exercicePage/summarize_card.css';
import '../../../assets/css/global/tool/button.css';
import '../../../assets/css/main/main.css';
import { basket_jump, everest, feather_icon, treasure } from '../../../assets/img/index';
import DisplayContent from '../../common/DisplayContent/displayContent';
import Reward from '../../common/reward/Reward';
import RowContentSummarize from '../../common/DisplayContent/summarize/rowContent';

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
        level : "Débutant (A1 - A2)",
        repere :{
            title: "Repère :",
            flagProps : {
                flag1: 'Present-perfect', 
                flag2: 'Instruments',
            },
        },
        reward :{
            title: "Récompense : ",
            rewardProps : {
                reward1: "treasure",
                reward2: "feather_icon",
            }
        },
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
