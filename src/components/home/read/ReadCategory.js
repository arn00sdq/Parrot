import React from 'react';
function ReadCategory(props){
    return (
        <div className="read-category">
            <img src={props.img} className="category-icon"/>
            <div className="text-read-category">{props.text}</div>
        </div>
    )
}

export default ReadCategory;