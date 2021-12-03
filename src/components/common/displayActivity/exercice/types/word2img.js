import React from 'react';
import { achievement } from '../../../../../database/images';
import { useState } from 'react';

function Word2img({ content, currentStep }) {

    const [step, setStep] = useState(currentStep);
    const finished = step < content.steps ? false : true
    const handleButtonClick = (e) => {
        e.preventDefault();

        const {
            target: { value },
        } = e;
        console.log(value)
        if (value == content.images[step].word) {
            setStep(step + 1)
        }
    }
    let row = []
    if (finished) {
        row.push("Congratulations! ")
    } else {
        content.words[step].forEach(word => {
            row.push(<button onClick={(e) => handleButtonClick(e)} value={word} className="button-exercise">{word}</button>)

        });
    }
    return (
        <div className="picture-exercise-section">
            <img src={finished == false ? content.images[step].url : achievement} className="picture-exercise" />
            <div className="btn-exercise-container">
                {row}
            </div>

        </div>
    );
}

export default Word2img;