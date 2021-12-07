import { data as themes } from "../../../database/themes";
import Checkbox from '../tool/Checkbox'
import React from "react";

export default function ThemeFilter({handles, from}) {
  return (
    <div className="filter-container">
      <div className="title-filter-container">Filter by theme:</div>
      <ul>{listThemes(from)}</ul>
    </div>
  );

  function listThemes(from) {
    let row = [];
    for (const themeName in themes) {
      if (Object.hasOwnProperty.call(themes, themeName)) {
        const theme = themes[themeName];
        row.push(<Checkbox key = {theme} from={from} label={theme} />);
      }
    }
    return row;
  }
}