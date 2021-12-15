import React, { useState } from "react";
import {
  achievement,
  GameImg,
  feather_icon,
} from "../../../../../database/images";
import ActivityCompleted from "../../ActivityCompleted";
class WordDriftingGame extends React.Component {
  pointsOnError = -5;
  pointsOnSuccess = 50;
  
  constructor(props) {
    console.log("IS FINISHED : ", props.isFinished);
    super(props)
    this.content = props.content;
    this.handles = props.handles;
    this.reward = props.reward;
    
    this.possibleWords = [...this.content.correctWords, ...this.content.wrongWords];
    this.state = {
      playerLife: 3,
      playerPoints: 0,
      idCounter: 0,
      begin:false,
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
    this.beginWordFade(wordId, 0.5);
    
    this.setState({
      playerPoints: (this.state.playerPoints + this.pointsOnSuccess),
      gameIsActive: this.state.playerPoints >= 50 ? false : true,
    });
    if (this.state.playerPoints >= 50) {
      this.handles.handleEndActivity(true, "", "exercisePage");
    }
  }

  handleErrorClick(wordId) {
    let stateWords = this.state.words;
    stateWords[wordId].false = true;
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
    let randomY = Math.floor(Math.random() * -80) - 90
    do randomWord = this.getRandomWord();
    while (this.state.words.includes(randomWord));
    let stateWords = this.state.words;
    stateWords.push({
      id: wordId,
      text: randomWord,
      y: randomY,
      fading: false,
      false: false,
      shown: true,
    });
    this.setState({
      words: stateWords,
    });
    this.maskWordAfterXSecs(wordId, 8);
  }
  renderWords() {
    if (this.state.begin == true && this.state.gameIsActive == true) {
      let row = [];
      this.state.words
        .filter((word) => {
          return word.shown === true;
        })
        .forEach((word) => {
          let wordFading = word.fading === false ? " " : " correctWord"
          let wordShown = word.false === true ? " wrongWord" : ""
          row.push(
            <div
              className="word-container"
              id={word.text}
            >
              <button
                onClick={word.shown ? (e) => this.handleWordClick(e) : undefined}
                value={word.id}
                className={`word-vrom active ${wordFading} ${wordShown}`}
                style={{ top: `${word.y}px` }}
              >
                {word.text}
              </button>
            </div>
          );
        });
      return row;
    }

  }

  startScreen()
  {
    if(this.state.begin == false){
      let row = []
      row.push(
        <button onClick={() => this.handleStartClick() } className="start-game-section">
            <div className="start-game-text">CLIQUER POUR COMMENCER</div>
        </button>
      )
      
      return row;
    }
   
  }

  handleStartClick(){
      this.state.begin = true;
      this.renderWords()
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

    let startAnim = this.state.begin == true && this.state.gameIsActive == true ? "animateRoad 90s linear infinite" : "none"
    let screenFade = this.state.gameIsActive == false ? "0.5": "0.9"

    /*ActiveContainer*/ 

    let active = this.state.gameIsActive == false ? "active" : "";
    let from = "exercisePage";
    /*---------------*/ 
    return (
      <>
        <div className="title-drift">
          The theme is :{" "}
          <span className="word-drift">{this.content.theme}</span>
        </div>
        <div className="center">
          <div className="monitor monitor-drift">
          {this.startScreen()}
            <div className="drift-container" style={{animation : startAnim, opacity: screenFade}}>
              
              <div className="life-container">
                <span className="life-number">{this.state.playerLife}</span>
                <span
                  className={
                    this.state.words.fading === true
                      ? "points-word active"
                      : "points-word"
                  }
                >
                  {`+${this.pointsOnSuccess}`}
                </span>
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
                  <span
                    className={
                      this.state.words.fading === true
                        ? "points-word active"
                        : "points-word"
                    }
                  >
                    {`+${this.pointsOnSuccess}`}
                  </span>
                  {this.state.playerPoints}
                </span>
              </div>
              {this.renderWords()}
            </div>
            <img className="monitor-logo" src=""></img>
          </div>
          <div className="m-1"></div>
          <div className="m-2"></div>

        </div>
        <ActivityCompleted title={this.title} reward={this.reward} active={false} isFinished={this.props.isFinished} handles={this.handles} from={from} />
      </>
    );
  }
}

export default WordDriftingGame;