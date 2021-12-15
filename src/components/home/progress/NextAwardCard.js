import React from "react";
import Reward from "../../common/reward/Reward";
import ProgressBar from "../../common/tool/ProgressBar";
import { feather_icon, treasure } from "../../../database/images";

function listRewards({ treasures, feathers }) {
    let row = [];
    for (let i = 0; i < treasures; i++)
      row.push(<Reward className="reward" type="treasure" />);
    for (let i = 0; i < feathers; i++)
      row.push(<Reward className="reward" type="feather" />);
    return row;
  }

function NextAwardCard({ state, handles }) {
  const completed = state.user.exercisesDone.filter((ex) => {
    return ex.completionPercent === 100;
  }).length 
  + state.user.lessonsRead.filter((le) => {
    return le.completionPercent === 100;
  }).length
  + state.user.papersRead.filter((pa) => {
    return pa.completionPercent === 100;
  }).length 
  const objective = state.home.nextAward.actObjective;
  if (completed > objective) completed = objective;
  
  return (
    <div className="container-card">
      <div className="container-card-header">
        <div className="container-title-card">Next level</div>
      </div>
      <div className="container-card-body">
        <div className="container-bar-xp">
          <div className="large-text-xp">{completed} / {objective} completed</div>
          <ProgressBar width="20vw" progress={`${completed/objective * 100}%`} />
        </div>
        <div className="daily-award">
          {listRewards({treasures: 3, feathers: 2})}
        </div>
      </div>
    </div>
  );
}

export default NextAwardCard;
