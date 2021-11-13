import ChallengeContainer from './ChallengeContainer';
import Reward from '../../reward/Reward';
import treasure from '../../../assets/img/treasure.png';

function ChallengeCard({titleCard}){
    return(
        <div className="progress-card">
            <div className="progress-title-card">{titleCard}</div>
                <ChallengeContainer ExText="Les temps du passé. Ex 6"/>
            <div className="daily-award">
                <Reward imgReward='chest-reward' classReward={treasure}/>
                <Reward imgReward="chest-reward" classReward={treasure}/>
                <Reward imgReward="chest-reward" classReward={treasure}/>
            </div>
        </div>
    );
}

export default ChallengeCard;

