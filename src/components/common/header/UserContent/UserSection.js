import React from 'react';

import {flag_britain} from '../../../../database/images'

function DropdownAssignment(value) {

    if (value[0] == "img") { // || a venir peut etre
        if (value[3] == "dropdown") {
            return (
                <div className="item">
                    <img src={value[1]} key={value[2]} className={value[2]} />
                    <div className="dropdown-menu" role="menu">
                        <ul className="menu-item-link">
                            <img src={flag_britain} className="dropdown-item-img"/>
                            <img src={flag_britain} className="dropdown-item-img"/>
                            <img src={flag_britain} className="dropdown-item-img"/>
                            <img src={flag_britain} className="dropdown-item-img"/>
                            <img src={flag_britain} className="dropdown-item-img"/>
                            <img src={flag_britain} className="dropdown-item-img"/>
                        </ul>
                    </div>
                </div>)
        } else {
            return (<img src={value[1]} key={value[2]} className={value[2]} />)
        }

    } else {
        return (<p class={value[2]} key={value[1]} >{value[1]}</p>)
    }
}

function UserSection(props) {
    var row = [];
    for (const [key, value] of Object.entries(props.arr)) {
        row.push(DropdownAssignment(value))

    }
    return row;
}

export default UserSection;