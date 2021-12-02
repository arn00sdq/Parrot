import DisplayTags from "./displayTags";
import Reward from "../../reward/Reward";
import React from "react";

import { treasure, feather_icon } from "../../../../database/images";

function displayRewards({ treasures, feathers }) {
  let rewards = [];
  for (let i = 0; i < treasures; i++) {
    rewards.push(
      <Reward imgReward="reward" classReward={treasure} />
    );
  }
  for (let i = 0; i < feathers; i++) {
    rewards.push(
      <Reward imgReward="reward" classReward={feather_icon} />
    );
  }
  return rewards
}



function DisplaySummary({ summary, name}) {
  console.log("DisplayActivity - displaySummary: summary", summary);
  return (
    <div className="page-summary-card card">
      <div className="page-summary-container">
        <div className="title-summary-container">
          <div className="title-summary">Summary of {name}</div>
        </div>
        <div className="hr-horizontale"></div>
        <div className="section-summary-container">
          <div className="infos-section-summary">
          {<DisplayTags title="Level" tags={[summary.level]} />}
            {<DisplayTags title="Categories" tags={summary.themes} />}
          </div>
          <div className="hr-horizontale"></div>
        </div>
        <div className="section-summary-container">
          <div className="title-section-summary">Rewards</div>
          <div className="reward-section-summary">
            {displayRewards(summary.rewards)}
          </div>
          <div className="hr-horizontale"></div>
        </div>
      </div>
    </div>
  );
}

export default DisplaySummary;
