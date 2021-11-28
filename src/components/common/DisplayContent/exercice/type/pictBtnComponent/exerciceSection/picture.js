import React from 'react';
function PictExSection(props){
    return (
        <div className="picture-exercice-section">
            <img src={props.img} className="picture-exercice"/>
            <select className="word-picker">
                <option className="opt-word">{props.opt}</option>
                <option className="opt-word">{props.opt}</option>
            </select>
        </div>
    );
}

export default PictExSection;