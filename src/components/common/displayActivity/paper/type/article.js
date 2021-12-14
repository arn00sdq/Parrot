import React from 'react';
import ActivityCompleted from "../../ActivityCompleted";


function Article({reward, content, currentStep,steps, handles, isFinished,from }) {
    console.log('content :>> ', content);
    var active = currentStep == steps - 1  ? "active" : "";
    return (
        <>
        <div className={isFinished == false ? "classic-body": "classic-body af-opacity"} key={currentStep}>
            {content}
        </div>
        <ActivityCompleted reward={reward} active={active} isFinished = {isFinished} handles={handles} from={from}/>
        </>
    );
}

export default Article;