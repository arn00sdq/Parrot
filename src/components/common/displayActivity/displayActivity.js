import DisplayExercice from "./exercice/displayExercise";
import DisplayLecon from "./lesson/displayLecon";
import DisplaySummary from "./summary/displaySummary";
import { data as exercisesData } from "../../../database/exercises";
import React from "react";

const _ = require("lodash");

const switchContent = (prefix, content) => {
  switch (prefix) {
    case "EX":
      return <DisplayExercice exercise={content} />;
    case "1":
      return <DisplayLecon lesson={content} />;
    case "2":
      //display paper
      break;
  }
};

function DisplayActivity({ id }) {
  // affiche journaux, lecon , exercice
  var exercises = exercisesData;
  var prefixType = id.substr(0, 2);
  /*exercises.forEach((element) => {
    Object.assign(element.id,_.uniqueId("EX"));
    console.log("Id assigned :" + element.id + "\n")
  });*/
  const currentExercise = exercises.find((e) => {
    return e.id == id;
  });
  return (
    <div className="activity-container">
      <DisplaySummary name={`${id} ${": "} ${currentExercise.type}`} summary={currentExercise.summary} />
      {switchContent(prefixType, currentExercise)}
    </div>
  );
}

export default DisplayActivity;
