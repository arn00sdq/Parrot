import React from 'react';

/* function RowLecon(lesson) {
    var row = []; 
    for (const [key, value] of Object.entries(lesson)) { 
        if (typeof(value) !== 'number')
            row.push(value)
    }
    return row;
}
 */
function Classic({content, currentStep, handles}) {
    console.log('content :>> ', content);
    return (
        <div className="classic-body" key={currentStep}>
            {
            /* RowLecon(props.content.text) */
            content
            }
        </div>
    );
}

export default Classic;