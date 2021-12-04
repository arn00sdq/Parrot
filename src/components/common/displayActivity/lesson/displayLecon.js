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
<<<<<<< HEAD
}

function displayLecon(props) {
=======
  }
  
  function DisplayLecon({ lesson }) {
    console.log(`displayExercise`, lesson)
  
    const [currentStep, setCurrentStep] = useState(0);
    console.log(lesson)
>>>>>>> d13519c0dcb7b725ceb0c7c76dd78f9a4223f4cb
    return (
      <div className="card page-exercice-card">
        <div className="page-exercice-container">
        <HeaderContent title = {lesson.title} steps = {lesson.content.steps} currentStep = {currentStep}/>
            {typeLecon(lesson,currentStep)}
        <FooterContent/>
        </div>
      </div>
    );
  }
  
  export default DisplayLecon;