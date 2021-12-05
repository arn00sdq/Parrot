import React from 'react';
import Reward from '../reward/Reward';
import handlePickerItem from './handlePickerItem'
import { Link,useNavigate } from "react-router-dom";
import {
    history

} from '../../../database/images'

function CardContent(value,id,handles) {
    const navigate = useNavigate();
    const handleButtonClick = (e) => {
        e.preventDefault();

        const {
            target: { value },
        } = e;
        handles.handleExerciseRedirection(value)
        navigate('/paperPage');
    }
    let row = [];
    for (let i = 0; i < value.length; i++) {
        console.log(value)
        row.push(
            <div className="paperCard">
                <img src={history} className="img-paperCard" />
                <div className="content-paperCard">
                    <div className="date-paperCard">{value[i].date}</div>
                    <div className="title-paperCard">{value[i].title}</div>
                    <div className="text-paperCard">{value[i].text}</div>
                    <button className="button-card" value={"EX" + 2} onClick={(e) => handleButtonClick(e)} >READ</button>
                </div>
            </div>
        )
    }
    return row;
}

function CardContainer({ content, id, handles }) {
    let row = [];
    var values = Object.keys(content);
    
    for (let [key, value] of Object.entries(content)) {
        const index = values.indexOf(key);
        row.push(
            <div className="cardContent-container">
                <div className="cardContent-header-container">
                    <div className="title-header">{values[index]}</div>
                </div>
                <hr className="hr-cardContent"/>
                <div className="paperCard-Container">
                    {CardContent(value, id, handles)}
                </div>
            </div>
        )


    }

    return row;
}

export default CardContainer;