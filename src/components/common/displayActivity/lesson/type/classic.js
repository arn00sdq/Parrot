import React from 'react';
import ActivityCompleted from "../../ActivityCompleted";
function Classic({ content, currentStep, handles }) {

    const [isContainerActive, setIsContainerActive] = React.useState(false);

    const toggleIn = () => {
        setIsContainerActive(true);
    };

    const toggleOut = () => {
        setIsContainerActive(false);
    };
    var active = currentStep == 3 ? "active" : "";
    console.log(active)
    console.log('content :>> ', content);
    return (
        <div className="classic-body" key={currentStep}>
            {content}
            <ActivityCompleted active={active} />
        </div>
    );
}

export default Classic;