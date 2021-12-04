import React from 'react';

function RowLecon(lesson) {
    var row = []; 
    for (const [key, value] of Object.entries(lesson)) { 
        if (typeof(value) !== 'number')
            row.push(value)
    }
    return row;
}

function Classic(props) {
<<<<<<< HEAD
=======
    console.log(props)
>>>>>>> d13519c0dcb7b725ceb0c7c76dd78f9a4223f4cb
    return (
        <div className="content-lesson-section" key={props.content.step}>
            {RowLecon(props.content.text)}
        </div>
    );
}

export default Classic;