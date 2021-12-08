import React from "react";
import Reward from "../reward/Reward";
import handlePickerItem from "./handlePickerItem";
import { Link } from "react-router-dom";
import { clock_icon, right_arrow, treasure } from "../../../database/images";

function ActivityListContainer({ from, activities, handles }) {
  let row = [];
  activities.forEach((exercise) => {
    row.push(ActivityContent(exercise, handles, from));
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

function ActivityContent(activity, handles, from) {
  var to;
  switch (from) {
    case "exercisePicker":
      to = "/exercisePage";
      break;
    case "lessonPicker":
      to = "/lessonPage";
      break;

    default:
      break;
  }
  const handleButtonClick = () => {
    switch (from) {
      case "exercisePicker":
        handles.handleExerciseStart(activity.id);
        break;
      case "lessonPicker":
        handles.handleLessonStart(activity.id);
        break;
      default:
        break;
    }
  };

  let row = [];
  row.push(
    <div className="pct-card" key={activity.id}>
      <div className="pct-box">
        <img className="img-pct" src={activity.icon} />
        {/* <div className="time-container">
                    <img className="clock" src={clock_icon} />
                    <div className="time-shift">{value.time}</div>
                </div> */}
        <div className="content-pct-container">
          <div className="header-pct-container">
            <div className="title-pct">
              {activity.id + " : " + activity.title}
            </div>
            {/* <div className="validation">{value.state}</div> */}
          </div>
          <div className="text-pct">{activity.description}</div>
          <div className="footer-pct">
            <div>{listRewards(activity.summary.rewards)}</div>
            <Link className="btn-pctCard" to={to} onClick={handleButtonClick}>
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return row;
}

export default ActivityListContainer;
