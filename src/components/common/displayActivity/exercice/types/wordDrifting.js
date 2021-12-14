import React, { useState } from "react";
import {
  achievement,
  GameImg,
  feather_icon,
} from "../../../../../database/images";

class WordDriftingGame extends React.Component {
  pointsOnError = -5;
  pointsOnSuccess = 50;

  constructor(props) {
    super(props)
    this.content = props.content;
    this.possibleWords = [...this.content.correctWords, ...this.content.wrongWords];
    this.state = {
      playerLife: 3,
      playerPoints: 0,
      idCounter: 0,
      gameIsActive: true,
      words: [],
    }
    this.wordTimer(5);
    /* this.addWord() */
  }

  getId() {
    let temp = this.state.idCounter;
    this.setState({
      idCounter: parseInt(this.state.idCounter) + 1,
    });
    console.log(`id issued: `, temp)
    return temp;
  }

  handleSuccessClick(wordId) {
    this.beginWordFade(wordId, 1.5);
    this.setState({
      playerPoints: (this.state.playerPoints + this.pointsOnSuccess),
    });
  }

  handleErrorClick(wordId) {
    this.maskWordAfterXSecs(wordId, 0.5);
    this.setState({
      playerPoints:
        this.state.playerPoints < -this.pointsOnError
          ? 0
          : (this.state.playerPoints + this.pointsOnError),
      playerLife: this.state.playerLife == 0 ? 0 : this.state.playerLife - 1,
    });
  }

  wordTimer(timeSec) {
    setInterval(() => {
      this.addWord();
    }, timeSec * 1000);
  }

  maskWordAfterXSecs(wordId, seconds) {
    setTimeout(() => {
      let stateWords = this.state.words;
      stateWords[wordId].shown = false;
      this.setState({
        words: stateWords,
      });
    }, seconds * 1000);
  }

  beginWordFade(wordId, fadingDurationSecs) {
    let stateWords = this.state.words;
    stateWords[wordId].fading = true;
    this.setState({ 
      words: stateWords,
    });
    setTimeout(() => {
      this.maskWordAfterXSecs(wordId, 0);
    }, fadingDurationSecs * 1000);
  }

  getRandomWord() {
    return this.possibleWords[
      Math.floor(Math.random() * this.possibleWords.length)
    ];
  }

  addWord() {
    let wordId = this.getId(),
      randomWord;
    let randomY = -Math.round(Math.random() * 250);
    do randomWord = this.getRandomWord();
    while (this.state.words.includes(randomWord));
    let stateWords = this.state.words;
    stateWords.push({
      id: wordId,
      text: randomWord,
      y: randomY,
      fading: false,
      shown: true,
    });
    this.setState({ 
      words: stateWords,
    });
    this.maskWordAfterXSecs(wordId, 6);
  }
  renderWords() {
    let row = [];
    this.state.words
      .filter((word) => {
        return word.shown === true;
      })
      .forEach((word) => {
        row.push(
          <div
            className="word-container"
            id={word.text}
          >
            <button
              onClick={word.shown ? (e) => this.handleWordClick(e) : undefined}
              value={word.id}
              className={
                word.fading === false ? "word-vrom active" : "active-container"
              }
              style={{ transform: `translateY(${word.y}px)` }}
            >
              {word.text}
            </button>
            <span
            style= {{top: `${word.y}px`}}
              className={
                word.fading === true
                  ? "active-points points-word"
                  : "points-word"
              }
            >
              {`+${this.pointsOnSuccess}`}
            </span>
          </div>
        );
      });
    return row;
  }
  handleWordClick(e) {
    e.preventDefault();

    const {
      target: { value },
    } = e;

    if (this.content.correctWords.includes(this.state.words[value].text)) {
      this.handleSuccessClick(value);
    } else {
      this.handleErrorClick(value);
    }
  }
  render() {
    return (
      <>
        <div className="title-drift">
          The theme is :{" "}
          <span className="word-drift">{this.content.theme}</span>
        </div>
        <div className="drift-container">
          <div className="life-container">
            <span className="life-number">{this.state.playerLife}</span>
          </div>

          <div className="points-container">
            <img className="life-icon" src={feather_icon} />
            <span
              className={
                this.state.gameIsActive
                  ? "active-point-number points-number"
                  : "points-number"
              }
            >
              {this.state.playerPoints}
            </span>
          </div>
          {this.renderWords()}
        </div>
      </>
    );
  }
}

export default WordDriftingGame;