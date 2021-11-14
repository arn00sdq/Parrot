import ExerciceContainer from './ExerciceContainer';
import HeaderLevel from './HeaderLevel';

import pres_perfect from '../../../assets/img/skillPage/pres-perfect.jpg';
import home_ex from '../../../assets/img/skillPage/home-ex.jpg';
import sign_where from '../../../assets/img/skillPage/sign-where.jpg';

function SectionCard(props){
    return (
        <div className ="section-level-card">
            <HeaderLevel titleCard={props.titleCard} />    
            <div className="exercice-card">
                <ExerciceContainer imgExercice={pres_perfect} time="10min" titleEx={props.titleEx}
                state="Terminer" content="Dans cette exercice nous verrons 
                                          l'utilisation du present perfect aux travers
                                          de text à trous..."
                />
                
                <ExerciceContainer imgExercice={home_ex} time="5min" titleEx={props.titleEx}
                state="Terminer" content="Dans cette exercice nous verrons 
                                          l'utilisation du present perfect aux travers
                                          de text à trous..."
                />
                <ExerciceContainer imgExercice={sign_where} time="10min" titleEx={props.titleEx}
                state="Terminer" content="Dans cette exercice nous verrons 
                                          l'utilisation du present perfect aux travers
                                          de text à trous..."
                />
                <ExerciceContainer imgExercice={props.imgExercice} time="15min"titleEx={props.titleEx}
                state="Terminer" content="Dans cette exercice nous verrons 
                                          l'utilisation du present perfect aux travers
                                          de text à trous..."
                />
                <a href ="#" class="button-train-skill">S'entrainer</a>
            </div>  
            
        </div>
    );
}

export default SectionCard;