import React from 'react';
import { Link } from "react-router-dom";

function NavSection({content}) {
    const classLink = content.route != "toiecPage" ? "nav-icon text-header" : "nav-toiec-test text-header";
    return (
        <li className="nav-section" >
            
            <Link to={content.route} key={content.text} className={classLink}>{<img src={content.icon} />} {content.text}</Link>
        </li>
    );
}

export default NavSection;
