import { data as themes } from "../../../database/themes";
import Checkbox from "../tool/Checkbox";
import React from "react";

export default function ThemeFilter({ handles, from }) {
  return (
    <div className="theme-container">
      <div className="title-theme-container">Filter by theme:</div>
      <ul>{listThemes(handles, from)}</ul>
    </div>
  );

  function listThemes(handles, from) {
    let row = [];
    for (const themeName in themes) {
      if (Object.hasOwnProperty.call(themes, themeName)) {
        const theme = themes[themeName];
        row.push(
          <Checkbox
            key={theme}
            handles={handles}
            from={from}
            label={theme}
            type="theme"
          />
        );
      }
    }
    return row;
  }
}
