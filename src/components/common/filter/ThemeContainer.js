import React from 'react';

import Checkbox from '../tool/Checkbox'
import Slider from '../tool/Checkbox'

function RowThemeContainer(props) {

    let row = [];
    for (let i = 0; i < props.props.length; i++) {
        row.push(
            <Checkbox key={props.props[i]} label={props.props[i]} />
        )
    }
    return row;
}

function ThemeContainer(props) {
    let row = [];
    for (let [key, value] of Object.entries(props.content)) {
        row.push(
            <div className="theme-container">
                <div className="title-theme-container">{key.toString()}</div>
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