import React from 'react';
function NavSection({src,href,text}){
    return (
        <div className="nav-section">
            <a href={href} className="nav-text current-page">{text}</a>
            <img src={src} className="nav-icon"/>
        </div>
    );
}

export default NavSection;