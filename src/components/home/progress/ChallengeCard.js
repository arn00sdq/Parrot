import React from 'react';
import ChallengeContainer from './ChallengeContainer';
import Reward from '../../common/reward/Reward';

import {treasure} from '../../../assets/img/index';

function ChallengeCard({titleCard}){
    return(
        <div className="progress-card">
            <div className="progress-title-card">{titleCard}</div>
                <ChallengeContainer ExText="Les temps du passé. Ex 6"/>
            <div className="daily-award">
                <Reward imgReward="reward" classReward={treasure}/>
                <Reward imgReward="reward" classReward={treasure}/>
                <Reward imgReward="reward" classReward={treasure}/>
            </div>
        </div>
    );
}

export default ChallengeCard;

