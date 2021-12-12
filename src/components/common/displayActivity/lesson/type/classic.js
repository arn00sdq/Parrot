import React from 'react';

function RowLecon(lesson,currentStep) {
    var row = []; 
    row.push(lesson[currentStep])
    
    return row;
}

function Classic(props) {
    console.log()
    return (
        <div className="classic-body" key={props.content.step}>
            {RowLecon(props.content.text,props.currentStep)}
        </div>
    );
}

export default Classic;