import React from 'react';

import Checkbox from '../tool/Checkbox'
import Slider from '../tool/Checkbox'
import {data as themes} from "../../../database/themes"
function RowThemeContainer(props) {

    let row = [];
    for (let i = 0; i < props.props.length; i++) {
        row.push(
            <Checkbox label={props.props[i]} />
        )
    }
    return row;
}

//fromPage = source de l'element dont on devra modifier le modele
function ThemeContainer(props) {
    let row = [];
    for (let [key, value] of Object.entries(props.content)) {
        row.push(
            <div className="filter-container">
                <div className="title-filter-container">{key.toString()}</div>
                    <ul>
                        {RowThemeContainer(value)}
                    </ul>
                    {/*<Slider className="slider"/>*/}
            </div>
        )
    }
    return row;
}

export default ThemeContainer;