import React from "react";
function User({state, handles}) {
  return (
    <div className="infos-section">
      <img className="infos-icon" src={state.user.icon} />
      <span className="user-text">{state.user.name}</span>
    </div>
  );
}

export default User;
