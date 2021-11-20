import React from 'react';
import ActivityContainer from './ActivityContainer';
import HeaderDashCard from './HeaderDashCard';

function DashCard(props){
    return (
        <div className="dash-card">
            <HeaderDashCard headerText="Activités récentes"/>
            <div className="main-card-dash">
                <ActivityContainer mainText="Les temps du passé. Ex 4" />
                <ActivityContainer mainText="Le subjonctif. Ex6" />
                <ActivityContainer mainText="Le futur de l'indicatif. Ex 6" />
            </div>
        </div>
    )
}

export default DashCard;