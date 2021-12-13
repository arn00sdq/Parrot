import React, { useState } from "react";
import {
  achievement,
  GameImg,
  feather_icon,
} from "../../../../../database/images";

function WordDrifting({ content, handles }) {
  var possibleWords = [...content.correctWords, ...content.wrongWords];
  var [isActive, setActive] = useState(false);
  var [isActiveButton, setActiveButton] = useState(false);
  var [getActiveWords, setActiveWords] = useState([]);
  var [getLife, setLife] = useState(3);
  var [getPoints, setPoints] = useState(0);
  var [getId, setId] = useState(0);
  var row = [];

  const handleButtonClick = (e) => {
    e.preventDefault();

    const {
      target: { value },
    } = e;

    if (content.correctWords.includes(value)) {
      toggleClass();
      setPoints(getPoints+100);
    } else {
      if (getPoints < 50) {
        setPoints(0)
      } else {
        setPoints(getPoints-50)
      }
    }
  };

  const wordIsActive = (id => {
    return getActiveWords.filter(w => w.id === id).length === 1
  })

  const toggleClass = () => {
    setActive(!isActive);

    setTimeout(() => {
      setActive(false);
    }, 800);
  };

  const renderWords = () => {
    let row = [];
    getActiveWords.forEach((word) => {
      row.push(word.content);
    });
    return row;
  };
  /* Defintion vague */
  function addWord() {
    let randomWord =
      possibleWords[Math.floor(Math.random() * possibleWords.length)];
    let randomY = -Math.round(Math.random() * 250);
    setActiveWords([
      ...getActiveWords,
      {
        id: getId,
        content: (
          <div className="word-container" id={getId}>
            <button
              onClick={(e) => handleButtonClick(e)}
              value={randomWord}
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
        ),
      },
    ]);
    setId(getId++)
  }

  setTimeout(() => {
    addWord();
  }, 3000);

  return (
    <>
      <div className="title-drift">
        The theme is : <span className="word-drift">{content.theme}</span>
      </div>
      <div className="drift-container">
        <div className="life-container">
          <span className="life-number">{getLife}</span>
        </div>
        {renderWords()}
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
