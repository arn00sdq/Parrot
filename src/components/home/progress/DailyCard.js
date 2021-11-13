import DailyContainer from './DailyContainer';
import treasure from '../../../assets/img/treasure.png';
import feather_icon from '../../../assets/img/feather-icon.jpg';

function DailyCard(props){
    return(
        <div className="progress-card">
            <div className="progress-title-card">{props.titleCard}</div>
            <DailyContainer imgReward={treasure} dailyText='Réalise deux exercices'/>
            <DailyContainer imgReward={feather_icon} dailyText='Consulte un magazine sportif'/>
        </div>
    );
}

export default DailyCard;