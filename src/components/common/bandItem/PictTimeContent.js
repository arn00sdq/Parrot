import React from 'react';
import Reward from '../reward/Reward';

import {
    clock_icon,right_arrow,treasure

} from '../../../assets/img/index'

function PictTimeContent (props){
    return(
        <div className={props.className}>
            <img className="img-ptc" src={props.imgExercice}/>
            <div className="time-container">
                <img className="clock" src={clock_icon}/>
                <div className="time-shift">{props.time}</div>
            </div>
            <div className="content-ptc-container">
                <div className="header-ptc-container">
                    <div className="title-ptc">{props.titleEx}</div>
                    <div className="validation">{props.state}</div>
                </div>
                <div className="text-ptc">{props.content}</div>
                <div className="footer-ptc">
                    <Reward imgReward="reward" classReward={treasure}/>
                    <img className="orange-arrow" src={right_arrow}/>
                </div>
                
            </div>
        </div>
        
    );
}

export default PictTimeContent;