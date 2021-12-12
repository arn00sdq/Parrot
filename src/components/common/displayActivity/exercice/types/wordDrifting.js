import React, { useState } from 'react';
import { achievement, GameImg, feather_icon } from "../../../../../database/images";

function WordDrifting({ content, currentStep, handles, gameInfo }) {

    const [isActive, setActive] = useState(false);
    const [isActiveButton, setActiveButton] = useState(false);
    var row = [];

    const handleButtonClick = (e) => {
        e.preventDefault();

        const {
            target: { value },
        } = e;

        if (content.theme[0].answer.includes(value)) {
            toggleClass();
            handles.handleAddPointExercisePage();
            renderButton();

        } else {

        }
    };

    const toggleClass = () => {
        setActive(!isActive);

        setTimeout(() => {
            setActive(false);

        }, 800)
    }

    const renderButton = () => {
        row.push(
            <button
                onClick={(e) => handleButtonClick(e)}
                value={"saw"}
                className={isActiveButton ? "active-container" : "word-vrom"}>Doggo
        </button>
        )
    }

    /* Donnée Joueur */

    var life = gameInfo.life;
    var points = gameInfo.points;

    /* Defintion vague */

    row.push(
        <button
            onClick={(e) => handleButtonClick(e)}
            value={"saw"}
            className={isActiveButton ? "active-container" : "word-vrom"}>Doggo
        </button>
    )

    return (
        <div className="drift-container">
            {/*<div className="title-drift">The word is : <span className="word-drift">Car</span></div>*/}
            <div className="life-container">
                <span className="life-number">{life}</span>
            </div>

            <div className="points-container">
                <img className="life-icon" src={feather_icon} />
                <span className={isActive ? "active-point-number points-number" : "points-number"}>{points}</span>
            </div>

            <div className="word-container">
                {row}
                <span className={isActive ? "active-points points-word" : "points-word"}>+1</span>
            </div>
            {/*<div className="infinite">
                
                <div className="shadow"></div>
            </div>*/}
        </div>

    );
}

export default WordDrifting;