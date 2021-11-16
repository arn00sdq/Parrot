import React from 'react';

import HeaderComponent from '../header/Header';

import '../../assets/css/general/global.css'

import '../../assets/css/general/font.css';
import '../../assets/css/main/main.css';
import '../../assets/css/exercicePage/summarize_card.css';
import '../../assets/css/exercicePage/exerciceCard.css';

import {bush,everest,basket_jump,cross} from '../../assets/img/index'

function PictExSection(props){
return (
    <div className="picture-exercice-section">
        <img src={props.img} class="picture-exercice"/>
        <select class="word-picker">
            <option className="opt-word">{props.opt}</option>
            <option className="opt-word">{props.opt}</option>
        </select>
    </div>
);
}

function ButtonSyno(props){
    return (
        <div class="syno-button-container">
            <div class="text-syno">{props.value}</div>
        </div>
    );
}

function ExercicePage(props){

    return (
        <div id="root-css">
            <img className="bush2" src={bush}/>

            <HeaderComponent />

            <main>
                    <div className="page-summarize-card">
                        
                        <div className="page-summarize-container">
                            <div className="title-summarize-container">
                                <div className="title-summarize">Instruments</div>
                            </div>
                            <div className="hr-horizontale"></div>
                            <div className="section-summarize-container">
                                <div className="title-section-summarize">Repère</div>
                                <div className="infos-section-summarize">
                                    <div className="row-section-summarize">
                                        <div className="title-row-summarize">Niveau :</div>
                                    </div>
                                    <div className="row-section-summarize">
                                        <div className="title-row-summarize">Balise :</div>
                                    </div>
                                </div>
                                <div className="hr-horizontale"></div>
                            </div>
                            <div className="section-summarize-container">
                                <div className="title-section-summarize">Récompense</div>
                                <div className="reward-section-summarize">
                                    <div className="row-section-summarize">
                                        
                                    </div>
                                </div>
                                <div className="hr-horizontale"></div>
                            </div>
                        </div>
                    </div>
                    <div className="page-exercice-card">
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
                                <div className="hr-horizontale"></div>
                            </div>
                        </div>
                    </div>
            </main>
        </div>
        )
}

export default ExercicePage;
  