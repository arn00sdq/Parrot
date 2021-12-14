import React from 'react';
import HeaderContent from '../common/headerContent'
import FooterContent from '../common/footerContent'
import Article from './type/article'

function typeArticle(paper,currentStep,handles, isFinished,from) {
    const row = [];
    const currentStepContent = paper.content.stepContent[currentStep]
    
    switch (paper.type) {
        case "Article":
            return ( 
                <Article 
                    reward = {paper.summary.rewards}
                    content={currentStepContent} 
                    currentStep={currentStep}
                    steps={paper.content.stepContent.length}
                    handles={handles}
                    isFinished = {isFinished}
                    from = {from}
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

function displayPaper({paper, step, handles,from, isFinished }) {
    
    const currentStepContent = paper.content.stepContent.length;

    return (
        <div className="paper-Card">
                <HeaderContent 
                    title = {paper.title} 
                    steps = {paper.content.steps} 
                    currentStep = {step}
                />
                {typeArticle(paper,step,handles, isFinished,from)}
                <FooterContent id={paper.id} handles={handles} totalStep={currentStepContent} currentStep={step} from={from}/>
        </div>
    );
}

export default displayPaper;