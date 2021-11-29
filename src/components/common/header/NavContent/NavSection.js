import React from 'react';
import { Link } from "react-router-dom";
function NavSection(props){
    console.log(props.value)
    return (
        <li className="nav-section">
            {/*<Link to={props.value.route} className="nav-text current-page"></Link>*/}
            <Link to={props.value.route}  className="nav-icon text-header">{props.value.text}</Link>
        </li>
    );
}

export default NavSection;