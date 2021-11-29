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
                <img className="yellow-button" src={ready_icon}/>
        </div>
    );
}

export default ChallengeContainer;