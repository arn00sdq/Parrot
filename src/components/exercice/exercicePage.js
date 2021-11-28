import React from 'react';
import { basket_jump, everest} from '../../assets/img/index';
import DisplayContent from '../common/DisplayContent/displayContent';

function ExercicePage(props) {
    console.log(pict_but_excercice.id)
    return (
        <main> {/*DisplayContent a appeler dans lecon et paper : mise en page*/}        
            <DisplayContent summarize={pict_but_excercice.summarize} 
                            exercice={pict_but_excercice.exercice} 
                            id={pict_but_excercice.id} 
                            title={pict_but_excercice.title}
            />
        </main>
    )
}

export default ExercicePage;
