import React from 'react';

import ActivityListContainer from '../common/bandItem/activityListContainer'
import { data as exercisesData } from "../../database/exercises";
import ThemeFilter from '../common/filter/themeFilter'
import {bush} from '../../database/images';
import LevelFilter from '../common/filter/levelFilter';

function ExercicePicker({ state, handles }) {

    var exercisesToShow = exercisesData.filter(ex => {
        let corresponds = false;
        state.exercisePicker.selectedThemes.forEach(theme => {
            if (ex.summary.themes.indexOf(theme.name) != -1) {
                corresponds = true;
            }
        })
        return corresponds;
    });

    console.log('exercisesToShow :>> ', exercisesToShow);

    return (
        <div id="root-css">
            <img className="bush2" src={bush} />
            <main>

                <div className="card">
                    <div className="filter-container">
                        <div className="filter-container-header">
                            <div className="title-filter">Search</div>
                        </div>
                        <div className="container-card-body">
                        <LevelFilter handles = {handles} from = "exercisePicker"/>
                        <ThemeFilter handles = {handles} from = "exercisePicker"/>
                        </div>
                    </div>
                </div>

                <div className="exercice-picker-card card">
                    <div className="header-picker">
                        <div className="tag-point-medium">Exercises</div>
                        <div className="n-exercices">{`Showing ${exercisesToShow.length} of ${exercisesData.length} exercises`}</div>
                    </div>
                    <ActivityListContainer
                    from = "exercisePicker"
                        activities={exercisesToShow}
                        handles={handles}
                    />
                    {/* <a href="#" className="button-ex-card">Charger plus</a> */}
                </div>

            </main>
        </div>
    )
}

export default ExercicePicker;
