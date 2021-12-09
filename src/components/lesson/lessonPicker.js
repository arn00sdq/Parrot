import React from "react";

import TensesFilter from "../common/filter/tensesFilter";
import LevelFilter from "../common/filter/levelFilter";
import ActivityListContainer from "../common/bandItem/activityListContainer";
import { data as lessonsData } from "../../database/lessons";
import { bush, pres_perfect } from "../../database/images";

function LessonPicker({ state, handles }) {
  const lessonsToShow =
    state.lessonPicker.selectedTenses.length == 0
      ? lessonsData.filter((le) => {
          let corresponds = false;
          state.lessonPicker.selectedTenses.forEach((tense) => {
            if (le.summary.tenses.indexOf(tense.name) != -1) {
              corresponds = true;
            }
          });
          return corresponds;
        })
      : lessonsData;

  return (
    <div id="root-css">
      <img className="bush2" src={bush} />

      <main>
        <div className="card">
          <div className="filter-container">
            <div className="filter-container-header">
              <div className="title-filter">Search</div>
            </div>
            <div className="filter-card-body">
              <LevelFilter handles={handles} from="lessonPicker" />
              <TensesFilter handles={handles} from="lessonPicker" />
            </div>
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
