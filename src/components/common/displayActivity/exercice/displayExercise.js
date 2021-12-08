import React, { useState } from "react";
import { cross } from "../../../../database/images";

import Word2img from "./types/word2img";
import WordDrifting from "./types/wordDrifting"
import HeaderContent from "../common/headerContent";
import FooterContent from "../common/footerContent";

function DisplayExercise({ exercise, step, handles }) {
  return (
    <div className="card card-exercice">
      <div className="page-exercice-container">
        <HeaderContent
          title={exercise.title}
          steps={exercise.content.steps}
          currentStep={step}
        />

        <div className="wordImg-body">
          <div className="wordImg-order">{exercise.content.order}</div>
          {typeExercise(exercise, step, handles)}
        </div>
        <FooterContent />
      </div>
    </div>
  );
}

function typeExercise(exercise, currentStep, handles) {
  switch (exercise.type) {
    case "Word2Img":
      return (
        /*<Word2img
          content={exercise.content}
          currentStep={currentStep}
          handles={handles}
        />*/
        <WordDrifting />
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
}

export default DisplayExercise;
