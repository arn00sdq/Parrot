import React from 'react';
import Reward from '../reward/Reward';
import handlePickerItem from './handlePickerItem'
import { Link,useNavigate } from "react-router-dom";
import {
    clock_icon, right_arrow, treasure

} from '../../../database/images'

function PictTimeContainer({ content, id, handles }) {
    let row = [];
    console.log(content)
    for (let [key, value] of Object.entries(content.exercice)) {
        row.push(PictTimeContent(value, id[key], handles));
    }

    return row;
}

function PictTimeContent(value, id, handles) {
    const navigate = useNavigate();
    const handleButtonClick = (e) => {
        e.preventDefault();

        const {
            target: { value },
        } = e;
        handles.handleExerciseRedirection(value)
        navigate('/lessonPage');
    }

    let row = [];
    row.push(
        <div className={value.className} key={id}>
            <img className="img-ptc" src={value.imgExercice} />
            <div className="time-container">
                <img className="clock" src={clock_icon} />
                <div className="time-shift">{value.time}</div>
            </div>
            <div className="content-ptc-container">
                <div className="header-ptc-container">
                    <div className="title-ptc">{value.title}</div>
                    <div className="validation">{value.state}</div>
                </div>
                <div className="text-ptc">{value.text}</div>
                <div className="footer-ptc">
                    <Reward imgReward="reward" classReward={treasure} />
                    <Link to="/home" >
                        <button className="orange-arrow" value={"LE" + 2} onClick={(e) => handleButtonClick(e)} src={right_arrow} />
                    </Link>
                </div>

            </div>
        </div>)

    return row;

}



export default PictTimeContainer;