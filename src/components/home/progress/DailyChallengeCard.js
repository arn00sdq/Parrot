import React from "react";
import DailyChallengeContainer from "./DailyChallengeContainer";
import Reward from "../../common/reward/Reward";
import { data as exercisesData } from "../../../database/exercises";
import { treasure } from "../../../database/images";

function listRewards({ treasures, feathers }) {
  let row = [];
  for (let i = 0; i < treasures; i++)
    row.push(<Reward className="reward" type="treasure" />);
  for (let i = 0; i < feathers; i++)
    row.push(<Reward className="reward" type="feather" />);
  return row;
}

function DailyChallengeCard({ state, handles }) {
  const { id} = state.home.dailyChallenge,
    exerciseToShow = exercisesData.find((ex) => {
      return ex.id == id;
    });
    const dailyChallenge = state.user.exercisesDone.find(ex => {
       return ex.id == id
    }),
    completionPercent = dailyChallenge == undefined 
    ? 0
    : dailyChallenge.completionPercent

  return (
    <div className="container-card">
      <div className="container-card-header">
        <div className="container-title-card">Challenge of the day</div>
      </div>
      <div className="container-card-body">
        <DailyChallengeContainer
          exercise={exerciseToShow}
          completionPercent={completionPercent}
          handles={handles}
        />
        <div className="daily-award">
          {listRewards(exerciseToShow.summary.rewards)}
        </div>
      </div>
    </div>
  );
}

export default DailyChallengeCard;
