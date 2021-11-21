import React from 'react';
import '../../../assets/css/common/reward/reward.css'

function Reward(props){
    return (<img className={props.imgReward} src={props.classReward}/>);
}

export default Reward;