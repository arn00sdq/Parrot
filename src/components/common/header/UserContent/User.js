import React from "react";
import { Link } from "react-router-dom";
function User({state, handles}) {
  return (
    <div className="infos-section">
      <Link   to="profilPage" ><img key={Object.toString(state.user.icon)} className="infos-icon" src={state.user.icon} /></Link>
      <span  className="user-text">{state.user.name}</span>
      
    </div>
  );
}

export default User;
