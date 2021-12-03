import React from 'react';
import ChallengeContainer from './ChallengeContainer';
import Reward from '../../common/reward/Reward';

import { treasure } from '../../../database/images';

function ChallengeCard({ titleCard }) {
    return (
        <div className="container-card">
            <div className="container-card-header">
                <div className="container-title-card">{titleCard}</div>
            </div>
            <div className="container-card-body">
                <ChallengeContainer ExText="Les temps du passé. Ex 6" />
                <div className="daily-award">
                    <Reward imgReward="reward" classReward={treasure} />
                    <Reward imgReward="reward" classReward={treasure} />
                    <Reward imgReward="reward" classReward={treasure} />
                </div>
            </div>
        </div>
    );
}

export default ChallengeCard;

