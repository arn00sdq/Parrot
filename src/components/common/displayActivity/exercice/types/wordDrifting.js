import React from 'react';
import { achievement,GameImg,feather_icon } from "../../../../../database/images";

function WordDrifting({ content, currentStep, handles }) {
    return (
        <div className="drift-container">
            {/*<div className="title-drift">The word is : <span className="word-drift">Car</span></div>*/}
            <div className="life-container">
                <span className="life-number">Life 5</span>
            </div>

            <div className="points-container">
                <img className="life-icon" src={feather_icon}/>
                <span className="points-number">5</span>
            </div>

            <div className="word-container">
                    <span className="word-vrom">Doggo</span>
            </div>
            {/*<div className="infinite">
                
                <div className="shadow"></div>
            </div>*/}
        </div>

    );
}

export default WordDrifting;