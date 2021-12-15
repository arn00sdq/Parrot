import React from 'react';
import ActivityCompleted from "../../ActivityCompleted";
function Classic({title, reward, content, currentStep, steps, handles, isFinished, from }) {


    var active = currentStep == steps - 1 ? "active" : "";

    console.log('content :>> ', content);
    return (
        <>
            <div className={isFinished == false ? "classic-body" : "classic-body af-opacity"} key={currentStep}>
                {content}

            </div>
            <ActivityCompleted title={title} reward={reward} active={active} isFinished={isFinished} handles={handles} from={from} />
        </>
    );
}

export default Classic;