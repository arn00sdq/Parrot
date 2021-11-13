function ActivityContainer(props){
    return (
        <div className="activity-container">
            <div className="circular-progress">
                <div className="inner-circle">
                        <div className="circular-value-container">100%</div>
                    </div>
            </div>
            <div className="main-text-card">Les temps du passé. Ex 4</div>
            <div className="text-resume">Reprendre</div>
            <img className="chest-reward" src="../../../assets/right-orange-arrow.png"/>
        </div>
    );
}

export default ActivityContainer;