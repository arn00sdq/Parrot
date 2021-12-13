import React from "react";

import { certificate } from "../../../database/images";
import Reward from "../reward/Reward"

function listRewards({ treasures, feathers }) {
    let row = [];
    for (let i = 0; i < treasures; i++)
      row.push(<Reward className="reward" type="treasure" />);
    for (let i = 0; i < feathers; i++)
      row.push(<Reward className="reward" type="feather" />);
    return row;
}
  

function ActivityCompleted({reward , active}) {
    console.log("j'ai capté")
    return (
        <div className={`activity-finished ${active == "active" ? "activefs": "" }`}>
            <div className="af-header">
                <img src={certificate} className="certificate" />
                <div className="title-af">Activity finished !</div>
            </div>
            <div className="af-summarize">

                <div className="text-bar-af">Course 100% completed</div>
                <div className="step-bar-af">
                    <div className={`fill-af ${active == "active" ? "filling-af": ""}`} style={{ width: active == "active" ? "100%": "0%" }}></div>
                </div>

                <div className="recap-af">
                    <div className="af-text">Lesson en cours :<div className="af-sub-text">Present perfect and be -ing </div></div>
                    <div className="af-text">Reward :</div>
                    <div>{listRewards(reward)}</div>
                </div>
            </div>
            <div className="af-footer">
                <div className="af-row1">
                    <button className="button-af" >Quittez</button>
                    <button className="button-af">S'entrainer</button>
                </div>
                <button className="button-af">Restez</button>
            </div>
        </div>
    );
}

export default ActivityCompleted

