import React from 'react';

import DisplayContent from '../common/DisplayContent/displayContent';

import {bush} from '../../database/images'

const classic_lecon = {

    title : "Present perfect",
    lecon: {
        id: 4000,
        section1 : {
            id: 4001,
            text :[
            <>
                <p className="title"> 1) Principaux emplois </p>
                <p className="subTitle">1) Actions passées qui ont des conséquences sur le présent.</p>
                <p className="text"> Paul all <span className="wordPrimary">has eaten</span>  the cookies</p>
                <p className="explication">
                    Quand l'action s'est-elle passée ? Dans le passé : il y a quelques minutes/hier Quelle conséquence a-t-elle sur le présent ?
                    Paul a mangé tous les gâteaux ; il n'en reste plus pour moi.,
                </p>
                <p className="subTitle">2) Actions qui ont commencé dans le passé et qui sont encore en progression au moment où l'on parle.</p>
                <p className="text">Paul all <span className="wordPrimary"> has eaten </span> the cookies
                </p>
                <p className="explication">
                    Quand l'action a-t-elle commencé ? 
                    Il y a dix ans. Est-elle terminée ? Non, Paul habite toujours à Londres. Cela fait 10 ans qu'il y habit
                </p>
            </>,
                ],
        },
    },

    summarize: {
        level : "Débutant (A1 - A2)",
        repere :{
            title: "Repère :",
            elt : ["Present-perfect","Instruments"]
        },
        reward :{
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
  