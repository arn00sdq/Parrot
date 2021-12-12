import React from "react";
import { achievement,Word2Img } from "../../../../../database/images";

function Word2img({ content, currentStep, handles }) {
  const finished = currentStep < content.steps ? false : true;
  const handleButtonClick = (e) => {
    e.preventDefault();

    const {
      target: { value },
    } = e;
    if (value == content.images[currentStep].word) {
      handles.handleExerciseNextStep("exercicePage");
    }
  };
  let row = [];
  if (finished) {
    row.push("Congratulations! ");
  } else {
    content.words[currentStep].forEach((word) => {
      row.push(
        <button
          onClick={(e) => handleButtonClick(e)}
          value={word}
          className="button-exercise"
        >
          {word}
        </button>
      );
    });
  }
  return (
    <div className="wordImg-container">
      
      <div className="center">
        <div className="monitor">
          <img
          src={finished == false ? content.images[currentStep].url : achievement}
          className="wordImg-picture"
        />
          <img className="monitor-logo" src={Word2Img.apple}></img>
        </div>
        <div className="m-1"></div>
        <div className="m-2"></div>
      </div>
      
      <div className="btn-exercise-container">{row}</div>
    </div>
  );
}

export default Word2img;
