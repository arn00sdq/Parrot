import { data as levels } from "../../../database/levels";
import Checkbox from "../tool/Checkbox";
import React from "react";
import {PickerImg } from "../../../database/images";

export default function LevelsFilter({handles, from ,filterData}) {
  return (
    <div className="theme-container">
      <p className="title-search-section">
        <img src={PickerImg.level_icon} className="icon-filter"/>
        <span className="title-search">Filter by level:</span>
      </p>
      <ul>{listLevels(handles, from, filterData)}</ul>
    </div>
  );

  function listLevels(handles, from, activities) {
    let count = 0;
    let row = [];
    for (const levelsName in levels) {
      if (Object.hasOwnProperty.call(levels, levelsName)) {
        const level = levels[levelsName];
        activities.forEach(activity => {
          if (activity.summary.level == level) count++
        })
        row.push(
          <Checkbox
            key={level}
            handles={handles}
            from={from}
            label={level}
            type="level"
            count={count}
          />
        );
      }
      count = 0
    }
    return row;
  }
}
