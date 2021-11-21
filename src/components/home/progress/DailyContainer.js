<<<<<<< HEAD
import React from 'react';
import Reward from '../../reward/Reward';
=======
import Reward from '../../common/reward/Reward';
>>>>>>> af62d620bb5f80ac779cdf441ec37bdff12cdb58
import {feather_icon,treasure } from '../../../assets/img/index';

function DailyContainer(props){
    return (
        <div className="objectif-container">
            <Reward imgReward="reward" classReward={treasure}/>
            <div className="progress-text-card">{props.dailyText}</div>
            <div className="container-bar-xp">
                <div className="small-text-xp">5/10 xp</div>
                <div className="small-xp-bar">
                    <div className="progress-xp-bar" style={{backgroundColor:'#F9A014',height:'5px',width:'50%',borderRadius: '10px'}}></div>
                    </div>   
            </div>   
        </div>
    );
}

export default DailyContainer;