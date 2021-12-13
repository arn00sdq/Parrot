import React from 'react';
import DisplayLesson from "../common/displayActivity/lesson/displayLesson";
import DisplaySummary from "../common/displayActivity/summary/displaySummary";
import { data as lessonsData } from "../../database/lessons";

function LessonPage({ state, handles }) {
    var lessons = lessonsData;
    var id = state.lessonPage.lessonId;
    var currentStep = state.lessonPage.step;
    console.log(lessonsData)
    var currentLesson = lessonsData.find((e) => {
        console.log(e.id == id)
        return e.id ==  id ;
    });
    console.log(currentLesson)
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
                />
            </main>
        </div>
    )
}

export default LessonPage;
