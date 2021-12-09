import { data as levels } from "../../../database/levels";
import Checkbox from "../tool/Checkbox";
import React from "react";

export default function LevelsFilter({ handles, from }) {
  return (
    <div className="theme-container">
      <div className="title-theme-container">Filter by level:</div>
      <ul>{listLevels(handles, from)}</ul>
    </div>
  );

  function listLevels(handles, from) {
    let row = [];
    for (const levelsName in levels) {
      if (Object.hasOwnProperty.call(levels, levelsName)) {
        const level = levels[levelsName];
        row.push(
          <Checkbox
            key={level}
            handles={handles}
            from={from}
            label={level}
            type="level"
          />
        );
      }
    }
    return row;
  }
}
