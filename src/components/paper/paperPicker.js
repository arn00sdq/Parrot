import React from "react";

import PaperListContainer from "../common/bandItem/paperListContainer";
import ThemeFilter from "../common/filter/themeFilter";
import LevelFilter from "../common/filter/levelFilter";

import { bush, pres_perfect, PickerImg,cross_icon } from "../../database/images";
import { data as papersData } from "../../database/papers";

function PaperPicker({ state, handles }) {
  var papersToShow =
    state.paperPicker.selectedThemes.length +
      state.paperPicker.selectedLevels.length ==
      0
      ? papersData
      : papersData.filter((paper) => {
        let corresponds = false;
        state.paperPicker.selectedThemes.forEach((theme) => {
          if (paper.summary.themes.indexOf(theme.name) != -1) {
            corresponds = true;
          }
        });
        state.paperPicker.selectedLevels.forEach((level) => {
          if (paper.summary.level == level.name) {
            corresponds = true;
          }
        });
        return corresponds;
      });
  return (
    <div id="root-css">
      <img className="bush2" src={bush} />

      <main>
        <div className="filter-container">
          <div className="filter-container-header">
            <div className="title-filter">Filtre des guides de conversations</div>
            <div className="section-filter-search">
              <p className="title-search-section">
                <img src={PickerImg.key} className="icon-filter" />
                <span className="title-search">Keys Words</span>
              </p>
              <div className="search-bar">
                <div className="search-form">
                  <input name="keywords" type="text" placeholder="Research" className="search-field"></input>
                  <button className="search-send"><img src={PickerImg.search_icon} className="icon-filter-button" /></button>
                </div>
              </div>
            </div>
          </div>
          <div className="filter-card-body">
            <LevelFilter
              handles={handles}
              from="paperPicker"
              filterData={papersData}
            />
            <ThemeFilter
              handles={handles}
              from="paperPicker"
              filterData={papersData}
            />
          </div>
        </div>

        <div className="exercice-picker-card card">
          <div className="header-picker">
            <div className="tag-section">
              <span className="tag-point-medium">Papers</span>
              <img className="tag-medium-cross" src={cross_icon} />
            </div>
            <div className="n-exercices">{`Showing ${papersToShow.length} of ${papersData.length} papers`}</div>
          </div>
          <PaperListContainer papers={papersToShow} id={1} handles={handles} />
        </div>
      </main>
    </div>
  );
}

export default PaperPicker;
