import clock_icon from '../../../assets/img/skillPage/clock-icon.jpg'
import right_arrow from '../../../assets/img/right-orange-arrow.png'

function ExerciceContainer (props){
    return(
        <div className="exercice-container">
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
                <img className="link-exercice" src={right_arrow}/>
            </div>
        </div>
        
    );
}

export default ExerciceContainer;