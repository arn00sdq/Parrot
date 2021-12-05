import React from "react";

import NavContent from "./NavContent/NavContent";
import UserContent from "./UserContent/UserContent";

function HeaderConstruction({ state, handles, header }) {
  const nav = header.navProps;
  const user = header.userProps;
  return (
    <header id="container-header">
      <div className="brand-section">
        <div id="brand-logo"> PARROT </div>
      </div>
      <nav>
        <NavContent navContent={nav} />
        <div className="indicator"></div>
      </nav>
      <div className="user-infos">
        <UserContent state={state} handles={handles} userContent={user} />
      </div>
    </header>
  );
}

export default HeaderConstruction;
