import React from 'react';
import ActivityCompleted from "../../ActivityCompleted";
function Classic({reward, content, currentStep,steps, handles }) {

    const [isContainerActive, setIsContainerActive] = React.useState(false);

    const toggleIn = () => {
        setIsContainerActive(true);
    };

    const toggleOut = () => {
        setIsContainerActive(false);
    };
    var active = currentStep == steps - 1  ? "active" : "";

    console.log('content :>> ', content);
    return (
        <div className="classic-body" key={currentStep}>
            {content}
            <ActivityCompleted reward={reward} active={active} />
        </div>
    );
}

export default Classic;