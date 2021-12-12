import React from 'react';
import {cross_icon} from '../../../../database/images'

function HeaderContent({title,steps,currentStep}) {
    return (
        <div className="header-content">
            <div className="title-content">{title}</div>
            <div className="progress-bar-section">
                <div>{(currentStep / steps) * 100 + "%"}</div>
                <div className="progress-content-bar">
                    <img src={cross_icon} className="cross"></img>
                    <div className="progress-step">
                        <div className="fill a" style={{width: (currentStep / steps) * 100 + "%"}}></div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default HeaderContent;