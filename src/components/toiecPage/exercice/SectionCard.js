import React from 'react';
import PictTimeContainer from '../../common/bandItem/PictTimeContainer';
import HeaderLevel from './HeaderLevel';

const toiecId = ["1","1","1"];

function SectionCard({titleCard,content,state,handles}){
    return (
        <div className ="section-skill-card">
            <HeaderLevel titleCard={titleCard} />    
            <div className="card exercice-card">
                <PictTimeContainer 
                content={content}
                id={toiecId}
                handles={handles}/>
                <a href ="#" className="button-train-skill">S'entrainer</a>
            </div>  
            
        </div>
    );
}

export default SectionCard;