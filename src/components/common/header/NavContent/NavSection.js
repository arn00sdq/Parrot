import React from 'react';
import { Link } from "react-router-dom";

function DropdownAssignment(props,route,classLink) {
    let row = []
    if (route == "lessonPicker") { // || a venir peut etre
        row.push(<Link to={props.value.route} className={classLink}> {props.value.text}</Link>)

    }else{
        row.push(<Link to={props.value.route} className={classLink}> {props.value.text}</Link>)
    }
    return row;
}

function NavSection(props) {
    const classLink = props.value.route != "toiecPage" ? "nav-icon text-header" : "nav-toiec-test text-header";
    return (
        <li className="nav-section">
            {DropdownAssignment(props,props.value.route,classLink)}
        </li>
    );
}

export default NavSection;

/*<div class="item">
                
                {<div className="dropdown-menu" role="menu">
                    <ul className="menu-item-link">
                        <li className="dropdown-item">Grammar</li>
                        <li className="dropdown-item">Lecon</li>
                    </ul>
                </div>}
            </div>*/