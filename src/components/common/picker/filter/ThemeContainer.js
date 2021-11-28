import React from 'react';

import Checkbox from '../../tool/Checkbox'
import Slider from '../../tool/Checkbox'

function RowThemeContainer(props){
    
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

function ThemeContainer(props){
    let row = [];
    console.log(props)
    for(let [key,value]of Object.entries(props.content)){
        row.push( 
        <div className="theme-container">
            <div className="title-theme-container">{key.toString()}</div>
            <div className="content-theme">
                <div key={value.id} className="checkbox-section">
                    {RowThemeContainer(value)}
                </div>
                {/*<Slider className="slider"/>*/}
            </div>
        </div>
        )
    }
    return row ;
}

export default ThemeContainer;