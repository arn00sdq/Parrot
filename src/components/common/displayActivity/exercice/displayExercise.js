import React, { useState } from "react";
import { cross } from "../../../../database/images";

import Word2img from "./types/word2img";
import HeaderContent from "../common/headerContent";
import FooterContent from "../common/footerContent";

function typeExercise(exercise, currentStep, handles) {
  const row = [];
  switch (exercise.type) {
    case "Word2Img":
      return (
        <Word2img
          content={exercise.content}
          currentStep={currentStep}
          handles={handles}
        />
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

export default DisplayExercise;
