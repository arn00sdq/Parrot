import React from 'react';
function PictExSection(props){
    return (
        <div className="picture-exercice-section">
            <img src={props.img} class="picture-exercice"/>
            <select class="word-picker">
                <option className="opt-word">{props.opt}</option>
                <option className="opt-word">{props.opt}</option>
            </select>
        </div>
    );
}

export default PictExSection;