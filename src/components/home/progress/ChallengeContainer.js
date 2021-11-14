import ready_icon from '../../../assets/img/ready-icon.png';

function ChallengeContainer(props){
    return (
        <div className="objectif-container">
            <div className="circular-progress">
                <div className="inner-circle">
                    <div className="circular-value-container">100%</div>
                </div>
            </div>
            <div className="progress-text-card">{props.ExText}</div>
                <img className="chest-reward" src={ready_icon}/>
        </div>
    );
}

export default ChallengeContainer;