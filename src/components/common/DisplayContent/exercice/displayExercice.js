import PictBtn from './type/pictBtn';
import React from 'react';

import {cross} from '../../../../assets/img/index'

function typeExercice(exercice,id) {
    const row = [];
    console.log(id)
    switch (id) {
        case "0001":
            row.push(<PictBtn key={exercice.instruction[0]} exProps={exercice.Instrument.pictProps} instruction={exercice.instruction[0]} />); // <PictBtn />
            row.push(<PictBtn key={exercice.instruction[1]} exProps={exercice.Instrument.btnSyno} instruction={exercice.instruction[1]} />); //<PictBtn />
            break;
        case "0002":
            //display ex2
            break;
        case "0003":
            //display ex3
            break;
    }
    console.log(row)
    return row;
}

function displayExercice(props) {
    console.log("DisplayContent - displayExercice : pict_but_excercice",props)
    return (
        <div className="page-exercice-card card">
            <div className="page-exercice-container">
                <div className="header-exercice">
                    <div className="title-exercice">Musical Instrument</div>
                    <div className="progress-exercice-bar">
                        <img src={cross} className="cross"></img>
                        <div className="large-bar">
                            <div className="orange-bar"></div>
                        </div>
                    </div>
                </div>
                {typeExercice(props.exercice,props.id)}
                <div className="hr-horizontale-exercice"></div>
                <div className="footer-exercice-container">
                    <a href="#" className="button button-previous">Previous</a>
                    <a href="#" className="button button-continue">Continuer</a>
                </div>
            </div>
        </div>
    );
}

export default displayExercice;