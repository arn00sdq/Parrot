import React from 'react';
import { Link } from "react-router-dom";
function NavSection(props){
    return (
        <li className="nav-section">
            {/*<Link to={props.value.route} className="nav-text current-page"></Link>*/}
            <Link to={props.value.route}  className="nav-icon "><img src={props.value.icon}></img>{props.value.text}</Link>
        </li>
    );
}

export default NavSection;