import DisplayExercice from './exercice/displayExercice'
import DisplaySummarize from './summarize/displaySummarize'
import React from 'react';

function typeContent(type,id){
    const codeType = id.substr(0, 1);
    console.log(id)
    switch (codeType){ // compare l'id 
        case "0": 
            return (<DisplayExercice exercice={type} id={id}/>)
            break;
        case "1":
            //display lecon
            break;
        case "2":
            //display paper
            break;
    }
}

function DisplayContent(props){ // affiche journaux, lecon , exercice
    console.log(props.exercice)
    return(
        <>
            <DisplaySummarize summarize={props.summarize} title={props.title}/>
            {typeContent(props.exercice,props.id)}     
        </>
        
    );
}

export default DisplayContent;