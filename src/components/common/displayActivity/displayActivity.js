import DisplayExercice from "./exercice/displayExercise";
import DisplayLecon from "./lesson/displayLecon";
import DisplayPaper from "./lesson/displayLecon";
import DisplaySummary from "./summary/displaySummary";
import { data as exercisesData } from "../../../database/exercises";
//import { data_lesson as exercisesLecon } from "../../../database/lessons";
import React from "react";

const _ = require("lodash");

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
  var prefixType = id.substr(0, 2);
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
      <DisplaySummary name={`${id} ${": "} ${currentActivity.type}`} summary={currentActivity.summary} />
      {switchContent(prefixType, currentActivity)}
    </>
  );
}

export default DisplayActivity;
