import Classic from './type/classic';
import React, { useState } from 'react';
import HeaderContent from '../common/headerContent'
import FooterContent from '../common/footerContent'

function typeLecon(lesson,currentStep) {
    const row = [];
    switch (lesson.type) {
      case "Classic":
        console.log(lesson.type == "Word2Img")
        return (
          <Classic content={lesson.content} currentStep={currentStep} />
        );
        // <PictBtn />
        break;
      case "r":
        //display ex2
        break;
      case "0003":
        //display ex3
        break;
    }
    return row;
}

function DisplayLecon({lesson, step, handles}) {
    return (
      <div className="card page-exercice-card">
        <div className="page-exercice-container">
        <HeaderContent title = {lesson.title} steps = {lesson.content.steps} currentStep = {step}/>
            {typeLecon(lesson,step)}
        <FooterContent/>
        </div>
      </div>
    );
  }
  
  export default DisplayLecon;