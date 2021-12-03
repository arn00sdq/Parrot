import React from 'react';

function RowLecon(lesson) {
    var row = []; 
    console.log("dd")   
    for (const [key, value] of Object.entries(lesson)) { 
        if (typeof(value) !== 'number')
            row.push(value)
    }
    return row;
}

function Classic(props) {
    //console.log(props.lessonProps)
    return (
        <div className="content-lesson-section" key={props.lessonProps.id}>
            {RowLecon(props.lessonProps)}
        </div>
    );
}

export default Classic;