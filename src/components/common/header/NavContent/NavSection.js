import React from 'react';
import { Link } from "react-router-dom";
function NavSection(props){
    console.log(props.value)
    return (
        <div className="nav-section">
            <Link to={props.value.route} className="nav-text current-page">{props.value.text}</Link>
            <Link to={props.value.icon} className="nav-icon"/>
        </div>
    );
}

export default NavSection;