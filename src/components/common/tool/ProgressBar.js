import React from 'react';


function ProgressBar(props) {

    return (
        <div className="progress" style={{ width: props.width }}>
            <div className="progress-bar" style={{ width: props.progress}}></div>
        </div>

    )
}

export default ProgressBar;