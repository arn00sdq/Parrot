import React from "react";

import {
    data as levels
} from "./levels";
import {
    data as themes
} from "./themes";

import { ar1_img1 } from '../database/images'

var data = [
    {
        id: "LE1",
        title: "Present perfect",
        type: "Article",
        summary: {
            level: levels.BEGINNER,
            time: 5,
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
                    <span className="article-reporter-infos">Par <span className="reporter">Paul Marion</span> et AFP agence<br /></span>
                    <span className="article-date">Publié le 27/11/2021 à 15:33, mis à jour le 01/12/2021 à 15:56<br /></span>
                    <div className="media-picture">
                        <img className="large-ptc-article" src={ar1_img1}></img>
                        <figcaption className="article-figcation">Des chercheurs en tenue de protection travaillent dans un laboratoire de l’Institut de virologie de Wuhan, le 6 février 2020, en Chine.
                        <span className="fig-credit">China Daily CDIC/REUTERS</span></figcaption>
                    </div>
                    <div className="article-subtitle">DÉCRYPTAGE - Selon le NIH, leurs travaux sont allés au-delà 
                                                      de ce qui avait été précédemment admis officiellement.</div>
                    <div className="article-text">Pfizer a déjà commencé à travailler sur une nouvelle version de son vaccin anti-Covid ciblant plus spécifiquement Omicron
                    au cas où le vaccin actuel ne serait pas suffisamment efficace contre le nouveau variant, a assuré lundi le PDG de Pfizer, Albert Bourla.
                    «Il y a encore beaucoup d'inconnues» autour du nouveau variant détecté en Afrique du Sud et jugé «préoccupant» par l'OMS, a-t-il souligné dans une interview sur la chaîne américaine CNBC.
                    «Nous saurons l'essentiel de ce qu'il y a à savoir d'ici quelques semaines».</div>
                </>,
                <>
                    <p className="article-title"> Covid-19 : les laboratoires sur le pied de guerre pour adapter leur vaccin au variant Omicron</p>
                    <span className="article-reporter-infos">Par <span className="reporter">Paul Marion</span> et AFP agence<br /></span>
                    <span className="article-date">Publié le 27/11/2021 à 15:33, mis à jour le 01/12/2021 à 15:56<br /></span>
                    <div className="media-picture">
                        <img className="large-ptc-article" src={ar1_img1}></img>
                        <figcaption className="article-figcation">Des chercheurs en tenue de protection travaillent dans un laboratoire de l’Institut de virologie de Wuhan, le 6 février 2020, en Chine.
                        <span className="fig-credit">China Daily CDIC/REUTERS</span></figcaption>
                    </div>
                    <div className="article-subtitle">DÉCRYPTAGE - Selon le NIH, leurs travaux sont allés au-delà 
                                                      de ce qui avait été précédemment admis officiellement.</div>
                    <div className="article-text">Pfizer a déjà commencé à travailler sur une nouvelle version de son vaccin anti-Covid ciblant plus spécifiquement Omicron
                    au cas où le vaccin actuel ne serait pas suffisamment efficace contre le nouveau variant, a assuré lundi le PDG de Pfizer, Albert Bourla.
                    «Il y a encore beaucoup d'inconnues» autour du nouveau variant détecté en Afrique du Sud et jugé «préoccupant» par l'OMS, a-t-il souligné dans une interview sur la chaîne américaine CNBC.
                    «Nous saurons l'essentiel de ce qu'il y a à savoir d'ici quelques semaines».</div>
                </>

            ],
        },
    }
];

export {
    data
};