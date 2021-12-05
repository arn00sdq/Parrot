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
    console.log(props)
    return (
        <div className="classic-body" key={props.content.step}>
            {RowLecon(props.content.text)}
        </div>
    );
}

export default Classic;