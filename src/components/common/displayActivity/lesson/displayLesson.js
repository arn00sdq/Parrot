import Classic from './type/classic';
import React, { useState } from 'react';
import HeaderContent from '../common/headerContent'
import FooterContent from '../common/footerContent'

function typeLesson(lesson, currentStep, handles) {
  const row = [];
  console.log(`lesson`, lesson)
  switch (lesson.type) {
    case "Classic":
    const currentStepContent = lesson.content.stepsContent[currentStep];
      return (
        <Classic
          content={currentStepContent}
          currentStep={currentStep}
          handles={handles}
        />
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

function DisplayLesson({ lesson, step, handles, from }) {
  return (
    <div className="lesson-card">
      <HeaderContent
        title={lesson.title}
        steps={lesson.content.stepsContent.length}
        currentStep={step}
      />
      {typeLesson(lesson, step, handles)}
      <FooterContent handles={handles} currentStep={step} from={from}/>
    </div>
  );
}

export default DisplayLesson;