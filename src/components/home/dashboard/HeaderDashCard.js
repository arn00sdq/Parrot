import React from 'react';
function HeaderDashCard(props){
    return (
        <div className="header-dash-card">
            <div className="header-dash-text">{props.headerText}</div>
            <div className="help-container">
                <div className="header-dash-text">Aide</div>
                <span className="help-text">Vos trois dernières activités sont sauvegardés<br/> 
                                            Un historique sera implenté à l'avenir dans  defaultUser</span>
                <div className="orange-triangle-down"></div>
            </div>                   
        </div>
    );
}

export default HeaderDashCard;
