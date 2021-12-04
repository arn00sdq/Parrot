import React from 'react';
import Reward from '../reward/Reward';
import { Link } from "react-router-dom";
import {
    clock_icon, right_arrow, treasure

} from '../../../database/images'

function PictTimeContent(value, id, handles) {

    const handleButtonClick = (e) => {
        e.preventDefault();

        const {
            target: { value },
        } = e;
        handles.handleExerciseRedirection(value)
    }

    let row = [];
        console.log(id)
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
                        <Link to="exercicePage"> 
                            <button className="orange-arrow" value={"EX"+2} onClick={(e) => handleButtonClick(e)}  src={right_arrow} /> 
                        </Link>
                    </div>

                </div>
            </div>)

    return row;

}

function PictTimeContainer({ content, id,handles }) {
    let row = [];
    for (let [key, value] of Object.entries(content.exercice)) {
        row.push(PictTimeContent(value, id[key], handles));
    }

    return row;
}

export default PictTimeContainer;