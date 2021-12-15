import React, { useState } from "react";
import { achievement, Word2Img } from "../../../../../database/images";
import ActivityCompleted from "../../ActivityCompleted";

function Word2img({ reward, content, currentStep, handles, isFinished, from }) {

  const finished = currentStep < content.steps ? false : true;
  var active = currentStep == content.steps - 1 ? "active" : "";
  var correctWord = "";
  var wrongWord = "";
  var [getIndex, setIndex] = useState();
  var [getWrong, setWrongIndex] = useState()

  const wordImg = [];
  let row = [];

  const handleButtonClick = (e) => {

    e.preventDefault();
    const {
      target: { value },
    } = e;

    if (active == "active") {
      handles.handleEndActivity(true, "", from);
    }
    if (value == content.images[currentStep].word && finished == false) {
      setIndex(wordImg.findIndex(word => word == value))
      setTimeout(() => {
        handles.handleExerciseNextStep("exercicePage");
        setIndex(-1);
      }, 500);
    }else if (value != content.images[currentStep].word){
      setWrongIndex(wordImg.findIndex(word => word == value))
      setTimeout(() => {
        setWrongIndex(-1);
      }, 500);
    }
  };
  
  if (finished == false) {
    content.words[currentStep].forEach((word, i) => {

      wordImg.push(word)
      const wrongWord = i == getWrong ? "button-exercise wrongWord" : "button-exercise";
      const correctWord = i== getIndex? "button-exercise correctWord" : "button-exercise";

      row.push(
        <div className="w2i-btn-container">
          <button
            onClick={(e) => handleButtonClick(e)}
            value={word}
            className={`${wrongWord} ${correctWord}`} >
            {word}
          </button>

          <span className={i == getIndex ? "active-points points-word" : " points-word"}> +1 </span>
        </div>

      );
    });
  }
  return (
    <>
      <div className="wordImg-container">

        <div className="center">
          <div className="monitor">
            <img
              src={finished == false ? content.images[currentStep].url : Word2Img.badge_photo}
              className="wordImg-picture"
            />
            <img className="monitor-logo" src={Word2Img.apple}></img>
          </div>
          <div className="m-1"></div>
          <div className="m-2"></div>
        </div>

        <div className="btn-exercise-container">{row}</div>
      </div>
      <ActivityCompleted reward={reward} active={active} isFinished={isFinished} handles={handles} from={from} />
    </>
  );
}

export default Word2img;
