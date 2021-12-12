import React from "react";
import { next_arrow, previous_arrow } from "../../../../database/images";
function FooterContent({ currentStep, handles}) {
  return (
    <>
      <div className="footer-lesson-container">
        <img src={previous_arrow} className="footer-arrow" />
        <div className="num-block">
          <p className="num-section-less">{currentStep}</p>
        </div>
        <img src={next_arrow} className="footer-arrow" />
      </div>
    </>
  );
}

export default FooterContent;
