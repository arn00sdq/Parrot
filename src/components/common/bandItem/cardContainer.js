import React from 'react';
import Reward from '../reward/Reward';
import handlePickerItem from './handlePickerItem'
import { Link, useNavigate } from "react-router-dom";
import {
    history

} from '../../../database/images'

function CardContent(value, id, handles) {
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
        row.push(
            <div className="paperCard">
                <div className="box">
                    <div className="content-paperCard">
                        <img src={history} className="img-paperCard" />
                        <div className="date-paperCard">{value[i].date}</div>
                        <div className="title-paperCard">{value[i].title}</div>
                        <div className="text-paperCard">{value[i].text}</div>
                        <button className="btn-paperCard" value={"EX" + 2} onClick={(e) => handleButtonClick(e)} >READ</button>
                    </div>
                </div>

            </div>
        )
    }
    return row;
}

function CardContainer({ content, id, handles }) {
    let row = [];
    var values = Object.keys(content);

    row.push(
        <div className="cardContent-container">
            <div className="cardContent-header-container">
                <div className="title-header">{values[0]}</div>
            </div>
            <hr className="hr-cardContent" />
            <div className="paperCard-Container">
                {CardContent(content[values[0]], id, handles)}
            </div>
        </div>
    )

    return row;
}

export default CardContainer;