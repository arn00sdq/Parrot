import React from 'react';
import Reward from '../reward/Reward';

import {
    history

} from '../../../assets/img/index'

function CardContent(value,index) {
    let row = [];
    for (let i = 0; i < value.length; i++) {
        row.push(
            <div className="paperCard">
                <img src={history} className="img-paperCard" />
                <div className="content-paperCard">
                    <div className="date-paperCard">{value[index].date}</div>
                    <div className="title-paperCard">{value[index].title}</div>
                    <div className="text-paperCard">{value[index].text}</div>
                    <div className="button-card">READ</div>
                </div>
            </div>
        )
    }
    return row;
}

function CardContainer(props) {
    let row = [];
    var values = Object.keys(props.content);

    for (let [key, value] of Object.entries(props.content)) {
        const index = values.indexOf(key);

        row.push(
            <div className="cardContent-container">
                <div className="cardContent-header-container">
                    <div className="title-header">{values[index]}</div>
                </div>
                <hr className="hr-cardContent"/>
                <div className="paperCard-Container">
                    {CardContent(value,index)}
                </div>
            </div>
        )


    }

    return row;
}

export default CardContainer;