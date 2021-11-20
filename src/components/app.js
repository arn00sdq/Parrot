import React, { Component } from 'react';
import Home from './home/home'
import SkillPage from './exercice/skillPage/skillPage'
import ExercicePicker from './exercice/exercicePicker/exercicePicker'
import ExercicePage from './exercice/exercicePage/exercicePage'
import LessonPicker from './exercice/exercicePicker/exercicePicker'

import {g1,g2,g3,g4,g5} from '../assets/css/global/index'
import { home_ex } from '../assets/img';


const App = (props) => {
    
    const model = {
        ui: {},
    } 
    Object.assign(model,props.configs)
    console.log(Object.values(props.configs));
    const representation = model.sectionId;
    if( representation == 'home'){ // switch a venir
        return <LessonPicker/>;
    }
}

export default App;