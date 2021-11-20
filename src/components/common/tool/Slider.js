import React from 'react';
function Slider(props){
    return(
        <input className={props.class} type="range" orient="vertical" />
    );
}

export default Slider;