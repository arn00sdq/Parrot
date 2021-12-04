import App from "./app";
import React, { useState, useReducer } from 'react';
import {data as model} from "./model"
import {reducer} from "./reducer"
import * as actions from "./actions"

const Controller= () => {
  const [state, dispatch] = useReducer(reducer, model)

  function handleExerciseNextStep(){
    dispatch(actions.incrementExercicePageStep())
  }
  const handles = {
    handleExerciseNextStep,
  }
  return (
    
    <App
      state={state} handles = {handles}
    />
  );
};

export default Controller;