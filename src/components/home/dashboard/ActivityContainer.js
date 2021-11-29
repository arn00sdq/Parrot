import React from 'react';
import {right_arrow} from '../../../database/images';

function ActivityContainer(props){
    return (
        <div className="activity-container">
            <div className="circular-progress">
                <div className="inner-circle">
                        <div className="circular-value-container">100%</div>
                    </div>
            </div>
            <div className="main-text-card">Les temps du passé. Ex 4</div>
            <div className="text-resume">Reprendre</div>
            <img className="orange-arrow" src={right_arrow}/>
        </div>
    );
}

export default ActivityContainer;