import DisplayContent from "./displayContent";
import React from "react";

import { cross } from "../../../../database/images";

import Word2img from "./types/word2img";
import HeaderContent from "../common/headerContent";
import FooterContent from "../common/footerContent";


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
  console.log(exercise)
  return (
    <div className="page-exercice-card card">
      <div className="page-exercice-container">
        <HeaderContent title = {exercise.title} steps = {exercise.content.steps} currentStep = {currentStep}/>
          
        <div className="content-exercice-section">
          <div className="instruction-exercice">{exercise.content.order}</div>
            {typeExercice(exercise,currentStep)}                        
          </div>
        <FooterContent/>
      </div>
    </div>
  );
}

export default DisplayExercise;
