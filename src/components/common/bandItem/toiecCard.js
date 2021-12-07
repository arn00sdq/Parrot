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
    for (let i = 0; i < value.length-1; i++) {
        console.log(value)
        row.push(
            <div className="cardT">
                <div className="circle">
                    <h2>01</h2>
                </div>
                <div class="content">
                    {/*<img src={history} className="img-paperCard" />
                    <div className="date-paperCard">{value[i].date}</div>
                    <div className="title-paperCard">{value[i].title}</div>*/}
                    <p>{value[i].text}</p>
                    <a  value={"EX" + 2} onClick={(e) => handleButtonClick(e)} >READ</a>
                </div>

            </div>
        )
    }
    return row;
}

function ToiecCard({ content, id, handles }) {
    let row = [];
    var values = Object.keys(content);

    console.log(content)
    row.push(
        <div className="toiec-container">
            <div className="cardContent-header-container">
                <div className="title-header">{values[0]}</div>
            </div>
            <div className="containerT">
                {CardContent(content[values[0]], id, handles)}
            </div>
        </div>
    )

    return row;
}

export default ToiecCard;