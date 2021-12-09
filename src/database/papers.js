import React from "react";

import { data as levels } from "./levels";
import { data as themes } from "./themes";

import { ar1_img1, history } from "./images";

var data = [
  {
    id: "PA1",
    title: "Covid-19: les laboratoires s'inquitent",
    date: "10/11/2020",
    type: "Article",
    icon: history,
    description:
      "Depuis quelques jours, le gouvernement français et l'Union européenne \
            appellent...",
    summary: {
      level: levels.BEGINNER,
      themes: [themes.GEOGRAPHY, themes.SCIENCE],
      rewards: {
        treasures: 0,
        feathers: 2,
      },
    },
    content: {
      step: "1",
      text: [
        <>
          <p className="article-title">
            {" "}
            Covid-19 : les laboratoires sur le pied de guerre pour adapter leur
            vaccin au variant Omicron
          </p>
          <span className="article-reporter-infos">
            Par <span className="reporter">Paul Marion</span> et AFP agence
            <br />
          </span>
          <span className="article-date">
            Publié le 27/11/2021 à 15:33, mis à jour le 01/12/2021 à 15:56
            <br />
          </span>
          <div className="media-picture">
            <img className="large-ptc-article" src={ar1_img1}></img>
            <figcaption className="article-figcation">
              Des chercheurs en tenue de protection travaillent dans un
              laboratoire de l’Institut de virologie de Wuhan, le 6 février
              2020, en Chine.
              <span className="fig-credit">China Daily CDIC/REUTERS</span>
            </figcaption>
          </div>
          <div className="article-subtitle">
            DÉCRYPTAGE - Selon le NIH, leurs travaux sont allés au-delà de ce
            qui avait été précédemment admis officiellement.
          </div>
          <div className="article-text">
            Pfizer a déjà commencé à travailler sur une nouvelle version de son
            vaccin anti-Covid ciblant plus spécifiquement Omicron au cas où le
            vaccin actuel ne serait pas suffisamment efficace contre le nouveau
            variant, a assuré lundi le PDG de Pfizer, Albert Bourla. «Il y a
            encore beaucoup d'inconnues» autour du nouveau variant détecté en
            Afrique du Sud et jugé «préoccupant» par l'OMS, a-t-il souligné dans
            une interview sur la chaîne américaine CNBC. «Nous saurons
            l'essentiel de ce qu'il y a à savoir d'ici quelques semaines».
          </div>
        </>,
      ],
    },
  },
  {
    id: "PA2",
    title: "Covid-19: les laboratoires s'inquitent",
    date: "3/11/2021",
    type: "Article",
    icon: ar1_img1,
    description: "Depuis quelques jours, le gouvernement français et l'Union européenne \
            appellent...",
    summary: {
      level: levels.INTERMEDIATE,
      themes: [themes.CLOTHING, themes.FOOD],
      rewards: {
        treasures: 0,
        feathers: 2,
      },
    },
    content: {
      step: "1",
      text: [
        <>
          <p className="article-title">
            {" "}
            Covid-19 : les laboratoires sur le pied de guerre pour adapter leur
            vaccin au variant Omicron
          </p>
          <span className="article-reporter-infos">
            Par <span className="reporter">Paul Marion</span> et AFP agence
            <br />
          </span>
          <span className="article-date">
            Publié le 27/11/2021 à 15:33, mis à jour le 01/12/2021 à 15:56
            <br />
          </span>
          <div className="media-picture">
            <img className="large-ptc-article" src={ar1_img1}></img>
            <figcaption className="article-figcation">
              Des chercheurs en tenue de protection travaillent dans un
              laboratoire de l’Institut de virologie de Wuhan, le 6 février
              2020, en Chine.
              <span className="fig-credit">China Daily CDIC/REUTERS</span>
            </figcaption>
          </div>
          <div className="article-subtitle">
            DÉCRYPTAGE - Selon le NIH, leurs travaux sont allés au-delà de ce
            qui avait été précédemment admis officiellement.
          </div>
          <div className="article-text">
            Pfizer a déjà commencé à travailler sur une nouvelle version de son
            vaccin anti-Covid ciblant plus spécifiquement Omicron au cas où le
            vaccin actuel ne serait pas suffisamment efficace contre le nouveau
            variant, a assuré lundi le PDG de Pfizer, Albert Bourla. «Il y a
            encore beaucoup d'inconnues» autour du nouveau variant détecté en
            Afrique du Sud et jugé «préoccupant» par l'OMS, a-t-il souligné dans
            une interview sur la chaîne américaine CNBC. «Nous saurons
            l'essentiel de ce qu'il y a à savoir d'ici quelques semaines».
          </div>
        </>,
      ],
    },
  },
];

export { data };
