import { data as themes } from "../../../database/themes";
import Checkbox from "../tool/Checkbox";
import React from "react";
import {PickerImg } from "../../../database/images";

export default function ThemeFilter({handles, from, filterData }) {
  return (
    <div className="theme-container">
      <p className="title-search-section">
        <img src={PickerImg.theme_icon} className="icon-filter"/>
        <span className="title-search">Filter by theme:</span>
      </p>
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