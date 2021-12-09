import React from 'react';

import PaperListContainer from '../common/bandItem/paperListContainer'
import ThemeFilter from '../common/filter/themeFilter'
import { bush, pres_perfect } from '../../database/images'
import {data as papersData} from '../../database/papers'


function PaperPicker({ state, handles }) {

    const papersToShow = papersData
    return (
        <div id="root-css">
            <img className="bush2" src={bush} />

            <main>

                <div className="card">
                    <div className="filter-container">
                        <div className="filter-container-header">
                            <div className="title-filter">Recherche</div>
                        </div>
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
