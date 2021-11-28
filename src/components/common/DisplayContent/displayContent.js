import DisplayExercice from './exercice/displayExercice'
import DisplayLecon from './lesson/displayLecon'
import DisplaySummarize from './summarize/displaySummarize'
import React from 'react';

function typeContent(title,exercice,lecon,id){
    const codeType = id.substr(0, 1);
    switch (codeType){ // compare l'id 
        case "0": 
            return (<DisplayExercice title={title} exercice={exercice} id={id}/>)
            break;
        case "1":
            return (<DisplayLecon title={title} lecon={lecon} id={id}/>)
            break;
        case "2":
            //display paper
            break;
    }
}
/*
-- id --

-> Header 1000
-> Exercice 2000
-> Summarize 3000 (3:Summarize:0Exercice:0Lecon:0Dico)
-> Lecon 4000

*/ 
function DisplayContent(props){ // affiche journaux, lecon , exercice
    console.log(props.id)
    return(
        <>
            <DisplaySummarize key={props.id} summarize={props.summarize} title={props.title}/>
            {typeContent(props.title,props.exercice,props.lecon,props.id)}     
        </>
        
    );
}

export default DisplayContent;