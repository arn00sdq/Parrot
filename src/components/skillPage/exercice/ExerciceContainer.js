import {
    clock_icon,right_arrow,treasure

} from '../../../assets/img/index'

function ExerciceContainer (props){
    return(
        <div className={props.className}>
            <img className="img-exercice" src={props.imgExercice}/>
            <div className="time-container">
                <img className="clock" src={clock_icon}/>
                <div className="time-shift">{props.time}</div>
            </div>
            <div className="content-exercice-container">
                <div className="header-exercice-container">
                    <div className="title-exercice">{props.titleEx}</div>
                    <div className="validation">{props.state}</div>
                </div>
                <div className="text-exercice">{props.content}</div>
                <div className="footer-exercice">
                    <img className="treasure" src={treasure}/>
                    <img className="link-exercice" src={right_arrow}/>
                </div>
                
            </div>
        </div>
        
    );
}

export default ExerciceContainer;