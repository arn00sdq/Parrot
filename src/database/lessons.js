import React from "react";

import {
    data as levels
} from "./levels";
import {
    data as themes
} from "./themes";


var data = [
    {
        id: "LE1",
        title: "Present perfect",
        type: "Classic",
        summary: {
            level: levels.BEGINNER,
            time : 5,
            themes: [
                themes.ANIMALS,
                themes.CLOTHING,
            ],
            rewards: {
                treasures: 0,
                feathers: 2,
            },
        },
        content: {
            step: '2',
            text: [
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
                </>

            ],
        },
    }
];

export { 
    data
};