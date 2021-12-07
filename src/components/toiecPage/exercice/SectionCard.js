import React from 'react';
import ToiecCard from '../../common/bandItem/toiecCard';
import HeaderLevel from './HeaderLevel';

const toiecId = ["1","1","1"];

function SectionCard({titleCard,content,state,handles}){
    return (
        <div className ="section-skill-card">
            <HeaderLevel titleCard={titleCard} />    
            <div className="card exercice-card">
                <ToiecCard 
                content={content}
                id={toiecId}
                handles={handles}/>
                <a href ="#" className="button-train-skill">S'entrainer</a>
            </div>  
            
        </div>
    );
}

export default SectionCard;