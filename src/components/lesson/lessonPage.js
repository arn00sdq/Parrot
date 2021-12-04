import React from 'react';
import DisplayActivity from '../common/displayActivity/displayActivity';

function LessonPage(props) {

    return (
        <div id="root-css">
            <main>{<DisplayActivity id={"LE1"/* props.state.exercisePage.exerciseId */} />}</main>
        </div>
    )
}

export default LessonPage;
