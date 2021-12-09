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
        id: "PA1",
        title: "Covid-19",
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
                    <p className="article-title"> Incidents OL-OM : un point retiré à Lyon et match à rejouer à huis clos</p>
                    <span className="article-reporter-infos">Par <span className="reporter">Le Figaro</span> avec AFP<br /></span>
                    <span className="article-date">Publié hier à 21:43, mis à jour hier à 22:17<br /></span>
                    <div className="media-picture">
                        <img className="large-ptc-article" src={ar1_img1}></img>
                        <figcaption className="article-figcation">Dimitri Payet avait été touché au visage par une bouteille d'eau.
                        <span className="fig-credit">PHILIPPE DESMAZES / AFP</span></figcaption>
                    </div>
                    <div className="article-subtitle">La commission de discipline de la LFP a rendu son verdict ce
                                                        mercredi au sujet des incidents lors de Lyon-Marseille.</div>
                    <div className="article-text">Un point ferme retiré à l'OL et un match à rejouer, à Lyon mais à huis clos: la commission de discipline de
                    la Ligue de football professionnel a reconnu mercredi la responsabilité du club lyonnais dans les incidents du match OL-OM, lors duquel
                     Dimitri Payet avait été touché par une bouteille d'eau lancée par un supporter.</div>
                    {/*2nd Page*/}
                </>

            ],
        },
    },
    {
        id: "PA2",
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
                    <div className="article-text">Un point ferme retiré à l'OL et un match à rejouer, à Lyon mais à huis clos: la commission de discipline de
                    la Ligue de football professionnel a reconnu mercredi la responsabilité du club lyonnais dans les incidents du match OL-OM, lors duquel
                     Dimitri Payet avait été touché par une bouteille d'eau lancée par un supporter.</div>
                    <div className="redirect-article">À VOIR AUSSI - «Il faut que ça s'arrête»:
                    Roxana Maracineanu dénonce le jet de bouteille contre Dimitri Payet lors du match entre l'OL et l'OM
                    </div>
                    <div className="article-subtitle">La colère de l'OM</div>
                    <div className="article-text">Secoué par une vague d'incidents graves depuis cet été, le football français attendait fébrilement la décision de mercredi,
                    alors que de nouvelles mesures gouvernementales sont espérées mi-décembre pour répondre à l'indignation générale,
                    encore accrue par l'affaire OL-OM. La décision de mercredi n'est pas anodine pour l'OL, 12e de Ligue 1 avec six points de retard
                    sur le podium avant les sanctions annoncées. L'OL estime par ailleurs à plus de trois millions d'euros la perte
                    financière engendrée par un match à huis clos.</div>
                </>

            ],
        },
    }
];

export {
    data
};