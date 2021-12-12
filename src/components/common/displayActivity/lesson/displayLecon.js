import Classic from './type/classic';
import React, { useState } from 'react';
import HeaderContent from '../common/headerContent'
import FooterContent from '../common/footerContent'

function typeLecon(lesson, currentStep, handles) {
  const row = [];
  switch (lesson.type) {
    case "Classic":
      return (
        <Classic
          content={lesson.content}
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

function DisplayLecon({ lesson, step, handles }) {
  
  return (
    <div className="lesson-card">
      <HeaderContent
        title={lesson.title}
        steps={lesson.content.steps}
        currentStep={step}
      />
      {typeLecon(lesson, step, handles)}
      <FooterContent 
        handles = {handles}
      />
    </div>
  );
}

export default DisplayLecon;