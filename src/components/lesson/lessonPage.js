import React from 'react';
import Displaylesson from "../common/displayActivity/lesson/displayLecon";
import DisplaySummary from "../common/displayActivity/summary/displaySummary";
import { data as lessonData } from "../../database/lessons";

function LessonPage({ state, handles }) {
    var lesson = lessonData;
    var id = state.lessonPage.lessonId;
    var step = state.lessonPage.step;
    var currentlesson = lesson.find((e) => {
        return e.id == id;
    });
    console.log(currentlesson)
    return (
        <div id="root-css">
            <main>
                <DisplaySummary
                    name={`${id} ${": "} ${currentlesson.type}`}
                    summary={currentlesson.summary}
                />
                <Displaylesson
                    lesson={currentlesson}
                    step={step}
                    handles={handles}
                />
            </main>
        </div>
    )
}

export default LessonPage;
