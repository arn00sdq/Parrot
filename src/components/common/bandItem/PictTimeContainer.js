import React from 'react';
import Reward from '../reward/Reward';

import {
    clock_icon, right_arrow, treasure

} from '../../../database/images'

function PictTimeContent(props, index) {
    console.log(props.length)
    console.log(props[index].className)
    let row = [];
    for (let i = 0; i < props.length; i++) {
        row.push(<div className={props[index].className}>
            <img className="img-ptc" src={props[index].imgExercice} />
            <div className="time-container">
                <img className="clock" src={clock_icon} />
                <div className="time-shift">{props[index].time}</div>
            </div>
            <div className="content-ptc-container">
                <div className="header-ptc-container">
                    <div className="title-ptc">{props[index].title}</div>
                    <div className="validation">{props[index].state}</div>
                </div>
                <div className="text-ptc">{props[index].text}</div>
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
    var values = Object.keys(props.content);

    for (let [key, value] of Object.entries(props.content)) {
        const index = values.indexOf(key);
        row.push(PictTimeContent(value, index));
    }

    return row;
}

export default PictTimeContainer;