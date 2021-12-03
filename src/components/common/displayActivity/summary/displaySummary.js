import DisplayTags from "./displayTags";
import Reward from "../../reward/Reward";
import React from "react";

import { treasure, feather_icon } from "../../../../database/images";

function displayRewards({ treasures, feathers }) {
  let rewards = [];
  for (let i = 0; i < treasures; i++) {
    rewards.push(<Reward imgReward="reward" classReward={treasure} />);
  }
  for (let i = 0; i < feathers; i++) {
    rewards.push(<Reward imgReward="reward" classReward={feather_icon} />);
  }
  return rewards;
}

function DisplaySummary({ summary, name }) {
  console.log("DisplayActivity - displaySummary: summary", summary);
  return (

    <div className="card">
      <div className="container-card">
        <div className="container-card-header">
          <div className="title-summary">Summary of {name}</div>
        </div>
        <div className="container-card-body" style={{alignItems :"baseline"}}>
          <DisplayTags title="Level" tags={[summary.level]} />
          <DisplayTags title="Categories" tags={summary.themes} />
          <div className="row-section-summary">
            <div className="title-row-summary">Reward</div>
              {displayRewards(summary.rewards)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplaySummary;
