import DisplayTags from "./displayTags";
import Reward from "../../reward/Reward";
import React from "react";

import { bush, PickerImg, feather_icon, SummImg } from "../../../../database/images";

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
        <div className="title-summary">Summary : {name}</div>
      </div>

      <div className="container-summary-body" style={{ alignItems: "baseline" }}>

        <div className="summary-section">
          <div className="title-search-section summary-adjustement">
            <img src={SummImg.tag_icon} className="icon-filter" />
            <span className="title-search">Keys Words</span>
          </div>
          <div className="tag-section-container">
            <DisplayTags type="small" title="" tags={[summary.level]} />
            <DisplayTags type="small" title="" tags={[summary.themes]} />
          </div>
        </div>

        <div className="summary-section">
          <div className="title-search-section summary-adjustement">
            <img src={SummImg.treasure_icon} className="icon-filter" />
            <span className="title-search">Reward</span>
          </div>
          <div className="row-section-summary">
            {displayRewards(summary.rewards)}
          </div>
        </div>

        <div className="summary">
          <div className="title-search-section summary-adjustement">
            <img src={SummImg.paperclip_icon} className="icon-filter" />
            <div className="title-search">Summary</div>
          </div>
          <div className="row-summary">
            <div className="summary-number-primary">I</div>
            <div className="summary-primary-text">Formation du Present Perfect et be +ing </div>
          </div>
          <div className="row-summary">
            <div className="summary-number-secondary">A</div>
            <div className="summary-secondary-text">Formation du Present Perfect</div>
          </div>
          <div className="row-summary">
            <div className="summary-number-secondary">B</div>
            <div className="summary-secondary-text">Formation du be + ing Perfect</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DisplaySummary;
