import DisplayExercice from './exercice/displayExercice'

import {cross} from '../../../assets/img/index'

function typeContent(type,id){
    const codeType = id.substr(0, 1);
    switch (codeType){ // compare l'id 
        case "0": 
            return (<DisplayExercice exercice={type}/>)
            break;
        case "1":
            //display lecon
            break;
        case "2":
            //display paper
            break;
    }
}

function DisplayContent(props,id){ // affiche journaux, lecon , exercice
    return(
        <div className="page-exercice-card card">
            <div className="page-exercice-container">
                <div className="header-exercice">
                    <div className="title-exercice">Musical Instrument</div>
                    <div className="progress-exercice-bar">
                        <img src={cross} class="cross"></img>
                        <div class="large-bar">
                            <div className="orange-bar"></div>
                        </div>
                    </div>
                </div>
                {typeContent(props.type,props.id)}
                <div className="hr-horizontale-exercice"></div>
                <div class="footer-exercice-container">
                    <a href="#" className="button button-previous">Previous</a>
                    <a href="#" className="button button-continue">Continuer</a>
                </div>
            </div>
        </div>
    );
}

export default DisplayContent;