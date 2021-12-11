import React, { useState } from "react";
import { cross } from "../../../../database/images";

import Word2img from "./types/word2img";
import WordDrifting from "./types/wordDrifting"
import HeaderContent from "../common/headerContent";
import FooterContent from "../common/footerContent";

function DisplayExercise({ exercise, step, handles }) {
  const order = exercise.content.order;
  return (
    <div className="card card-exercice">
      <div className="page-exercice-container">
        <HeaderContent
          title={exercise.title}
          steps={exercise.content.steps}
          currentStep={step}
        />
        {typeExercise(exercise, step, handles)}
        <FooterContent />
      </div>
    </div>
  );
}

function typeExercise(exercise, currentStep, handles, order) {
  switch (exercise.type) {
    case "Word2Img":
      return (
        <div className="wordImg-body">
          <div className="wordImg-order">{exercise.content.order}</div>
          <Word2img
            content={exercise.content}
            currentStep={currentStep}
            handles={handles}
          />
        </div>


      );
      // <PictBtn />
      break;
    case "DriftWord":
      return (
        <div className="drift-body">
          <div className="wordImg-order">{order}</div>
          <WordDrifting 
            content={exercise.content}
            currentStep={currentStep}
            handles={handles}
          />
        </div>
      )
      break;
    case "0003":
      //display ex3
      break;
  }
}

export default DisplayExercise;
