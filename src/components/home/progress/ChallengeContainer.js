import React from 'react';
import {ready_icon} from '../../../database/images';

function ChallengeContainer(props){
    return (
        <div className="objectif-container">
            <div className="circular-progress">
                <div className="inner-circle">
                    <div className="circular-value-container">100%</div>
                </div>
            </div>
            <div className="progress-text-card">{props.ExText}</div>
            <button className="btn-paperCard challenge-btn" style={{background: "orange"}}>continuer</button>
        </div>
    );
}

export default ChallengeContainer;