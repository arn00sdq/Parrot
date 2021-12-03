import React from 'react';
import DailyContainer from './DailyContainer';
import { feather_icon, treasure } from '../../../database/images';

function DailyCard(props) {
    return (
        <div className="container-card">
            <div className="container-card-header">
                <div className="container-title-card">{props.titleCard}</div>
            </div>
            <div className="container-card-body">
                <DailyContainer imgReward={treasure} dailyText='Réalise deux exercices' />
                <DailyContainer imgReward={feather_icon} dailyText='Consulte un magazine sportif' />
            </div>
        </div>
    );
}

export default DailyCard;