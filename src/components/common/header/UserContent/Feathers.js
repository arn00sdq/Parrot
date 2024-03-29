import React from "react";
import { feather_icon } from "../../../../database/images";
function Feathers({state, handles}) {
  return (
    <div className="infos-section">
      <img className="infos-icon" src={feather_icon} />
      <span className="user-text">Points</span>
      <p className="user-number">{state.user.featherCount}</p>
    </div>
  );
}

export default Feathers;
