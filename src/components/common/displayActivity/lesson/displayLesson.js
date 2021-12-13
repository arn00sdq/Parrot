import Classic from './type/classic';
import React, { useState } from 'react';
import HeaderContent from '../common/headerContent'
import FooterContent from '../common/footerContent'

function typeLesson(lesson, currentStep, handles) {
  const row = [];
  console.log(`lesson`, lesson.summary.rewards)
  switch (lesson.type) {
    case "Classic":
    const currentStepContent = lesson.content.stepsContent[currentStep];
      return (
        <Classic
          reward = {lesson.summary.rewards}
          content={currentStepContent}
          currentStep={currentStep}
          steps={lesson.content.stepsContent.length}
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
  const currentStepContent = lesson.content.stepsContent.length;
  return (
    <div className="lesson-card">
      <HeaderContent
        title={lesson.title}
        steps={lesson.content.stepsContent.length}
        currentStep={step}
      />
      {typeLesson(lesson, step, handles)}
      <FooterContent handles={handles} totalStep={currentStepContent} currentStep={step} from={from}/>
    </div>
  );
}

export default DisplayLesson;