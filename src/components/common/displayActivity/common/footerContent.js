import React from "react";
import { next_arrow, previous_arrow } from "../../../../database/images";
function FooterContent({ currentStep, handles }) {
  const handleButtonClick = (e) => {
    e.preventDefault();

    const {
      target: { value },
    } = e;
    if (value == "1") {
      handles.handleLessonNextStep("lessonPage");
    } else {
    }
  };
  return (
    <>
      <div className="footer-lesson-container">
        <img
          src={previous_arrow}
          className="footer-arrow"
          onClick={(e) => handleButtonClick(e)}
          value="previous"
        />
        <div className="num-block">
          <p className="num-section-less">{currentStep}</p>
        </div>
        <img
          src={next_arrow}
          className="footer-arrow"
          onClick={(e) => handleButtonClick(e)}
          value="next"
        />
      </div>
    </>
  );
}
export default FooterContent;
