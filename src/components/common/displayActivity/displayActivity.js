import DisplayExercice from "./exercice/displayExercise";
import DisplayLecon from "./lesson/displayLecon";
import DisplayPaper from "./lesson/displayLecon";
import DisplaySummary from "./summary/displaySummary";
import { data as exercisesData } from "../../../database/exercises";
import React from "react";

const _ = require("lodash");



function DisplayActivity({ state, handles }) {
  var id = state.exercisePage.exerciseId;
  var step = state.exercisePage.step
  var exercises = exercisesData;
  var prefixType = id.substr(0, 2);

  const switchActivity = (prefix, activity, step) => {
    switch (prefix) {
      case "EX":
        return <DisplayExercice exercise={activity}
         step = {step}
         handles = {handles.handleExerciseNextStep} />;
      case "1":
        return <DisplayLecon lesson={activity} />;
      case "2":
        return <DisplayPaper paper={activity} />;
        break;
    }
  };
  // affiche journaux, lesson , exercice
 
  /*exercises.forEach((element) => {
    Object.assign(element.id,_.uniqueId("EX"));
    console.log("Id assigned :" + element.id + "\n")
  });*/
  const currentExercise = exercises.find((e) => {
    return e.id == id;
  });
  return (
    <>
      <DisplaySummary
        name={`${id} ${": "} ${currentExercise.type}`}
        summary={currentExercise.summary}
      />
      {switchActivity(prefixType, currentExercise, step)}
    </>
  );
}

export default DisplayActivity;
