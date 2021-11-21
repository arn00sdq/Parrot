import React from 'react';
function HeaderDashCard(props){
    return (
        <div className="header-dash-card">
            <div className="header-dash-text">{props.headerText}</div>
            <div className="help-container">
                <div className="header-dash-text">Aide</div>
                <div className="orange-triangle-down"></div>
            </div>                   
        </div>
    );
}

export default HeaderDashCard;
