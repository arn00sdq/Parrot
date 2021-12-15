import React from 'react';
import { Link } from 'react-router-dom';
import {ready_icon} from '../../../database/images';

function DailyChallengeContainer({exercise, completionPercent, handles}){
    const completed = completionPercent === 100
    const text = `${exercise.id}: ${exercise.title}`
    const handleBtnClick = e => {
        const {target : {
            value
        }} = e
        handles.handleExerciseStart(value)
        
    }
    return (
        <div className="objectif-container">
            {completed ? "" : 
            <div className="circular-progress">
                <div className="inner-circle">
                    <div className="circular-value-container">{`${completionPercent}%`}</div>
                </div>
            </div> }
            <div className="progress-text-card">{text}</div>
            {
                completed ? <button className="btn-finish-activity  active"> Claim </button>
                :<Link to='/exercisePage'><button onClick={e => {handleBtnClick(e)}} value = {exercise.id} className="btn-paperCard challenge-btn">GO</button></Link> 
            }
            
        </div>
    );
}

export default DailyChallengeContainer;