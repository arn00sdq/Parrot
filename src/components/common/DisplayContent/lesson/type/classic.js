import React from 'react';

function RowLecon(lecon) {
    var row = [];
    console.log(Array.isArray(lecon.subTitle))         
    for (const [key, value] of Object.entries(lecon)) { 
        if (typeof(value) !== 'number')
            row.push(value)
    }
    return row;
}

function Classic(props) {
    return (
        <div className="content-lecon-section" key={props.leconProps.id}>
            {RowLecon(props.leconProps)}
        </div>
    );
}

export default Classic;