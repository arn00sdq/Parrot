import React from 'react';

import HeaderComponent from '../../common/header/Header';
import Reward from '../../common/reward/Reward'
import RowContentSummarize from './sumariseSection/rowContent'
import DisplayContent from '../../common/DisplayContent/displayContent'

import '../../../assets/css/main/main.css';
import '../../../assets/css/exercice/exercicePage/summarize_card.css';
import '../../../assets/css/exercice/exercicePage/exerciceCard.css';
import '../../../assets/css/global/tool/button.css';
import '../../../assets/css/common/flag/flag.css'

import {bush,everest,basket_jump,treasure, feather_icon} from '../../../assets/img/index'


const flagProps = {flag1: 'Present-perfect',flag2: 'Instruments'};

const pict_but_excercice = {
    instruction: ["Selectionne le meilleur mot correspondant pour chaque image",
                  "Selectionne les meilleur synonymes correspondant pour le mot"],
    Instrument : {
        btnSyno : {
            value: ["guitare","flute","voile","acordeon","chien","bass","chat","prise"],
            type: "btn",
        },
    
        pictProps : {            
            img: [basket_jump,everest,everest],                                  
            opt: ["guitare","flute","acordeon"],
            type: "picture",                          
        },
    // other pict_ex_ex
    },
    id:"0001", //0001 - 0999 : ex ; 1001 - 1999 : lecon; 2001 - 2999 : paper
}

function ExercicePage(props){

    return (
        <div id="root-css">
            <img className="bush2" src={bush}/>

            <HeaderComponent />

            <main>
                    <div className="page-summarize-card card">
                        
                        <div className="page-summarize-container">
                            <div className="title-summarize-container">
                                <div className="title-summarize">Instruments</div>
                            </div>
                            <div className="hr-horizontale"></div>
                            <div className="section-summarize-container">
                                <div className="title-section-summarize">Repère :</div>
                                <div className="infos-section-summarize">
                                    <RowContentSummarize title="Niveau" level="Débutant (A1 - A2)"/>
                                    <RowContentSummarize title="Balise" flag={flagProps}/>
                                </div>   
                                <div className="hr-horizontale"></div>
                            </div>
                            <div className="section-summarize-container">
                                <div className="title-section-summarize">Récompense :</div>
                                <div className="reward-section-summarize">
                                    <Reward imgReward="reward" classReward={treasure}/>
                                    <Reward imgReward="reward" classReward={feather_icon}/>
                                </div>
                                <div className="hr-horizontale"></div>
                            </div>
                        </div>
                    </div>
                    <DisplayContent type={pict_but_excercice} id={pict_but_excercice.id}/>
            </main>
        </div>
        )
}

export default ExercicePage;
  