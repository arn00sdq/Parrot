import DisplayContent from "./displayContent";
import React from "react";

import { cross } from "../../../../database/images";

import Word2img from "./types/word2img";


function typeExercice(exercise,currentStep) {
  const row = [];
  switch (exercise.type) {
    case "Word2Img":
      console.log(exercise.type == "Word2Img")
      return (
        <Word2img content={exercise.content} step={currentStep} />
      );
      // <PictBtn />
      break;
    case "Img2Word":
      //display ex2
      break;
    case "0003":
      //display ex3
      break;
  }
  return row;
}

function DisplayExercise({ exercise }) {
  console.log(`displayExercise`, exercise)

  let currentStep = 0
  console.log(exercise.content.step)
  return (
    <div className="page-exercice-card card">
      <div className="page-exercice-container">
        <div className="header-exercice">
          <div className="title-exercice">{exercise.title}</div>
          <div className="progress-exercice-bar">
            <img src={cross} className="cross"></img>
            <p>{(currentStep / exercise.steps) * 100 + "%"}</p>
            <div className="large-bar">
              <div className="orange-bar"></div>
            </div>
          </div>
          <div className="instruction-exercice">{exercise.content.order}</div>
        </div>
        {typeExercice(exercise,currentStep)}
        <div className="hr-horizontale-exercice"></div>
        <div className="footer-exercice-container">
          <a href="#" className="button button-previous">
            Previous
          </a>
          <a href="#" className="button button-continue">
            Continuer
          </a>
        </div>
      </div>
    </div>
  );
}

export default DisplayExercise;
