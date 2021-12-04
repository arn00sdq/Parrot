import App from "./app";
import React, { useState, useReducer } from 'react';
import {data as model} from "./model"
import {reducer} from "./reducer"
import * as actions from "./actions"

const Controller= () => {
  const [state, dispatch] = useReducer(reducer, model)
  const [change,setChange] = useState("");

  function handleExerciseNextStep(){
    dispatch(actions.incrementExercicePageStep())
  }

  function handleExerciseRedirection(value){
    dispatch(actions.exerciseRedirection(value))
  }

  const handles = {
    handleExerciseNextStep,handleExerciseRedirection
  }
  console.log("state :" ,state)
  return (
    <App
      state={state} handles = {handles}
    />
  );
};

export default Controller;