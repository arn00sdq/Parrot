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
        type: "Article",
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
            step: '1',
            text: [
                <>
                    <p className="article-title"> Covid-19 : les laboratoires sur le pied de guerre pour adapter leur vaccin au variant Omicron</p>
                    <p className="article-reporter-infos">Par Paul Marion et AFP agence</p>
                    <p className="article-date">Publié le 27/11/2021 à 15:33, mis à jour le 01/12/2021 à 15:56</p>
                    <img src=""></img>
                    <p className="article-subtitle">Pfizer-BioNTech et Moderna sont prêts à mettre à jour rapidement 
                                                    leurs vaccins actuels pour les rendre efficaces contre le variant Omicron.</p>
                    <p className="article-text">Pfizer a déjà commencé à travailler sur une nouvelle version de son vaccin anti-Covid ciblant plus spécifiquement Omicron 
                    au cas où le vaccin actuel ne serait pas suffisamment efficace contre le nouveau variant, a assuré lundi le PDG de Pfizer, Albert Bourla. 
                    «Il y a encore beaucoup d'inconnues» autour du nouveau variant détecté en Afrique du Sud et jugé «préoccupant» par l'OMS, a-t-il souligné dans une interview sur la chaîne américaine CNBC. 
                    «Nous saurons l'essentiel de ce qu'il y a à savoir d'ici quelques semaines».</p>
                </>

            ],
        },
    }
];

export { 
    data
};