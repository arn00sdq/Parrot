import React from "react";
import Feathers from "./Feathers";
import Flames from "./Flames";
import Language from "./Language";
import User from "./User";
function UserContent({ state, handles }) {
  return (
    <>
      <Language state={state} handles={handles} />
      <Feathers state={state} handles={handles} />
      <Flames state={state} handles={handles} />
      <User state={state} handles={handles} />
    </>
  );
}

export default UserContent;
