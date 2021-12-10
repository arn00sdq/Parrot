import React from "react";

import TensesFilter from "../common/filter/tensesFilter";
import LevelFilter from "../common/filter/levelFilter";
import ActivityListContainer from "../common/bandItem/activityListContainer";
import { data as lessonsData } from "../../database/lessons";
import { bush, pres_perfect } from "../../database/images";

function LessonPicker({ state, handles }) {
  var lessonsToShow =
    state.lessonPicker.selectedTenses.length +
      state.lessonPicker.selectedLevels.length ==
    0
      ? lessonsData
      : lessonsData.filter((lesson) => {
          let corresponds = false;
          state.lessonPicker.selectedTenses.forEach((tense) => {
            if (lesson.summary.tenses.indexOf(tense.name) != -1) {
              corresponds = true;
            }
          });
          state.lessonPicker.selectedLevels.forEach((level) => {
            if (lesson.summary.level == level.name) {
              corresponds = true;
            }
          });
          return corresponds;
        });

  return (
    <div id="root-css">
      <img className="bush2" src={bush} />

      <main>
        <div className="card filter-container">
          <div className="filter-container-header">
            <div className="title-filter">Search</div>
          </div>
          <div className="filter-card-body">
            <LevelFilter
              handles={handles}
              from="lessonPicker"
              filterData={lessonsData}
            />
            <TensesFilter
              handles={handles}
              from="lessonPicker"
              filterData={lessonsData}
            />
          </div>
        </div>

        <div className="exercice-picker-card card">
          <div className="header-picker">
            <div className="tag-point-medium">Lessons</div>
            <div className="n-exercices">{`Showing ${lessonsToShow.length} of ${lessonsData.length} lessons`}</div>
          </div>
          <ActivityListContainer
            from="lessonPicker"
            activities={lessonsToShow}
            handles={handles}
          />
          {/* <a href="#" className="button-ex-card">Charger plus</a> */}
        </div>
      </main>
    </div>
  );
}

export default LessonPicker;
