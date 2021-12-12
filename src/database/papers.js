import React from "react";

import { data as levels } from "./levels";
import { data as themes } from "./themes";

import { ar1_img1, history, PaperImg } from "./images";

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
      stepContent: [
        <>
          <p className="article-title">
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
          <div className="row">
            <div className="media-picture">
              <img className="large-ptc-article" src={ar1_img1}></img>
              <figcaption className="article-figcation">
                Des chercheurs en tenue de protection travaillent dans un
                laboratoire de l’Institut de virologie de Wuhan, le 6 février
                2020, en Chine.
              <span className="fig-credit">China Daily CDIC/REUTERS</span>
              </figcaption>
            </div>
            <div className="column">
              <div className="article-subtitle paper-marg-adjustment">
                DÉCRYPTAGE - Selon le NIH, leurs travaux sont allés au-delà de ce
                qui avait été précédemment admis officiellement.
              </div>
              <div className="article-text paper-marg-adjustment">
                Pfizer a déjà commencé à travailler sur une nouvelle version de son
                vaccin anti-Covid ciblant plus spécifiquement Omicron au cas où le
                vaccin actuel ne serait pas suffisamment efficace contre le nouveau
                variant, a assuré lundi le PDG de Pfizer, Albert Bourla. «Il y a
                encore beaucoup d'inconnues» autour du nouveau variant détecté en
                Afrique du Sud et jugé «préoccupant» par l'OMS, a-t-il souligné dans
                une interview sur la chaîne américaine CNBC. «Nous saurons
                l'essentiel de ce qu'il y a à savoir d'ici quelques semaines».
            </div>
            </div>
          </div>
          <div className="article-subtitle paper-top-adjustment">
            Gains de fonction sur des coronavirus
          </div>
          <div className="article-text">
                Cette nouvelle potentiellement explosive ne saurait étonner au regard des 
                nombreux travaux effectués depuis vingt ans sur les coronavirus.
                Dans l'enquête remarquable de Brice Perrier, qui donne la parole à beaucoup 
                d'avis différents, le lecteur découvre en effet que des manipulations sur les coronavirus 
                sont entreprises depuis près de 20 ans ! En 1999, un article du virologue hollandais
                Peter Rottier montrait que la création d'un coronavirus chimère pouvait permettre un 
                franchissement de barrière d'espèce avec des cellules de félin.
          </div>
        </>,
        <>
            <div className="article-subtitle paper-top-adjustment">
              De l'argent public américain aux labos de Wuhan
            </div>
            <div className="article-text">
              Comme le démontre le journaliste, la manipulation génétique de coronavirus destinée à les 
              rendre plus dangereux est donc pratiquée dans quelques laboratoires, et le résultat de ces 
              travaux est parfois publié dans des revues spécialisées. Pour les partisans de cette méthode, 
              appelée «gains de fonction», les transformations génétiques sont le seul moyen de découvrir le 
              système de transmission d'un éventuel virus émergent, et ainsi de connaître avec un temps d'avance 
              les moyens de combattre de futures épidémies potentielles, notamment via la création rapide de nouveaux vaccins.
            </div>
            <blockquote className="fig-quote">
              <img src={PaperImg.quote_left}/>
              <p className="fig-quote-text">
                Si une épidémie de rage survenait à Paris dans le quartier de l'Institut Pasteur, qu'en penserait-on ?
              </p>
              <cite className="fig-quote-credit">
                Jean-Michel Claverie, virologue
              </cite>
            </blockquote>
        </>
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
      steps: "1",
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
