import App from "./app";
import React, { useState, useReducer } from "react";
import { data as model } from "./model";
import { reducer } from "./reducer";
import * as actions from "./actions";

const Controller = () => {
  const [state, dispatch] = useReducer(reducer, model);

  function handleExerciseNextStep(from) {
    dispatch(actions.incrementExercisePageStep(from));
  }

  function handleLessonNextStep(from) {
    
    dispatch(actions.incrementLessonPageStep(from));
  }

  function handleLessonPreviousStep(from){
    dispatch(actions.decrementLessonPageStep(from))
  }

  function handleExerciseStart(id) {
    dispatch(actions.exerciceStart(id));
  }

  function handlePaperStart(id) {
    dispatch(actions.articleStart(id));
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
    handleExerciseNextStep,
    handleExerciseStart,
    handleThemeFilterChange,
    handleTenseFilterChange,
    handleLevelFilterChange,
    handleInputSearchFilterChange,
    handleAddPointExercisePage,
    handleLessonNextStep,
    handleLessonPreviousStep,
    handlePaperStart
  };
  

  return (
    <App
      state={state} handles = {handles}
    />
  );
};

export default Controller;
