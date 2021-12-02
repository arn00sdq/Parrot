import React from 'react';
import { useState } from 'react';

function Word2img({content,currentStep}){

    const [step, setStep] = useState(currentStep);

    const handleButtonClick = (e) => {
        e.preventDefault();

        const {
            target: {value},
        } = e;
        console.log(value)
        if (step < content.steps && value == content.images[step].word){
            setStep(step + 1)
        }
    }
    console.log(`content`, content)

    let row = []
    const wordArr = content.words;
    if (step < content.steps) {
        content.words[step].forEach(word => {
            row.push(<button onClick={(e)=> handleButtonClick(e)} value={word} className="button-exercise">{word}</button>)

        });
    }else{
        row.push("VICTOIRE")
    }
    
    
        return (
        <div className="picture-exercice-section">
            <img src={content.images[step].url} className="picture-exercice"/>
            <div className="btn-exercice-container">
                {row}
            </div>
           
        </div>
    );
}

export default Word2img;