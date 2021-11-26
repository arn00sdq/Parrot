import Classic from './type/classic';
import React from 'react';
import HeaderDisplayContent from '../common/header'
import FooterContent from '../common/footer'

function typeLecon(lecon,id) {
    const row = [];
    switch (id) {
        case "1001":
            row.push(<Classic key={lecon.id} leconProps={lecon.section1}/>); // <PictBtn />
            break;
        case "1002":
            //display lec 1
            break;
        case "1003":
            //display lec 2
            break;
    }
    return row;
}

function displayLecon(props) {
    console.log("DisplayContent - displayLecon: classic_lecon",props)
    return (
        <div className="page-exercice-card card">
            <div className="page-exercice-container">
                <HeaderDisplayContent title={props.title}/>
                {typeLecon(props.lecon,props.id)}
                <FooterContent/>
            </div>
        </div>
    );
}

export default displayLecon;