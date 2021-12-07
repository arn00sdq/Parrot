import React from "react";
import Reward from "../reward/Reward";
import handlePickerItem from "./handlePickerItem";
import { Link, useNavigate } from "react-router-dom";
import { clock_icon, right_arrow, treasure } from "../../../database/images";

function PictTimeContainer({ exercises, handles }) {
  let row = [];
  console.log(exercises);
  exercises.forEach((exercise) => {
    row.push(PictTimeContent(exercise, handles));
  });

  return row;
}

function listRewards({ treasures, feathers }) {
  let row = [];
  for (let i = 0; i < treasures; i++)
    row.push(<Reward className="reward" type="treasure" />);
  for (let i = 0; i < feathers; i++)
    row.push(<Reward className="reward" type="feather" />);
  return row;
}

function PictTimeContent(ex, handles) {
  const navigate = useNavigate();
  const handleButtonClick = (e) => {
    e.preventDefault();

    const {
      target: { value },
    } = e;
    handles.handleExerciseStart(ex.id);
    navigate("/exercisePage");
  };

  let row = [];
  row.push(
    <div className="pct-card" key={ex.id}>
      <div className="pct-box">
        <img className="img-pct" src={ex.icon} />
        {/* <div className="time-container">
                    <img className="clock" src={clock_icon} />
                    <div className="time-shift">{value.time}</div>
                </div> */}
        <div className="content-pct-container">
          <div className="header-pct-container">
            <div className="title-pct">{ex.id + " : " + ex.title}</div>
            {/* <div className="validation">{value.state}</div> */}
          </div>
          <div className="text-pct">{ex.description}</div>
          <div className="footer-pct">
            <div>{listRewards(ex.summary.rewards)}</div>
            <button
              className="btn-pctCard"
              value={"LE" + 2}
              onClick={(e) => handleButtonClick(e)}
              src={right_arrow}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return row;
}

export default PictTimeContainer;
