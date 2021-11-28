import React from 'react';

import Checkbox from '../../tool/Checkbox'
import Slider from '../../tool/Checkbox'

function RowTimeContainer(props){
    
    const [checkedOne, setCheckedOne] = React.useState(false);
    const [checkedTwo, setCheckedTwo] = React.useState(false);
    
    const handleChangeOne = () => {
        setCheckedOne(!checkedOne);
    };
    
    const handleChangeTwo = () => {
        setCheckedTwo(!checkedTwo);
    };
    let row= [];
    for(let i = 0; i < props.props.length; i++){
        row.push(<Checkbox key={props.props[i]} label={props.props[i]} value={checkedOne} onChange={handleChangeOne}/>)
    }
    return row;
}

function TimeContainer(props){
    let row = [];
    console.log(props)
    for(let [key,value]of Object.entries(props.content)){
        row.push( 
            <div className="timer-container">
                <div className="title-theme-container">Durée</div>
                <div className="checkbox-section-timer">
                    {RowTimeContainer(value)}
                </div>
                {/*<Slider className="slider"/>*/}
            </div>
        )
    }
    return row ;
}

export default TimeContainer;