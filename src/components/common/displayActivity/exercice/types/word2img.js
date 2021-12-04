import React from 'react';
import { achievement } from '../../../../../database/images';

function Word2img({ content, currentStep, handles }) {
    const finished = currentStep < content.steps ? false : true
    const handleButtonClick = (e) => {
        e.preventDefault();

        const {
            target: { value },
        } = e;
        if (value == content.images[currentStep].word) {
            handles.handleExerciseNextStep()
        }
    }
    let row = []
    if (finished) {
        row.push("Congratulations! ")
    } else {
        content.words[currentStep].forEach(word => {
            row.push(<button onClick={(e) => handleButtonClick(e)} value={word} className="button-exercise">{word}</button>)

        });
    }
    return (
        <div className="picture-exercise-section">
            <img src={finished == false ? content.images[currentStep].url : achievement} className="picture-exercise" />
            <div className="btn-exercise-container">
                {row}
            </div>

        </div>
    );
}

export default Word2img;