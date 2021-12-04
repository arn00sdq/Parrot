import React from "react";
import { data as languages } from "../../../../database/languages";
function User({ state, handles }) {
  console.log(`User`);
  var row = [];
  var currLang = state.user.selectedLanguage;
  var currLangObj = languages.find((l) => l.hasOwnProperty(currLang));
  var currIcon = currLangObj[currLang];

  languages.forEach((l) => {
    for (const [key, value] of Object.entries(l)) {
      if (key != currLang) {
        row.push(<img src={value} value={key} className="dropdown-item-img" />);
      }
    }
  });

  return (
    <div className="infos-section">
      <div className="item">
        <img src={currIcon} className="flag-icon" />
        <div className="dropdown-menu" role="menu">
          <ul className="menu-item-link">{row}</ul>
        </div>
      </div>
    </div>
  );
}

export default User;
