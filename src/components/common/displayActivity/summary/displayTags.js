import React from 'react';

function tagDisplay({props}){
    const row=[];
    console.log("themes : ", props)
    if(typeof props === 'object'){
        for (const [key, value] of Object.entries(props.elt)){
            row.push(<div key={value} className="tag-point-small">{value}</div>)
        }
    }else{
        row.push(<div key={props} className="level-tag">{props}</div>)
    }
    return row;
}

function DisplayTags(props){
    console.log(`propsdisplaytags`, props)
    return (
        <div className="row-section-summarize">
            <div className="title-row-summarize">Themes: </div>
            <div className="row-content-summarize">
                {tagDisplay(props)}
            </div>
        </div>
    )
}

export default DisplayTags;