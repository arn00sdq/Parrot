import React from "react";
import { flame_icon } from "../../../../database/images";
function Flames({state, handles}) {
  return (
    <div className="infos-section">
      <img className="infos-icon" src={flame_icon} />
      <span className="user-text">Connection</span>
      <p className="user-number">{state.user.flameCount}</p>
    </div>
  );
}

export default Flames;
