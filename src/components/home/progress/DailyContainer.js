import React from 'react';
import Reward from '../../common/reward/Reward';
import ProgressBar from '../../common/tool/ProgressBar'
import {feather_icon,treasure } from '../../../database/images';

function DailyContainer({progressEx, imgReward, dailyText}){
    console.log(progressEx.count)
    var barProgress = (progressEx.count / progressEx.total) * 100 
    var missionCompleted = progressEx.count == progressEx.total;
    return (
        <div className="objectif-container">
            <Reward className="reward" type="treasure"/>
            <div className="progress-text-card">{dailyText}</div>
            {missionCompleted == false 
            ?   
            <div className="container-bar-xp">
                <div className="small-text-xp">{progressEx.count} / {progressEx.total}</div>
                <ProgressBar width="5vw" progress={barProgress+"%"} />
            </div> 
            : <div className="daily-text-finish"> Terminer </div>
            }           
        </div>
    );
}

export default DailyContainer;