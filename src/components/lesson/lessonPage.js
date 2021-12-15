import React from 'react';
import DisplayLesson from "../common/displayActivity/lesson/displayLesson";
import DisplaySummary from "../common/displayActivity/summary/displaySummary";
import { data as lessonsData } from "../../database/lessons";

function LessonPage({ state, handles }) {
    var id = state.lessonPage.lessonId;
    var currentStep = state.lessonPage.step;
    var isFinished = state.lessonPage.end;
   
    var currentLesson = lessonsData.find((e) => {
        return e.id ==  id ;
    });

    return (
        <div id="root-css">
            <main>
                <DisplaySummary
                    name={`${id}`}
                    summary={currentLesson.summary}
                />
                <DisplayLesson
                    lesson={currentLesson}
                    step={currentStep}
                    handles={handles}
                    from="lessonPage"
                    isFinished = {isFinished}
                />
            </main>
        </div>
    )
}

export default LessonPage;
