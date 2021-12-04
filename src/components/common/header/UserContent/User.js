import React from "react";
function User({state, handles}) {
  return (
    <div className="infos-section">
      <img className="infos-icon" src={state.user.icon} />
      <p className="user-number">{state.user.name}</p>
    </div>
  );
}

export default User;
