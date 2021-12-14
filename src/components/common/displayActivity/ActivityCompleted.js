import React from "react";

import { certificate,cross_icon } from "../../../database/images";
import Reward from "../reward/Reward"
import { Link } from "react-router-dom";

function listRewards({ treasures, feathers }) {
    let row = [];
    for (let i = 0; i < treasures; i++)
      row.push(<Reward className="reward" type="treasure" />);
    for (let i = 0; i < feathers; i++)
      row.push(<Reward className="reward" type="feather" />);
    return row;
}



function ActivityCompleted({reward , active, isFinished, handles,from}) {

    const handleButtonClick = (value) => {
        handles.handleEndActivity(value,"",from);
    };

    console.log(isFinished)
    return (
        <div className={`activity-finished ${isFinished == false ?"" : "activefs" }`}>
            <div className="af-header">
                <div className="title-af">Activity finished !</div>
                <img onClick={() => handleButtonClick(false)} src={cross_icon} className="cross" />
            </div>
            <div className="af-summarize">

                <div className="text-bar-af">Course 100% completed</div>
                <div className="step-bar-af">
                    <div className={`fill-af ${active == "active" ? "filling-af": ""}`} style={{ width: isFinished == true ? "100%": "0%" }}></div>
                </div>

                <div className="recap-af">
                    <div className="af-text">Lesson en cours :<div className="af-sub-text">Present perfect and be -ing </div></div>
                    <div className="reward-af">
                        <div className="af-text">Reward : </div>
                        <div className="af-mr">{listRewards(reward)}</div>
                    </div>
                    
                </div>
            </div>
            <div className="af-footer">
               <Link to="/home"><button onClick={() => handleButtonClick(false)} className="button-af"  >Quittez</button></Link>   
                <button className="button-af">S'entrainer</button>
            </div>
        </div>
    );
}

export default ActivityCompleted

