import React, { Component } from 'react';
import Home from './home/home'
import SkillPage from './skillPage/skillPage'


const App = (props) => {
    
    const model = {
        ui: {},
    } 
    Object.assign(model,props.configs)
    console.log(Object.values(props.configs));
    const representation = model.ui.sectionId;
    if( representation == 'home'){ // switch a venir
        return <SkillPage/>;
    }
}

export default App;