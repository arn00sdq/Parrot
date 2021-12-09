import { data as levels } from "../../../database/levels";
import Checkbox from '../tool/Checkbox'
import React from "react";

export default function LevelFilter({handles, from}) {
  return (
    <div className="theme-container">
      <div className="title-theme-container">Filter by level:</div>
      <ul>{listLevel(from)}</ul>
    </div>
  );

  function listLevel(handles, from) {
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