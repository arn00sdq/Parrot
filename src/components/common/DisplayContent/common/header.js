import React from 'react';
import {cross} from '../../../../assets/img/index'

function HeaderDisplayContent(props) {
    return (
        <div className="header-exercice">
            <div className="title-exercice">{props.title}</div>
            <div className="progress-exercice-bar">
                <img src={cross} className="cross"></img>
                <div className="large-bar">
                    <div className="orange-bar"></div>
                </div>
            </div>
        </div>
    );
}

export default HeaderDisplayContent;