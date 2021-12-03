import Classic from './type/classic';
import React from 'react';
import HeaderContent from '../common/headerContent'
import FooterContent from '../common/footerContent'

function typeLecon(lesson,id) {
    const row = [];
    switch (id) {
        case "1001":
            row.push(<Classic key={lesson.id} lessonProps={lesson.section1}/>); // <PictBtn />
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
    console.log("DisplayContent - displayLecon: classic_lesson",props)
    return (
        <div className="page-exercice-card card">
            <div className="page-exercice-container">
                <HeaderContent title={props.title}/>
                {typeLecon(props.lesson,props.id)}
                <FooterContent/>
            </div>
        </div>
    );
}

export default displayLecon;