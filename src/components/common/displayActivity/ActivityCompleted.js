import React from "react";

import { certificate } from "../../../database/images";

function ActivityCompleted({active}) {
    return (
        <div className={`activity-finished ${active}`}>
            <div className="af-header">
                <img src={certificate} className="certificate" />
                <div className="title-af">Activity finished !</div>
            </div>
            <div className="af-summarize">

                <div className="text-bar-af">Course 100% completed</div>
                <div className="step-bar-af">
                    <div className="fill-af" style={{ width: "0%" }}></div>
                </div>

                <div className="recap-af">
                    <div className="af-text">Lesson en cours :<div className="af-sub-text">Present perfect and be -ing </div></div>
                    <div className="af-text">Reward :</div>
                </div>
            </div>
            <div className="af-footer">
                <button className="btn-paperCard" >Quittez</button>
                <button className="btn-paperCard">S'entrainer</button>
            </div>
        </div>
    );
}

export default ActivityCompleted

