import React from 'react';
import Reward from '../reward/Reward';

import {
    clock_icon, right_arrow, treasure

} from '../../../database/images'

function PictTimeContent(props) {
    let row = [];
    for (let i = 0; i < props.length; i++) {
        row.push(<div className={props[i].className}>
            <img className="img-ptc" src={props[i].imgExercice} />
            <div className="time-container">
                <img className="clock" src={clock_icon} />
                <div className="time-shift">{props[i].time}</div>
            </div>
            <div className="content-ptc-container">
                <div className="header-ptc-container">
                    <div className="title-ptc">{props[i].title}</div>
                    <div className="validation">{props[i].state}</div>
                </div>
                <div className="text-ptc">{props[i].text}</div>
                <div className="footer-ptc">
                    <Reward imgReward="reward" classReward={treasure} />
                    <img className="orange-arrow" src={right_arrow} />
                </div>

            </div>
        </div>)
    }
    return row;

}

function PictTimeContainer(props) {
    let row = [];
    for (let [key, value] of Object.entries(props.content)) {
        row.push(PictTimeContent(value));
    }

    return row;
}

export default PictTimeContainer;