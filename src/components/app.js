import React, { Component } from 'react';
import Home from './home'


const App = (props) => {
    
    const model = {
        ui: {},
    } 
    Object.assign(model,props.configs)
    console.log(Object.values(props.configs));
    const representation = model.ui.sectionId;
    if( representation == 'home'){ // switch a venir
        return <Home/>;
    }
}

export default App;