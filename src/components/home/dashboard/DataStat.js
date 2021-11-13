function DataStat(props){
    return (
        <div className="center-align-infos">
            <div className="selection-container-text">{props.title}</div>
            <div className="stat-score-text">{props.score}</div>
        </div>
    );
}

export default DataStat;