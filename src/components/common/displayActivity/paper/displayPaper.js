import React from 'react';
import HeaderContent from '../common/headerContent'
import FooterContent from '../common/footerContent'
import Article from './type/article'

function typeLecon(paper,currentStep,handles) {
    const row = [];
    switch (paper.type) {
        case "Article":
            return ( 
                <Article 
                    content={paper.content} 
                    currentStep={currentStep} 
                    handles={handles}
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

function displayPaper({paper, step, handles}) {
    return (
        <div className="page-exercice-card card">
            <div className="page-exercice-container">
                <HeaderContent 
                    title = {paper.title} 
                    steps = {paper.content.steps} 
                    currentStep = {step}
                />
                {typeLecon(paper,step,handles)}
                <FooterContent/>
            </div>
        </div>
    );
}

export default displayPaper;