import React from "react";
import { next_arrow, previous_arrow,chevron_left,chevron_right } from "../../../../database/images";


function FooterContent({handles, currentStep,from }) {
    const handleButtonClick = (value) => {
        console.log(handles)
        if (value == "1") {
            handles.handleNextStep(from);
        }else{
            handles.handlePreviousStep(from);
        }
    };
    return (
        <>
            <div className="footer-container">
                <img
                    src={chevron_left}
                    onClick={currentStep < 1 ? undefined : () => handleButtonClick("-1")}
                    className="chevron-arrow"
                />
                <div class="footer-current-number">{currentStep + 1}</div>
                <img
                    src={chevron_right}
                    onClick={() => handleButtonClick("1")}
                    className="chevron-arrow"
                />
            </div>
        </>
    );
}
export default FooterContent;
