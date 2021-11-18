import React from 'react';

import HeaderComponent from '../header/Header';
import Reward from '../reward/Reward'
import RowContentSummarize from './sumariseSection/rowContent'
import ButtonSyno from './exerciceSection/btnSyno'
import PictExSection from './exerciceSection/picture'

import '../../assets/css/main/main.css';
import '../../assets/css/exercicePage/summarize_card.css';
import '../../assets/css/exercicePage/exerciceCard.css';
import '../../assets/css/general/tool/button.css';
import '../../assets/css/flag/flag.css'

import {bush,everest,basket_jump,cross,treasure, feather_icon} from '../../assets/img/index'


const flagProps = {flag1: 'Present-perfect',flag2: 'Instruments'};

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
                            <div class="content-exercice-section">
                                <div className="instruction-exercice">Selectionne le meilleur mot correspondant
                                                                      pour chaque image
                                </div>
                                <div class="picture-exercice-container">
                                    <PictExSection img={basket_jump} opt="chien"/>
                                    <PictExSection img={everest} opt="chien"/>
                                    <PictExSection img={basket_jump} opt="chien"/>
                                    <PictExSection img={everest} opt="chien"/>
                                    <PictExSection img={basket_jump} opt="chien"/>
                                </div>                             
                            </div>
                            <div class="content-exercice-section">
                                <div className="instruction-exercice">Selectionne le meilleur mot correspondant
                                                                      pour chaque image
                                </div>
                                <div class="syno-exercice-container">
                                    <ButtonSyno value="chien"/>
                                    <ButtonSyno value="chien"/>
                                    <ButtonSyno value="chien"/>
                                    <ButtonSyno value="chien"/>
                                    <ButtonSyno value="chien"/>
                                    <ButtonSyno value="chien"/>
                                    <ButtonSyno value="chien"/>
                                    <ButtonSyno value="chien"/>
                                </div>
                            </div>
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

export default ExercicePage;
  