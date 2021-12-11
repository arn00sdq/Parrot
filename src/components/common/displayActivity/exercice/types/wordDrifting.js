import React from 'react';
import { achievement, GameImg, feather_icon } from "../../../../../database/images";

function WordDrifting({ content, currentStep, handles, gameInfo }) {
 
    const handleButtonClick = (e) => {
        e.preventDefault();

        const {
            target: { value },
        } = e;

        if (content.theme[0].answer.includes(value)) {
            handles.handleAddPointExercisePage();
        }else{

        }
    };

    var life = gameInfo.life;
    var points = gameInfo.points;

    return (
        <div className="drift-container">
            {/*<div className="title-drift">The word is : <span className="word-drift">Car</span></div>*/}
            <div className="life-container">
                <span className="life-number">{life}</span>
            </div>

            <div className="points-container">
                <img className="life-icon" src={feather_icon} />
                <span className="points-number">{points}</span>
            </div>

            <div className="word-container">
                <button
                    onClick={(e) => handleButtonClick(e)}
                    value={"saw"}
                    className="word-vrom">Doggo</button>
            </div>
            {/*<div className="infinite">
                
                <div className="shadow"></div>
            </div>*/}
        </div>

    );
}

export default WordDrifting;