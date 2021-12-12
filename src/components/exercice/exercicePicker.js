import React from "react";

import ActivityListContainer from "../common/bandItem/activityListContainer";
import { data as exercisesData } from "../../database/exercises";
import ThemeFilter from "../common/filter/themeFilter";
import { bush,PickerImg,cross_icon } from "../../database/images";
import LevelFilter from "../common/filter/levelFilter";
import KeywordFilter from "../common/filter/keywordFilter";


function ExercicePicker({ state, handles }) {
  var exercisesToShow =
    state.exercisePicker.selectedThemes.length +
      state.exercisePicker.selectedLevels.length ==
    0
      ? exercisesData
      : exercisesData.filter((ex) => {
          let corresponds = false;
          state.exercisePicker.selectedThemes.forEach((theme) => {
            if (ex.summary.themes.indexOf(theme.name) != -1) {
              corresponds = true;
            }
          });
          state.exercisePicker.selectedLevels.forEach((level) => {
            if (ex.summary.level == level.name) {
              corresponds = true;
            }
          });
          return corresponds;
        });

  return (
    <div id="root-css">
     {/*<img className="bush2" src={bush} />*/}
      <main>
        <div className="filter-container">
          <div className="filter-container-header">
            <div className="title-filter">Filtre des guides de conversations</div>
            <KeywordFilter 
            handles={handles}
            from="exercisePicker"
            />
          </div>
          <div className="filter-card-body">
            <LevelFilter
              handles={handles}
              from="exercisePicker"
              filterData={exercisesData}
            />
            <ThemeFilter
              handles={handles}
              from="exercisePicker"
              filterData={exercisesData}
            />
          </div>
        </div>

        <div className="card exercice-picker-card ">
          <div className="header-picker">
            
            <div className="tag-section">
              <span className="tag-point-medium">Exercises</span>
              <img className="tag-medium-cross" src={cross_icon}/>
            </div>
            
            <div className="n-exercices">{`Showing ${exercisesToShow.length} of ${exercisesData.length} exercises`}</div>
          </div>
          <div className="activity-list-container">
          <ActivityListContainer
            from="exercisePicker"
            activities={exercisesToShow}
            handles={handles}
          />
          </div>
        </div>
      </main>
    </div>
  );
}

export default ExercicePicker;
