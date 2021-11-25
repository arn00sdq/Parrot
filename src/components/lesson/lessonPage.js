import React from 'react';

import DisplayContent from '../common/DisplayContent/displayContent';

import {bush} from '../../assets/img/index'

const classic_lecon = {

    title : "Present perfect",
    lecon: {
        id: 4000,
        section1 : {
            id: 4001,
            title:"1) Principaux emplois",
            subTitle: "1) Actions passées qui ont des conséquences sur le présent.",
            exemple: [
                {id: 4002,text:" > Paul all"},
                {id: 4003,wordPrimary:"has eaten"},
                {id: 4004,text:"the cookies."}
            ],
            explication:"Quand l'action s'est-elle passée ? Dans le passé : il y a quelques minutes/hier Quelle conséquence a-t-elle sur le présent ?"+
                        "Paul a mangé tous les gâteaux ; il n'en reste plus pour moi."
        },
    },

    summarize: {
        id: 3010,
        level : "Débutant (A1 - A2)",
        repere :{
            title: "Repère :",
            elt : ["Present-perfect","Instruments"]
        },
        reward :{
            id: 3011,
            title: "Récompense : ",
            elt: ["treasure","feather_icon"],
            },
    },
    id: "1001",
}

function LessonPage(props){

    return (
        <div id="root-css">
            <img className="bush2" src={bush}/>

            <main>
                
            <DisplayContent summarize={classic_lecon.summarize} 
                            lecon={classic_lecon.lecon} 
                            id={classic_lecon.id} 
                            title={classic_lecon.title}
            />
            </main>
        </div>
        )
}

export default LessonPage;
  