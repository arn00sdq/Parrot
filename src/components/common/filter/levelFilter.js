import { data as levels } from "../../../database/levels";
import Checkbox from '../tool/Checkbox'
import React from "react";

export default function LevelFilter({handles, from}) {
  return (
    <div className="filter-container">
      <div className="title-filter-container">Filter by level:</div>
      <ul>{listLevel(from)}</ul>
    </div>
  );

  function listLevel(from) {
    let row = [];
    for (const levelName in levels) {
      if (Object.hasOwnProperty.call(levels, levelName)) {
        const level = levels[levelName];
        row.push(<Checkbox key = {level} from={from} label={level} />);
      }
    }
    return row;
  }
}