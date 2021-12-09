import React from 'react';

import PaperListContainer from '../common/bandItem/paperListContainer'
import ThemeFilter from '../common/filter/themeFilter'
import LevelFilter from '../common/filter/levelFilter'

import { bush, pres_perfect } from '../../database/images'
import {data as papersData} from '../../database/papers'


function PaperPicker({ state, handles }) {

    var papersToShow =
    state.paperPicker.selectedThemes.length +
      state.paperPicker.selectedLevels.length 
      == 0
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

                <div className="card">
                    <div className="filter-container">
                        <div className="filter-container-header">
                            <div className="title-filter">Recherche</div>
                        </div>
                        <LevelFilter handles={handles} from = "paperPicker" />
                        <ThemeFilter handles={handles} from = "paperPicker" />
                    </div>
                </div>

                <div className="exercice-picker-card card">
                    <div className="header-picker">
                        <div className="tag-point-medium">Papers</div>
                        <div className="n-exercices">{`Showing ${papersToShow.lentgh} of ${papersData.length} papers`}</div>
                    </div>
                    <PaperListContainer
                        papers={papersToShow}
                        id={1}
                        handles={handles}
                    />

                </div>

            </main>
        </div>
    )
}

export default PaperPicker;
