import React from 'react';
import DailyContainer from './DailyContainer';
import { feather_icon, treasure } from '../../../database/images';

function DailyCard({state, handles , titleCard}) {
    console.log(state.home.dailyObjectives.exercises)
    return (
        <div className="container-card">
            <div className="container-card-header">
                <div className="container-title-card">{titleCard}</div>
            </div>
            <div className="container-card-body">
                <DailyContainer progressEx={state.home.dailyObjectives.exercises} imgReward={treasure} dailyText='Réalise deux exercices' />
                <DailyContainer progressEx={state.home.dailyObjectives.lessons} imgReward={feather_icon} dailyText='Consulte une lesson' />
            </div>
        </div>
    );
}

export default DailyCard;