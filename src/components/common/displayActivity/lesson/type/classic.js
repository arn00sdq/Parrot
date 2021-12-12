import React from 'react';

function Classic({content, currentStep, handles}) {
    console.log('content :>> ', content);
    return (
        <div className="classic-body" key={currentStep}>
            {
            content
            }
        </div>
    );
}

export default Classic;