import React from 'react';
import ActivityCompleted from "../../ActivityCompleted";
function Classic({ reward, content, currentStep, steps, handles, isFinished, from }) {

    const [isContainerActive, setIsContainerActive] = React.useState(false);

    const toggleIn = () => {
        setIsContainerActive(true);
    };

    const toggleOut = () => {
        setIsContainerActive(false);
    };
    var active = currentStep == steps - 1 ? "active" : "";

    console.log('content :>> ', content);
    return (
        <>
            <div className={isFinished == false ? "classic-body" : "classic-body af-opacity"} key={currentStep}>
                {content}

            </div>
            <ActivityCompleted reward={reward} active={active} isFinished={isFinished} handles={handles} from={from} />
        </>
    );
}

export default Classic;