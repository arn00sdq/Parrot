import React from 'react';

function RowContentSummarize(props){
    return (
        <div className="row-section-summarize">
            <div className="title-row-summarize">{props.title} :</div>
            <div className="row-content-summarize">
                {() => {
                    const row=[];
                    if(typeof props === 'object'){
                        for (const [key, value] of Object.entries(props.elt)){
                            row.push(<div key={value} className="tag-point-small">{value}</div>)
                        }
                    }else{
                        row.push(<div key={props} className="level-tag">{props}</div>)
                    }
                    return row;
                }}
            </div>
        </div>
    )
}

export default RowContentSummarize;