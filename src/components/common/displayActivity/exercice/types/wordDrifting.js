import React, { useState } from "react";
import {
  achievement,
  GameImg,
  feather_icon,
} from "../../../../../database/images";

function WordDrifting({ content, handles }) {
  var possibleWords = [...content.correctWords, ...content.wrongWords];
  var [getActiveWords, setActiveWords] = useState([]);
  var [getLife, setLife] = useState(3);
  var [getPoints, setPoints] = useState(0);
  var [getId, setId] = useState(0);
  var row = [];

  const pointsOnSuccess = 50,
    pointsOnError = -5;

  class WordController {
    /* push(i){
      const index = this.length
      this.push(...arguments)
    } */
    activate(word) {
      console.log(`word`, word)
      word.active = true;
      return word;
    }
    /* Defintion vague */
    setActive(word) {
      console.log(`setactive word`, word)
      let wordTreated = getActiveWords.find((w) => {
        return w.text == word;
      });
      setActiveWords(
        getActiveWords.splice(
          getActiveWords.indexOf(wordTreated),
          1,
          this.activate(wordTreated)
        )
      );
      setTimeout(() => {
        this.removeWord(word);
      }, 1500);
    }

    removeWord(word) {
      setActiveWords(getActiveWords.filter((w) => w.text != word));
    }

    addWord() {
      setId(getId++);
      let randomWord =
        possibleWords[Math.floor(Math.random() * possibleWords.length)];
      while (getActiveWords.includes(randomWord)) {
        randomWord =
          possibleWords[Math.floor(Math.random() * possibleWords.length)];
      }
      let randomY = -Math.round(Math.random() * 250);
      setActiveWords([
        ...getActiveWords,
        {
          text: randomWord,
          y: randomY,
          active: false,
        },
      ]);
      console.log(`randomWord added to the list`, randomWord);
      setTimeout(() => {
        Controller.removeWord(randomWord);
        console.log(`randomWord deleted from the list`, randomWord);
      }, 8000);
    }
  }

  const Controller = new WordController();

  const handleButtonClick = (e) => {
    e.preventDefault();

    const {
      target: { value },
    } = e;

    if (content.correctWords.includes(value)) {
      Controller.setActive(value);
      setPoints(getPoints + pointsOnSuccess);
    } else {
      if (getPoints < pointsOnError) {
        setPoints(0);
      } else {
        setPoints(getPoints + pointsOnError);
      }
    }
  };

  const renderWords = () => {
    console.log(`renderWords`, getActiveWords)
    let row = [];
    getActiveWords.forEach((word) => {
      console.log(word.active? undefined : 'lol non active')
      row.push(
        <div className="word-container" id={word.text}>
          <button
            onClick={word.active? undefined : ((e) => handleButtonClick(e))}
            value={word.text}
            className={
              !word.active ? "word-vrom active" : "active-container"
            }
            style={{ transform: `translateY(${word.y}px)` }}
          >
            {word.text}
          </button>
          <span
            className={
              word.active ? "active-points points-word" : "points-word"
            }
          >
            +1
          </span>
        </div>
      );
    });
    return row;
  };

  setTimeout(() => {
    if (getActiveWords.length < 2) {
      Controller.addWord();
    }
  }, 8000);
  
  return (
    <>
      <div className="title-drift">
        The theme is : <span className="word-drift">{content.theme}</span>
      </div>
      <div className="drift-container">
        <div className="life-container">
          <span className="life-number">{getLife}</span>
        </div>

        <div className="points-container">
          <img className="life-icon" src={feather_icon} />
          <span
            className={
              true ? "active-point-number points-number" : "points-number"
            }
          >
            {getPoints}
          </span>
        </div>
        {renderWords()}
        {/*<div className="infinite">
                
                <div className="shadow"></div>
            </div>*/}
      </div>
    </>
  );
}

export default WordDrifting;
