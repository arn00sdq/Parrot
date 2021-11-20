<<<<<<< HEAD
import React from 'react';
import Reward from '../../reward/Reward';
=======
import Reward from '../../common/reward/Reward';
>>>>>>> af62d620bb5f80ac779cdf441ec37bdff12cdb58
import {feather_icon,treasure } from '../../../assets/img/index';

function NextAwardCard(props){
    return (
        <div className="progress-card">
            <div className="progress-title-card">{props.titleCard}</div>
            <div className="container-bar-xp">
                <div className="large-text-xp">5/10 xp</div>
                <div className="large-xp-bar">                          
                    <div className="progress-xp-bar" style={{backgroundColor:'#F9A014',height:'5px',width:'70%',borderRadius: '10px' }}></div>
                </div>
            </div> 
            <div className="daily-award">
            <Reward imgReward='reward' classReward={feather_icon}/>
            <Reward imgReward='reward' classReward={feather_icon}/>
            <Reward imgReward='reward' classReward={feather_icon}/>
            <Reward imgReward='reward' classReward={treasure}/>
            </div>
        </div>
    );
}

export default NextAwardCard