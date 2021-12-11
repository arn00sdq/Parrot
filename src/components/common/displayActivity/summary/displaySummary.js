import DisplayTags from "./displayTags";
import Reward from "../../reward/Reward";
import React from "react";

import { treasure, feather_icon } from "../../../../database/images";

function displayRewards({ treasures, feathers }) {
  let rewards = [];
  for (let i = 0; i < treasures; i++) {
    rewards.push(<Reward className="reward" type="treasure" />);
  }
  for (let i = 0; i < feathers; i++) {
    rewards.push(<Reward className="reward" type="feather" />);
  }
  return rewards;
}

function DisplaySummary({ summary, name }) {
  return (
    
      <div className="summary-container">
        <div className="summary-container-header">
          <div className="title-summary">{name}</div>
        </div>
        <div className="container-card-body" style={{alignItems :"baseline"}}>
          <DisplayTags title="Level" tags={[summary.level]} />
          <DisplayTags title="Categories" tags={summary.themes} />
          <div className="row-section-summary">
            <div className="title-row-summary">Reward :</div>
              {displayRewards(summary.rewards)}
          </div>
        </div>
      </div>
  );
}

export default DisplaySummary;
