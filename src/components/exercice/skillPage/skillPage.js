import React from 'react';
import SectionCard from './exercice/SectionCard';

import {
    bush,logo_parrot_adulte,pres_perfect,medium_parrot,small_parrot
} from '../../../database/images'

function SkillPage(props) {
    return (
        <div id="root-css">
            <img className="bush2" src={bush}/>
            <img id="large-parrot" src={logo_parrot_adulte}/>
            <img id="medium-parrot" src={medium_parrot}/>
            <img id="baby-parrot" src={small_parrot}/>
            <main>
                    <SectionCard titleCard="Elementaire" titleEx="Present perfect" /*bd avec section correspondante */ imgExercice={pres_perfect}/>
                    <SectionCard titleCard="Indépendant" titleEx="Present perfect" imgExercice={pres_perfect}/>
                    <SectionCard titleCard="Avancé" titleEx="Present perfect" imgExercice={pres_perfect}/>
            </main>
        </div>
        )
}

export default SkillPage;
  