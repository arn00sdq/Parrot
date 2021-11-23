import React from 'react';
import { Link } from "react-router-dom";
function NavSection({src,href,text,route}){
    return (
        <div className="nav-section">
            <Link to={route} className="nav-text current-page">{text}</Link>
            <Link to={route} className="nav-icon"/>
        </div>
    );
}

export default NavSection;