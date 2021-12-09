import React from 'react';
import { Link } from "react-router-dom";

function NavSection({content}) {
    const classLink = content.route != "toiecPage" ? "nav-icon text-header" : "nav-toiec-test text-header";
    return (
        <div className="nav-section" >
            
            <Link to={content.route}  className={classLink}>{<img src={content.icon} />} {content.text}</Link>
        </div>
    );
}

export default NavSection;
