import React from "react";
import DisplayActivity from "../common/displayActivity/displayActivity";

function ExercisePage({state, handles}) {
  return (
    <main>{<DisplayActivity state = {state} handles = {handles} />}</main>
  );
}
export default ExercisePage;
