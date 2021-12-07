import React from 'react';

import Checkbox from '../tool/Checkbox'

function RowTimeContainer(props){
    
    let row= [];
    for(let i = 0; i < props.props.length; i++){
        row.push(<Checkbox key={props.props[i]} label={props.props[i]}/>)
    }
    return row;
}

function TimeContainer(props){
    let row = [];
    for(let [key,value]of Object.entries(props.content)){
        row.push( 
            <div className="filter-container">
                <div className="title-filter-container">Durée</div>
                <ul>
                    {RowTimeContainer(value)}
                </ul>
                    
                {/*<Slider className="slider"/>*/}
            </div>
        )
    }
    return row ;
}

export default TimeContainer;