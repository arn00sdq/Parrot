import React from 'react';

function Word2img(props){
    console.log(`props`, props)
    console.log(`props.content`, props.content)
        return (
        <div className="picture-exercice-section">
            <img src={props.content.images[props.step].url} className="picture-exercice"/>
            <select className="word-picker">
                <option className="opt-word">{props.content.words[props.step][0]}</option>
                <option className="opt-word">{props.content.words[props.step][1]}</option>
                <option className="opt-word">{props.content.words[props.step][2]}</option>
                <option className="opt-word">{props.content.words[props.step][3]}</option>
            </select>
        </div>
    );
}

export default Word2img;