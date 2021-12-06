import React from "react";
import { Link } from "react-router-dom";
function User({state, handles}) {
  return (
    <div className="infos-section">
      <img className="infos-icon" src={state.user.icon} />
      <Link to={"profilPage"} ><span className="user-text">{state.user.name}</span></Link>
      
    </div>
  );
}

export default User;
