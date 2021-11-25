import React from 'react';
const Row = (props) => {
    const row=[];
    if(typeof props === 'object'){
        for (const [key, value] of Object.entries(props.elt)){
            row.push(<div key={value} className="flag-point-small">{value}</div>)
        }
    }else{
        row.push(<div key={props} className="level-flag">{props}</div>)
    }
    return row;
}

function RowContentSummarize(props){
    return (
        <div className="row-section-summarize">
            <div className="title-row-summarize">{props.title}</div>
            <div className="row-content-summarize">
                {Row(props.row)}
            </div>
        </div>
    )
}

export default RowContentSummarize;