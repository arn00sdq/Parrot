import { data as themes } from "../../../database/themes";
import Checkbox from "../tool/Checkbox";
import React from "react";

export default function ThemeFilter({handles, from, filterData }) {
  return (
    <div className="theme-container">
      <div className="title-theme-container">Filter by theme:</div>
      <ul>{listThemes(handles, from, filterData)}</ul>
    </div>
  );

  
}

function listThemes(handles, from, activities) {
  let count = 0
  let row = [];
  for (const themeName in themes) {
    if (Object.hasOwnProperty.call(themes, themeName)) {
      const theme = themes[themeName];
      activities.forEach(act => {
        if (act.summary.themes.indexOf(theme) != -1) {
          count++
        }
      });
      row.push(
        <Checkbox
          key={theme}
          handles={handles}
          from={from}
          label={theme}
          type="theme"
          count={count}
        />
      );
    }
    count = 0
  }
  return row;
}