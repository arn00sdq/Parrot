import React from 'react';
import '../../../assets/css/common/reward/reward.css'
import {feather_icon, treasure } from "../../../database/images";
function Reward({className, type}){
    switch (type) {
        case "treasure":
            return (<img className={className} src={treasure}/>);
            case "feather":
            return (<img className={className} src={feather_icon}/>);
    }
}

export default Reward;