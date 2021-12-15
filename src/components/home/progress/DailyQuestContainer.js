import React from "react";
import Reward from "../../common/reward/Reward";
import ProgressBar from "../../common/tool/ProgressBar";
import { feather_icon, treasure } from "../../../database/images";

function DailyQuestContainer({ state, type, title }) {
  let completed, objective;
  switch (type) {
    case "ex":
      completed = state.user.exercisesDone.filter((ex) => {
        return ex.completionPercent === 100;
      }).length;
      objective = state.home.dailyObjectives.exObjective;
      if (completed > objective) completed = objective;
      break;
    case "le":
      completed = state.user.lessonsRead.filter((le) => {
        return le.completionPercent === 100;
      }).length;
      objective = state.home.dailyObjectives.leObjective;
      if (completed > objective) completed = objective;
      break;
    case "pa":
      completed = state.user.papersRead.filter((pa) => {
        return pa.completionPercent === 100;
      }).length;
      objective = state.home.dailyObjectives.paObjective;
      if (completed > objective) completed = objective;
      break;

    default:
      break;
  }
  var barProgress = completed/objective * 100;
  var missionCompleted = completed == objective;

  return (
    <div className="objectif-container">
      <Reward className="reward" type="treasure" />
      <div className="progress-text-card">{title}</div>
      {missionCompleted == false ? (
        <div className="container-bar-xp">
          <div className="small-text-xp">
            {completed} / {objective}
          </div>
          <ProgressBar width="5vw" progress={barProgress + "%"} />
        </div>
      ) : (
        <button className="btn-finish-activity  active"> Claim </button>
      )}
    </div>
  );
}

export default DailyQuestContainer;
