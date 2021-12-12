import React, { useState } from "react";
import {
  achievement,
  GameImg,
  feather_icon,
} from "../../../../../database/images";

function WordDrifting({ content, handles }) {
  const [isActive, setActive] = useState(false);
  const [isActiveButton, setActiveButton] = useState(false);
  const [getActiveWords, setActiveWords] = useState([]);
  const [getLife, setLife] = useState(3);
  const [getPoints, setPoints] = useState(0);
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
    }, 800);
  };

  const renderButton = () => {
    row.push(
      <button
        onClick={(e) => handleButtonClick(e)}
        value={"saw"}
        className={isActiveButton ? "active-container" : "word-vrom"}
      >
        Doggo
      </button>
    );
  };

  /* Defintion vague */
  function addWord(possibleWords) {
    let randomWord =
      possibleWords[Math.floor(Math.random() * possibleWords.length)];
    let randomY = -Math.round(Math.random()*250);
    return (
      <div className="word-container">
        <button
          onClick={(e) => handleButtonClick(e)}
          value={"saw"}
          className={isActiveButton ? "active-container" : "word-vrom"}
          style={{ transform: `translateY(${randomY}px)` }}
        >
          {randomWord}
        </button>
        <span
          className={isActive ? "active-points points-word" : "points-word"}
        >
          +1
        </span>
      </div>
    );
  }

  return (
    <>
      <div className="title-drift">
        The theme is : <span className="word-drift">{content.theme}</span>
      </div>
      <div className="drift-container">
        <div className="life-container">
          <span className="life-number">{getLife}</span>
        </div>
        {addWord([...content.correctWords, ...content.wrongWords])}
        <div className="points-container">
          <img className="life-icon" src={feather_icon} />
          <span
            className={
              isActive ? "active-point-number points-number" : "points-number"
            }
          >
            {getPoints}
          </span>
        </div>

        {/*<div className="infinite">
                
                <div className="shadow"></div>
            </div>*/}
      </div>
    </>
  );
}

export default WordDrifting;
