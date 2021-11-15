import SectionCard from './exercice/SectionCard';
import HeaderComponent from '../header/Header';

import '../../assets/css/main/main.css';
import '../../assets/css/skillPage/card.css';
import '../../assets/css/general/global.css'

import {
    bush,logo_parrot_adulte,pres_perfect,medium_parrot,small_parrot
} from '../../assets/img/index'


function SkillPage(props) {
    return (
        <div id="root-css">
            <img className="bush2" src={bush}/>
            <img id="large-parrot" src={logo_parrot_adulte}/>
            <img id="medium-parrot" src={medium_parrot}/>
            <img id="baby-parrot" src={small_parrot}/>
            <HeaderComponent />
            <main>
                    <SectionCard titleCard="Elementaire" titleEx="Present perfect" /*bd avec section correspondante */ imgExercice={pres_perfect}/>
                    <SectionCard titleCard="Indépendant" titleEx="Present perfect" imgExercice={pres_perfect}/>
                    <SectionCard titleCard="Avancé" titleEx="Present perfect" imgExercice={pres_perfect}/>
            </main>
        </div>
        )
}

export default SkillPage;
  