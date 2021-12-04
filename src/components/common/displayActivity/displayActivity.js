import DisplayExercice from "./exercice/displayExercise";
import DisplayLecon from "./lesson/displayLecon";
import DisplayPaper from "./lesson/displayLecon";
import DisplaySummary from "./summary/displaySummary";
import { data as exercisesData } from "../../../database/exercises";
import { data as lessonsData } from "../../../database/lessons";
//import { data_lesson as exercisesLecon } from "../../../database/lessons";
import React from "react";

const _ = require("lodash");


  // affiche journaux, lesson , exercice

function DisplayActivity({type, state, handles }) {
  
  var exercises = exercisesData;
  var lessons = lessonsData
  
  
  const switchActivity = (prefix, activity, step) => {
    switch (prefix) {
      case "EX":
        return <DisplayExercice exercise={activity}
         step = {step}
         handles = {handles} />;
      case "1":
        return <DisplayLecon lesson={activity}
        step = {step}
        handles = {handles} />;
      case "2":
        return <DisplayPaper paper={activity} />;
        break;
    }
  };
 
  /*exercises.forEach((element) => {
    Object.assign(element.id,_.uniqueId("EX"));
    console.log("Id assigned :" + element.id + "\n")
  });*/
  switch (prefixType) {
    case "EX":
    var id = state.exercisePage.exerciseId;
    var prefixType = id.substr(0, 2);
    var step = state.exercisePage.step
    var currentActivity= exercises.find((e) => {
      return e.id == id;
    });
    case "LE":
    var id = state.lessonPage.exerciseId;
    var step = state.lessonPage.step
    var currentActivity= lessons.find((e) => {
      return e.id == id;
    });
  
    default:
      break;
  }
  
  console.log(currentActivity)
  return (
    <>
      <DisplaySummary
        name={`${id} ${": "} ${currentActivity.type}`}
        summary={currentActivity.summary}
      />
      {switchActivity(prefixType, currentActivity, step)}
    </>
  );
}

export default DisplayActivity;
