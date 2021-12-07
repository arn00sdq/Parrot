import React from 'react';
import Reward from '../../common/reward/Reward';
import ProgressBar from '../../common/tool/ProgressBar'
import { feather_icon, treasure } from '../../../database/images';

function NextAwardCard(props) {
    return (
        <div className="container-card">
            <div className="container-card-header">
                <div className="container-title-card">{props.titleCard}</div>
            </div>
            <div className="container-card-body">
                <div className="container-bar-xp">
                    <div className="large-text-xp">5/10 xp</div>
                    <ProgressBar width="20vw" progress="70%" />
                </div>
                <div className="daily-award">
                    <Reward className="reward" type="feather" />
                    <Reward className="reward" type="feather" />
                    <Reward className="reward" type="feather" />
                    <Reward className="reward" type="treasure" />
                </div>
            </div>
        </div>
    );
}

export default NextAwardCard