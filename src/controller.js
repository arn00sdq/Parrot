import App from "./app";
import React, { useState, useReducer } from 'react';
import {data as model} from "./model"
import {reducer} from "./reducer"
import * as actions from "./actions"

const Controller= () => {
  const [state, dispatch] = useReducer(reducer, model)

  function handleExerciseNextStep(){
    dispatch(actions.incrementExercisePageStep())
  }

  function handleExerciseStart(id){
    dispatch(actions.exerciceStart(id))
  }

  function handleThemeFilterChange(themeName, from){
    dispatch(actions.themeFilterChange(themeName, from))
  }

  function handleTenseFilterChange(tenseName, from){
    dispatch(actions.themeFilterChange(tenseName, from))
  }

  function handleLevelFilterChange(levelName, from){
    dispatch(actions.levelFilterChange(levelName, from))
  }

  function handleAddPointExercisePage(){
    dispatch(actions.addPointsExercicePage())
  }
  const handles = {
    handleExerciseNextStep,handleExerciseStart, handleThemeFilterChange, 
    handleTenseFilterChange, handleLevelFilterChange,handleAddPointExercisePage
  }
  
  return (
    <App
      state={state} handles = {handles}
    />
  );
};

export default Controller;