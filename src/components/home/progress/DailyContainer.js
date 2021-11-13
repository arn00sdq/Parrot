function DailyContainer(props){
    return (
        <div className="objectif-container">
            <img className="chest-reward" src={props.imgReward}/>
            <div className="progress-text-card">{props.dailyText}</div>
            <div className="container-bar-xp">
                <div className="small-text-xp">5/10 xp</div>
                <div className="small-xp-bar">
                    <div className="progress-xp-bar" style={{backgroundColor:'#F9A014',height:'5px',width:'50%',borderRadius: '10px'}}></div>
                    </div>   
            </div>   
        </div>
    );
}

export default DailyContainer;