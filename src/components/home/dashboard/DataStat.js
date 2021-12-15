import React from 'react';
function DataStat({title,score}){
    return (
        <div className="center-align-infos">
            <div className="selection-container-text">{title}</div>
            <div className="stat-score-text">{score}</div>
        </div>
    );
}

export default DataStat;