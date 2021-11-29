import React from 'react';
import DailyContainer from './DailyContainer';
import {feather_icon, treasure}from '../../../database/images';

function DailyCard(props){
    return(
        <div className="progress-card">
            <div className="progress-title-card">{props.titleCard}</div>
            <DailyContainer imgReward={treasure} dailyText='Réalise deux exercices'/>
            <DailyContainer imgReward={feather_icon} dailyText='Consulte un magazine sportif'/>
        </div>
    );
}

export default DailyCard;