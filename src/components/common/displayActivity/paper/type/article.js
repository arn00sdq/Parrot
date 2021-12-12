import React from 'react';



function Article({content, currentStep}) {
    console.log('content :>> ', content);
    return (
        <div className="classic-body" key={currentStep}>
            {content}
        </div>
    );
}

export default Article;