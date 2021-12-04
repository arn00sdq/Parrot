import DisplayExercice from "./exercice/displayExercise";
import DisplayLecon from "./lesson/displayLecon";
import DisplayPaper from "./lesson/displayLecon";
import DisplaySummary from "./summary/displaySummary";
import { data as exercisesData } from "../../../database/exercises";
//import { data_lesson as exercisesLecon } from "../../../database/lessons";
import React from "react";

const _ = require("lodash");

<<<<<<< HEAD


function DisplayActivity({ state, handles }) {
  var id = state.exercisePage.exerciseId;
  var step = state.exercisePage.step
  var exercises = exercisesData;
=======
const switchContent = (prefix, content) => {
  switch (prefix) {
    case "EX":
      return <DisplayExercice exercise={content} />;
    case "LE":
      return <DisplayLecon lesson={content} />;
    case "2":
      return <DisplayPaper paper={content} />;
      break;
  }
};

function DisplayActivity({ id }) {
  // affiche journaux, lesson , exercice
  var activity = exercisesData;
>>>>>>> d13519c0dcb7b725ceb0c7c76dd78f9a4223f4cb
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
  const currentActivity= activity.find((e) => {
    return e.id == id;
  });
  console.log(currentActivity)
  return (
    <>
<<<<<<< HEAD
      <DisplaySummary
        name={`${id} ${": "} ${currentExercise.type}`}
        summary={currentExercise.summary}
      />
      {switchActivity(prefixType, currentExercise, step)}
=======
      <DisplaySummary name={`${id} ${": "} ${currentActivity.type}`} summary={currentActivity.summary} />
      {switchContent(prefixType, currentActivity)}
>>>>>>> d13519c0dcb7b725ceb0c7c76dd78f9a4223f4cb
    </>
  );
}

export default DisplayActivity;
