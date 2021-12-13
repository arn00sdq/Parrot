import React from "react";
import { next_arrow, previous_arrow,chevron_left,chevron_right } from "../../../../database/images";


function FooterContent({id, handles,totalStep, currentStep,from }) {
    const handleButtonClick = (value) => {
        switch (value) {
            case "-1":
                handles.handlePreviousStep(from);
                break;
            case "1" :
                handles.handleNextStep(from);
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
                    onClick={currentStep < 1 ? undefined : () => handleButtonClick("-1")}
                    className="chevron-arrow"
                />
                <div class="footer-current-number">{currentStep+1}</div>
                <img
                    src={chevron_right}
                    onClick={currentStep == totalStep -1 ? undefined : () => handleButtonClick("1")}
                    className="chevron-arrow"
                />
                <button onClick={() => handleButtonClick(true)} className={`btn-finish-activity  ${active == "active" ? "active": ""}`}>Finir</button>
            </div>
        </>
    );
}
export default FooterContent;
