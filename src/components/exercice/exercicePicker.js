import React from "react";

import ActivityListContainer from "../common/bandItem/activityListContainer";
import { data as exercisesData } from "../../database/exercises";
import ThemeFilter from "../common/filter/themeFilter";
import { bush,PickerImg,cross_icon } from "../../database/images";
import LevelFilter from "../common/filter/levelFilter";


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
            <div className="section-filter-search">
              <p className="title-search-section">
                <img src={PickerImg.key} className="icon-filter"/>
                <span className="title-search">Keys Words</span>
              </p>
              <div className="search-bar">
                <div className="search-form">
                  <input name="keywords" type="text" placeholder="Research" className="search-field"></input>
                  <button className="search-send"><img src={PickerImg.search_icon} className="icon-filter-button"/></button>
                </div>
              </div>
            </div>
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
