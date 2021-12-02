import React from 'react';
import { useState } from 'react';

function Word2img(props){

    const [step, setStep] = useState(props.step);

    const handleButtonChange = (e) => {
        e.preventDefault();

        const {
            target: {value},
        } = e;
        console.log(value)
        if (value == "Door" || value =="Dog" || value=="House"|| value=="Treasure" || value=="Cricket"){
            setStep(step + 1)
        }
        
        console.log(step)
    }
    console.log(`props`, props)
    console.log(`props.content`, props.content)

    let row = []
    const wordArr = props.content.words;
    const length = wordArr.length
    if(step < length) {
        for(let i = 0; i< wordArr[step].length; i++){
            row.push(<button onClick={(e)=> handleButtonChange(e)} value={wordArr[step][i]} className="button-exercise">{wordArr[step][i]}</button>)
        }
    }else{
        row.push("VICTOIRE")
    }
    
        return (
        <div className="picture-exercice-section">
            <img src={props.content.images[props.step].url} className="picture-exercice"/>
            <div className="btn-exercice-container">
                {row}
            </div>
           
        </div>
    );
}

export default Word2img;