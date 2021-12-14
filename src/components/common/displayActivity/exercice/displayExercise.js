import React, { useState } from "react";
import { cross } from "../../../../database/images";

import Word2img from "./types/word2img";
import WordDriftingGame from "./types/wordDrifting"
import HeaderContent from "../common/headerContent";
import FooterContent from "../common/footerContent";

function DisplayExercise({ exercise, step, handles, isFinished,from }) {
  const order = exercise.content.order;
  return (
    <div className="card-exercice">
      <div className="page-exercice-container">
        <HeaderContent
          title={exercise.title}
          steps={exercise.content.steps}
          currentStep={step}
        />
        {typeExercise(exercise, step, handles, order,isFinished,from)}
        {/* <FooterContent /> */}
      </div>
    </div>
  );
}

function typeExercise(exercise, currentStep, handles, order, isFinished,from) {
  switch (exercise.type) {
    case "Word2Img":
      return (
        <div className="wordImg-body">
          <div className="wordImg-order">{exercise.content.order}</div>
          <Word2img
            reward = {exercise.summary.rewards}
            content={exercise.content} 
            currentStep={currentStep}
            steps={exercise.content.steps}
            handles={handles}
            isFinished = {isFinished}
            from = {from}
            
          />
        </div>
      );
      // <PictBtn />
      break;
    case "DriftWord":
        return (
        <div className="drift-body">
          <div className="wordImg-order">{order}</div>
          <WordDriftingGame 
            content={exercise.content}
            /* currentStep={currentStep} */
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
