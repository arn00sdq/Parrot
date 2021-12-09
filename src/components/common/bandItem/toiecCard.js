import React from 'react';
import Reward from '../reward/Reward';
import { Link, useNavigate } from "react-router-dom";
import {
    history

} from '../../../database/images'

function ToiecCard({ content, id, handles }) {

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
    var values = Object.keys(content);
    const propsValues = content[values[0]];
    for (let i = 0; i < propsValues.length-1; i++) {
        row.push(
            <div className="cardT">
                <div className="circle">
                    <h2>01</h2>
                </div>
                <div class="content">
                    {/*<img src={history} className="img-paperCard" />
                    <div className="date-paperCard">{value[i].date}</div>
                    <div className="title-paperCard">{value[i].title}</div>*/}
                    <p>{propsValues[i].text}</p>
                    <a  propsValues={"EX" + 2} onClick={(e) => handleButtonClick(e)} >READ</a>
                </div>

            </div>
        )
    }
    return row;
}

export default ToiecCard;