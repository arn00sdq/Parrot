import React from 'react';
import {cross} from '../../../../database/images'

function HeaderDisplayContent(props) {
    return (
        <div className="header-content">
            <div className="title-content">{props.exercise.title}</div>
            <div className="progress-bar-section">
                <div>{(props.currentStep / props.exercise.content.steps) * 100 + "%"}</div>
                <div className="progress-content-bar">
                    <img src={cross} className="cross"></img>
                    <div className="large-bar">
                        <div className="orange-bar"></div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default HeaderDisplayContent;