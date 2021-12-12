import React from 'react';
import HeaderContent from '../common/headerContent'
import FooterContent from '../common/footerContent'
import Article from './type/article'

function typeArticle(paper,currentStep,handles) {
    const row = [];
    const currentStepContent = paper.content.stepContent[currentStep]
    
    switch (paper.type) {
        case "Article":
            return ( 
                <Article 
                    content={currentStepContent} 
                    currentStep={currentStep}
                />
            )
            break;
        case "1002":
            //display lec 1
            break;
        case "1003":
            //display lec 2
            break;
    }
    return row;
}

function displayPaper({paper, step, handles,from}) {

    return (
        <div className="paper-Card">
                <HeaderContent 
                    title = {paper.title} 
                    steps = {paper.content.steps} 
                    currentStep = {step}
                />
                {typeArticle(paper,step,handles)}
                <FooterContent handles={handles} currentStep={step} from ={from}/>
        </div>
    );
}

export default displayPaper;