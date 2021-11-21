import React from 'react';

import HeaderComponent from '../../common/header/Header';
import Reward from '../../common/reward/Reward'
import RowContentSummarize from '../../exercice/exercicePage/sumariseSection/rowContent'
import Content_exercice from '../../exercice/exercicePage/exerciceSection/content_exercice'

import '../../../assets/css/main/main.css';
import '../../../assets/css/exercice/exercicePage/summarize_card.css';
import '../../../assets/css/exercice/exercicePage/exerciceCard.css';
import '../../../assets/css/global/tool/button.css';
import '../../../assets/css/common/flag/flag.css'

import {bush,everest,basket_jump,cross,treasure, feather_icon} from '../../../assets/img/index'


const flagProps = {flag1: 'Present-perfect',flag2: 'Instruments'};
const pictProps = {            
    img: [basket_jump,everest,everest],                                  
    opt: ["chien","voile","chat"],
    type: "picture",                          
};
const btnSyno = {
    value: ["chien","fg","voile","chat","chien","voile","chat","chat"],
    type: "btn",
}

function LessonPage(props){

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
                    <div className="page-exercice-card card">
                        <div className="page-exercice-container">
                            <div className="header-exercice">
                                <div className="title-exercice">Musical Instrument</div>
                                <div className="progress-exercice-bar">
                                    <img src={cross} class="cross"></img>
                                    <div class="large-bar">
                                        <div className="orange-bar"></div>
                                    </div>
                                </div>
                            </div>
                            <Content_exercice exProps={pictProps} instruction="Selectionne le meilleur mot correspondant
                                                                               pour chaque image"/>
                            <Content_exercice exProps={btnSyno} instruction="Selectionne les meilleur synonymes correspondant
                                                                               pour le mot"/>
                            <div className="hr-horizontale-exercice"></div>
                            <div class="footer-exercice-container">
                                <a href="#" className="button button-previous">Previous</a>
                                <a href="#" className="button button-continue">Continuer</a>
                            </div>
                        </div>
                        
                    </div>
            </main>
        </div>
        )
}

export default LessonPage;
  