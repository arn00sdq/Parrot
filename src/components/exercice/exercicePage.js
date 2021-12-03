import React from "react";
import DisplayActivity from "../common/displayActivity/displayActivity";

function ExercisePage(props) {
  console.log(`propsExPage`, props);
  return (
    <main>{<DisplayActivity id={"EX1"/* props.state.exercisePage.exerciseId */} />}</main>
  );
}
export default ExercisePage;
