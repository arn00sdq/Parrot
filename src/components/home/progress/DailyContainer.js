import React from 'react';
import Reward from '../../common/reward/Reward';
import ProgressBar from '../../common/tool/ProgressBar'
import {feather_icon,treasure } from '../../../database/images';

function DailyContainer(props){
    return (
        <div className="objectif-container">
            <Reward imgReward="reward" classReward={treasure}/>
            <div className="progress-text-card">{props.dailyText}</div>
            <div className="container-bar-xp">
                <div className="small-text-xp">5/10 xp</div>
                <ProgressBar width="5vw" progress="70%" />
            </div>   
        </div>
    );
}

export default DailyContainer;