import React from 'react';
import Reward from '../reward/Reward';
import { Link, useNavigate } from "react-router-dom";
import {
    basket_jump, PhotosImg
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
    var keys = Object.keys(PhotosImg)
    for (let i = 0; i < propsValues.length-1; i++) {
        row.push(
            <div className="cardT">
                <div className="circle">
                    <img src={PhotosImg[keys[ keys.length * Math.random() << 0]]} className="img-toiec" />
                    <h2>01</h2>
                </div>
                <div class="content">
                    {/*<img src={history} className="img-paperCard" />
                    <div className="date-paperCard">{value[i].date}</div>
                    <div className="title-paperCard">{value[i].title}</div>*/}
                    <div className="title-content">Titre Card</div>
                    <p>{propsValues[i].text}</p>
                    <a  propsValues={"EX" + 2} onClick={(e) => handleButtonClick(e)} >READ</a>
                </div>

            </div>
        )
    }
    return row;
}

export default ToiecCard;