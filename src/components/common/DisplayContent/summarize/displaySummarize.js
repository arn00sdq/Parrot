import RowContentSummarize from './rowContent';
import Reward from '../../reward/Reward'
import React from 'react';

import {treasure,feather_icon} from '../../../../assets/img/index'

function DisplaySummarize(props) {
    console.log("DisplayContent - displaySummarize: summarize",props);
    
    return (
        <div className="page-summarize-card card">
            <div className="page-summarize-container">
                <div className="title-summarize-container">
                    <div className="title-summarize">{props.title}</div>
                </div>
                <div className="hr-horizontale"></div>
                <div className="section-summarize-container">
                    <div className="title-section-summarize">{props.summarize.repere.title}</div>
                    <div className="infos-section-summarize" >
                        <RowContentSummarize title="Niveau" keys={props.summarize.id} row={props.summarize.level}/>
                        <RowContentSummarize title="Balise" keys={props.summarize.repere.id}  row={props.summarize.repere} />
                    </div>
                    <div className="hr-horizontale"></div>
                </div>
                <div className="section-summarize-container">
                    <div className="title-section-summarize">{props.summarize.reward.title}</div>
                    <div className="reward-section-summarize" key={props.summarize.reward.id}>
                        <Reward imgReward="reward" classReward={treasure} />
                        <Reward imgReward="reward" classReward={feather_icon} />
                    </div>
                    <div className="hr-horizontale"></div>
                </div>
            </div>
        </div>
    );
}

export default DisplaySummarize;