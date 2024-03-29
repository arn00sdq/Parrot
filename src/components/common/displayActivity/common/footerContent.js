import React from "react";
import { next_arrow, previous_arrow,chevron_left,chevron_right } from "../../../../database/images";


function FooterContent({id, handles,totalStep, currentStep,from,isFinished }) {
    const handleButtonClick = (value) => {
        switch (value) {
            case "-1":
                handles.handlePreviousStep(from, (currentStep-2)/totalStep * 100);
                break;
            case "1" :
            console.log(`totalStep, currentStep`, totalStep, currentStep)
                handles.handleNextStep(from, (currentStep+2)/totalStep * 100);
                break;
            case true:
                handles.handleEndActivity(true,id,from);
                break;

            default:
                break;
        }
    };

    var active = currentStep == totalStep - 1 ? "active" : "";

    return (
        <>
            <div className="footer-container">
                <img
                    src={chevron_left}
                    onClick={(currentStep < 1) || (isFinished == true) ? undefined : () => handleButtonClick("-1")}
                    className={(currentStep < 1) || (isFinished == true) ? "chevron-arrow button-disable" : "chevron-arrow"}
                />
                <div class={isFinished == true ? "button-disable footer-current-number" : "footer-current-number"} >{currentStep+1}</div>
                <img
                    src={chevron_right}
                    onClick={(currentStep == totalStep -1) || (isFinished == true)  ? undefined : () => handleButtonClick("1")}
                    className={(currentStep == totalStep -1) || (isFinished == true) ? "chevron-arrow button-disable" : "chevron-arrow"}
                />
                <button onClick={() => handleButtonClick(true)} className={`btn-finish-activity  ${active == "active" ? "active": ""}`}>Finir</button>
            </div>
        </>
    );
}
export default FooterContent;
