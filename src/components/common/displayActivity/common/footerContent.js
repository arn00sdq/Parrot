import React from "react";
import { next_arrow, previous_arrow } from "../../../../database/images";
function FooterContent({ currentStep, handles }) {
  const handleButtonClick = (e) => {
    e.preventDefault();

function FooterContent({handles }) {
    const handleButtonClick = (e) => {
        e.preventDefault();

        const {
            target: { value },
        } = e;
        if (value == "1") {
            handles.handleLessonNextStep("lessonPage");
        }else{
            handles.handleLessonPreviousStep("lessonPage");
        }
    };
    return (
        <>
            <div className="hr-horizontale-exercice"></div>
            <div className="footer-exercice-container">
                <button
                    onClick={(e) => handleButtonClick(e)}
                    value="-1"
                    className="button-displayActivity  button-previous">
                    Previous
                </button>
                <button
                    onClick={(e) => handleButtonClick(e)}
                    value="1"
                    className="button-displayActivity  button-continue">
                    Continuer
                </button>
            </div>
        </>
    );
}
export default FooterContent;
