import React from 'react';
function PaperCard(props){
    return(
        <div className="paper-card">
            <div className="paper-infos-card">
                <div className="paper-category-text">{props.category}</div>
                <div className="paper-title-text">{props.title}</div>
                <div className="paper-date-text">{props.date}</div>
                <div className="paper-main-text">{props.text}</div>
                <div className="paper-read-text"><u>Continue reading</u></div>
            </div>
            <img className="paper-img" src={props.img}/>
        </div>
    );
}

export default PaperCard;