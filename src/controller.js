import App from "./app";
import React, { useState, useReducer } from "react";
import { data as model } from "./model";
import { reducer } from "./reducer";
import * as actions from "./actions";

const Controller = () => {
  const [state, dispatch] = useReducer(reducer, model);

  function handleNextStep(from, percentProgress) {
    dispatch(actions.incrementPageStep(from));
    dispatch(actions.saveActivityProgress(from, percentProgress))
  }

  function handlePreviousStep(from, percentProgress){
    dispatch(actions.decrementPageStep(from))
    dispatch(actions.saveActivityProgress(from, percentProgress))
  }

  function handleExerciseStart(id) {
    dispatch(actions.exerciceStart(id));
  }

  function handlePaperStart(id) {
    dispatch(actions.articleStart(id));
  }

  function handleLessonStart(id) {
    dispatch(actions.lessonStart(id))
  }

  function handleEndActivity(isFinish,id,from) {
    dispatch(actions.activityEnd(isFinish,id,from));
  }

  function handleThemeFilterChange(themeName, from) {
    dispatch(actions.themeFilterChange(themeName, from));
  }

  function handleTenseFilterChange(tenseName, from) {
    dispatch(actions.themeFilterChange(tenseName, from));
  }

  function handleLevelFilterChange(levelName, from) {
    dispatch(actions.levelFilterChange(levelName, from));
  }
  function handleInputSearchFilterChange(newInputChange, from) {
    dispatch(actions.inputSearchFilterChange(newInputChange, from));
  }
  function handleAddPointExercisePage(){
    dispatch(actions.addPointsExercicePage())
  }
  const handles = {
    handleExerciseStart,
    handleThemeFilterChange,
    handleTenseFilterChange,
    handleLevelFilterChange,
    handleInputSearchFilterChange,
    handleAddPointExercisePage,
    handleNextStep,
    handlePreviousStep,
    handlePaperStart,
    handleLessonStart,
    handleEndActivity,
    /* handlesIncrementProgression, */
  };
  

  return (
    <App
      state={state} handles = {handles}
    />
  );
};

export default Controller;
