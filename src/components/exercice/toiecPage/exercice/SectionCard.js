import React from 'react';
import PictTimeContainer from '../../../common/bandItem/PictTimeContainer';
import HeaderLevel from './HeaderLevel';


function SectionCard(props){
    return (
        <div className ="section-skill-card">
            <HeaderLevel titleCard={props.titleCard} />    
            <div className="card exercice-card">
                <PictTimeContainer content={props.content}/>
                <a href ="#" className="button-train-skill">S'entrainer</a>
            </div>  
            
        </div>
    );
}

export default SectionCard;