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
                variant, a assuré lundi le PDG de Pfizer, Albert Bourla. <i>«Il y a
                encore beaucoup d'inconnues»</i> autour du nouveau variant détecté en
                Afrique du Sud et jugé <i>«préoccupant»</i> par l'OMS, a-t-il souligné dans
                une interview sur la chaîne américaine CNBC. <i>«Nous saurons
                l'essentiel de ce qu'il y a à savoir d'ici quelques semaines»</i>.
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
              appelée <i>«gains</i> de fonction», les transformations génétiques sont le seul moyen de découvrir le
              système de transmission d'un éventuel virus émergent, et ainsi de connaître avec un temps d'avance
              les moyens de combattre de futures épidémies potentielles, notamment via la création rapide de nouveaux vaccins.
            </div>
          <blockquote className="fig-quote">
            <img src={PaperImg.quote_left} />
            <div className="fig-text-section">
              <p className="fig-quote-text">
                Si une épidémie de rage survenait à Paris dans le quartier de l'Institut Pasteur, qu'en penserait-on ?
                </p>
              <cite className="fig-quote-credit">
                Jean-Michel Claverie, virologue
                </cite>
            </div>
          </blockquote>
          <div className="article-text">
            À l’inverse, d'autres chercheurs s'opposent à ces coûteuses manipulations génétiques. Ils estiment qu'elles génèrent
            un nouveau risque non naturel, et soulignent avec à-propos que la pratique des gains de fonction n'a nullement
            permis d'éviter la présente crise. La Maison-Blanche avait d'ailleurs décrété un moratoire en 2014, mais cette
              recherche virologique n'a jamais ralenti. <i> «Dans le monde, seulement quelques dizaines de chercheurs utilisent les gains
            de fonction avec des virus à potentiel pandémique, presque exclusivement financés par les NIH qui n'ont cessé depuis
              2012 de maintenir leur soutien à ces expériences risquées»</i>, note le journaliste.
            </div>
          <div className="article-subtitle ">La thèse de la zoonose</div>
          <div className="article-text">
            Le Sars-Cov-2, virus de laboratoire, ou virus naturel ? Une zoonose (infection transmise de l'animal à l'homme) était <i>«évidemment
              l'hypothèse la plus probable, vu que les virus émergent ainsi depuis la nuit des temps»</i>, souligne Brice Perrier.
            </div>
        </>,
        <>
          <div className="article-text">
            Un coronavirus
            de chauve-souris aurait ainsi pu infecter directement des humains s'aventurant autour de leurs zones d'habitat, ou plus sûrement
            toucher un animal possédant un système respiratoire proche du nôtre, comme le vison,dans lequel il aurait pu se transformer avant
            de se répandre chez les Hommes. Pour le prouver, l'ONG du sulfureux Peter Daszak consacre tous ses efforts de recherche depuis le
            début de l'année dans des grottes situées aux confins de la frontière sino-laotienne. Et l'Institut Pasteur y annonce des découvertes
            prometteuses, avec le prélèvement de virus aux génomes proches (mais pas analogues) à celui du Covid-19.
          </div>
        </>
      ],
    },
  },
  {
    id: "PA2",
    title: "Ligue des champions : l'incroyable couac...",
    date: "3/11/2021",
    type: "Article",
    icon: ar1_img1,
    description: "En raison d'un «incident technique», le tirage des 8es de C1 \
                  a été considéré comme nul et a dû entièrement refait.",
    summary: {
      level: levels.INTERMEDIATE,
      themes: [themes.CLOTHING, themes.FOOD],
      rewards: {
        treasures: 0,
        feathers: 2,
      },
    },
    content: {
      stepContent: [
        <>
          <p className="article-title">
            Ligue des champions : l'incroyable couac qui a contraint l'UEFA à refaire le tirage au sort
          </p>
          <span className="article-reporter-infos">
            Par <span className="reporter">Le Figaro</span>=
            <br />
          </span>
          <span className="article-date">
            Publié le 10/12/2021 à 15:33, mis à jour il y a 17 minutes
            <br />
          </span>
          <div className="row">
            <div className="media-picture">
              <img className="large-ptc-article" src={PaperImg.paper_sport_1}></img>
              <figcaption className="article-figcation">
                Arshavin va devoir se prêter au jeu du tirage une deuxième fois.
                <span className="fig-credit">HANDOUT / REUTERSS</span>
              </figcaption>
            </div>
            <div className="column">
              <div className="article-subtitle paper-marg-adjustment">
                En raison d'un «incident technique», le tirage des 8es de C1 a été considéré
                comme nul et a dû entièrement refait.
              </div>
              <div className="article-text paper-marg-adjustment">
                Le PSG face à Manchester United, Lille contre Chelsea ? <u>C'est le verdict du tirage au sort des 8es
                de finale de la Ligue des champions</u>, effectué ce lundi à midi. Sauf que le tirage en question... est à
                refaire. Plusieurs irrégularités ayant été constatées, l'UEFA n'avait d'autre choix que d'annuler le
                tirage et de tout recommencer, à 15 heures. Un incroyable fiasco pour l'instance européenne, qui pointe
                du doigt l'un de ses prestataires pour expliquer cette boulette historique.
              </div>
            </div>
          </div>
          <div className="article-text">
            <i>«Suite à un incident technique sur le logiciel de l'un des prestataires de service externes qui indique aux officiels
            les équipes qui peuvent s'affronter, une erreur matérielle s'est produite au cours du tirage des 8es de finale», explique
            l'UEFA. Et d'ajouter : «Le tirage est donc considéré comme nul et sera entièrement refait à 15 heures.»</i>
          </div>
        </>,
      ],
    },
  },
];

export { data };
