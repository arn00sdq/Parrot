import React from 'react';

function RowLecon(lecon) {
    var row = [];    
    for (const [key, value] of Object.entries(lecon)) { 
        if (typeof(value) !== 'number')
            row.push(value)
    }
    return row;
}

function Classic(props) {
    //console.log(props.leconProps)
    return (
        <div className="content-lecon-section" key={props.leconProps.id}>
            {RowLecon(props.leconProps)}
        </div>
    );
}

export default Classic;