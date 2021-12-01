import RowContentSummary from "./rowContent";
import Reward from "../../reward/Reward";
import React from "react";

import { treasure, feather_icon } from "../../../../database/images";

function DisplaySummary( {summary} ) {
  console.log("DisplayActivity - displaySummary: summary", summary);
  return (
    <div className="page-summary-card card">
      <div className="page-summary-container">
        <div className="title-summary-container">
          <div className="title-summary">Summary</div>
        </div>
        <div className="hr-horizontale"></div>
        <div className="section-summary-container">
          <div className="title-section-summary">Details</div>
          <div className="infos-section-summary">
		  <div className="level-tag">{summary.level}</div>
		  <div className="tag-point-small">{summary.theme}</div>
            {/*<RowContentSummary title="Category" theme={summary.theme} />*/}
          </div>
          <div className="hr-horizontale"></div>
        </div>
        <div className="section-summary-container">
          <div className="title-section-summary">Rewards</div>
          <div className="reward-section-summary">
            {() => {
              let rewards = [];
              for (let i = 0; i < summary.rewards.treasures; i++) {
                rewards.push(
                  <Reward imgReward="reward" classReward={treasure} />
                );
              }
              for (let i = 0; i < summary.rewards.feathers; i++) {
                rewards.push(
                  <Reward imgReward="reward" classReward={feather_icon} />
                );
              }
			  return rewards
            }}
          </div>
          <div className="hr-horizontale"></div>
        </div>
      </div>
    </div>
  );
}

export default DisplaySummary;
