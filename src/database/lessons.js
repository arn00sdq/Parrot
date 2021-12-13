import React from "react";

import { data as levels } from "./levels";
import { data as themes } from "./themes";
import { data as tenses } from "./english_tenses";

import { pres_perfect,certificate } from "./images";
import ActivityCompleted from "../components/common/displayActivity/ActivityCompleted";
var data = [
  {
    id: "LE1",
    title: "Present perfect",
    icon: pres_perfect,
    type: "Classic",
    description:
      "In this lesson, you will learn the basics about the usage of the Present Perfect.",
    summary: {
      level: levels.BEGINNER,
      tenses: [tenses.PRESENT_PERFECT, tenses.FUTURE_CONTINUOUS],
      rewards: {
        treasures: 0,
        feathers: 2,
      },
    },
    content: {
      stepsContent: [
        /*
         * *
          1er section
            **
              */
        <>
          <div className="title">
            <div className="num-primary-block">
              <span className="num-primary-less">I</span>
            </div>
            <p className="title-primary-less"> Formation du Present Perfect et du Present Be-ing </p>
          </div>
          <div className="shift-lesson">
            <div className="title">
              <div className="num-block">
                <span className="num-section-less">A</span>
              </div>
              <p className="title-section-less"> Formation du Present Perfect </p>
            </div>
            <p className="subTitle">Règle de conjugaison</p>

            <ul className="grammar-rule">
              <li>
                <p>Pour les verbes réguliers :</p>
                <p> sujet + <b> auxiliaire have au present + base verbale  + -ed</b> </p>
              </li>
              <li>
                <p>Pour les verbes irrégulier :</p>
                <p>sujet + <b>auxiliaire have au present + base verbale  + participe passé régulier</b></p>
              </li>
            </ul>

            <div className="exemple-section">
              <div className="lesson-exemple">
                <span className="title-exemple">Exemple</span>
                <p className="text">
                <span className="wordPrimary">Have</span>  you <span className="wordPrimary">finished</span> your homework ?
                </p>
                <span className="trad-exemple">Est ce que tu as finis tes devoirs</span>
              </div>
              <div className="lesson-exemple">
                <span className="title-exemple">Exemple</span>
                <p className="text">
                  Bob <span className="wordPrimary">has has washed </span> the dishes
                </p>
                <span className="trad-exemple">Bob a fait la vaiselle</span>
              </div>
            </div>

            <p className="explication">
              Quand l'action s'est-elle passée ? Dans le passé : il y a quelques
              minutes/hier Quelle conséquence a-t-elle sur le présent ?
            </p>
          </div>    

        </>,
        /*
         * *
          2er section
            **
              */
        <>
          <div className="title">
            <div className="num-block">
              <span className="num-section-less">B</span>
            </div>
            <p className="title-section-less"> Formation du Present Perfect Be-ing </p>
          </div>
          <p className="subTitle">Règle de conjugaison</p>

          <p className="text-explanation">Le present perfect be-ing se construit à toutes les formes avec have been
              conjugué au present perfect à la forme voulue suivi de la base verbale + -ing du verbe utilisé
          </p>

          <div className="exemple-section">
            <div className="lesson-exemple">
              <span className="title-exemple">Exemple</span>
              <p className="text">
                Amy  <span className="wordPrimary">Has been sleeping</span>  a lot lately <span className="wordPrimary">hasn't</span> she ?
              </p>
              <span className="trad-exemple">Amy a beaucoup dormi ces derniers temps.</span>
            </div>
            <div className="lesson-exemple">
              <span className="title-exemple">Exemple</span>
              <p className="text">
                I <span className="wordPrimary"> haven't been sleeping </span> a lot lately
              </p>
              <span className="trad-exemple">Je n'ai pas beaucoup dormi ces derniers temps</span>
            </div>
          </div>

          <p className="explication">
            Quand l'action s'est-elle passée ? Dans le passé : il y a quelques
            minutes/hier Quelle conséquence a-t-elle sur le présent ?
          </p>
        </>,
        /*
         * *
          3er section
            **
              */
        <>
          <div className="title">
            <div className="num-primary-block">
              <span className="num-primary-less">II</span>
            </div>
            <p className="title-primary-less"> Les emplois du present perfect et du present Be + -ing  </p>
          </div>
           <div className="title">
            <div className="num-block">
              <span className="num-section-less">A</span>
            </div>
            <p className="title-section-less"> Les emplois du present perfect Be - ing </p>
          </div>
          <p className="subTitle">Pour faire un bilan d'un résultat d'un évenement passé avec une nuance appréciative 
                                  (sur le déroulement de l'action, ect)
          </p>
          <div className="lesson-exemple">
            <span className="title-exemple">Exemple</span>
            <p className="text">
               I  <span className="wordPrimary">have been whasing</span> the dishes
            </p>
            <span className="trad-exemple">J'ai fais la vaisselle (cela m'a pris du temps)</span>
          </div>
          <div className="lesson-table">
            <div className="table-text">
              On peut employer le present perfect be-ing dans le structures habituellement utilisées avec le present 
              perfect simple si l'on veut ajouter une nuance appréciative sur la durée, le déroulement de l'action ou son
              impact sur le présent.
            </div>
            <div className="table-exemple">
              <div className="lesson-exemple">
                <span className="title-exemple">Exemple</span>
                <p className="text">
                  I <span className="wordPrimary"> haven't been sleeping </span> a lot lately
                </p>
                <span className="trad-exemple">Je n'ai pas beaucoup dormi ces derniers temps</span>
              </div>
              <div className="lesson-exemple">
                <span className="title-exemple">Exemple</span>
                <p className="text">
                  I <span className="wordPrimary"> haven't been sleeping </span> a lot lately
                </p>
                <span className="trad-exemple">Je n'ai pas beaucoup dormi ces derniers temps</span>
              </div>
                <div className="lesson-exemple">
                  <span className="title-exemple">Exemple</span>
                  <p className="text">
                    I <span className="wordPrimary"> haven't been sleeping </span> a lot lately
                  </p>
                  <span className="trad-exemple">Je n'ai pas beaucoup dormi ces derniers temps</span>
                </div>
                <div className="lesson-exemple">
                  <span className="title-exemple">Exemple</span>
                  <p className="text">
                    I <span className="wordPrimary"> haven't been sleeping </span> a lot lately
                  </p>
                  <span className="trad-exemple">Je n'ai pas beaucoup dormi ces derniers temps</span>
                </div>
              </div>
            </div>
            
        </>,
        /*
         * *
          4er section
            **
              */
        <>
           <div className="title">
            <div className="num-block">
              <span className="num-section-less">B</span>
            </div>
            <p className="title-section-less"> Les emplois du present perfect simple </p>
          </div>
          <p className="subTitle">Pour faire un bilan dans le présent d'un événement</p>
          <div className="lesson-exemple">
            <span className="title-exemple">Exemple</span>
            <p className="text">
              <span className="wordPrimary">Have</span> you <span className="wordPrimary">finished</span> your homework
            </p>
            <span className="trad-exemple">Est ce que tu as fini tes devoirs</span>
          </div>
          <div className="lesson-table">
            <div className="table-text">
              Dans certaines tournures idiomatique, il faut utiliserle present perfect simple
            </div>
            <table>
              <tbody>       
                <tr>
                  <td>
                    <span className="wordPrimary">I have just </span> (+ participe passé)
                  </td>
                  <td> Je viens de (+ infinitif)</td>
                </tr>
                <tr>
                  <td>
                    <span className="wordPrimary">It is the first time </span> (+ present perfect simple))
                  </td>
                  <td> Je viens de (+ infinitif)</td>
                </tr>
                <tr>
                  <td>
                    Present perfect simple  + for (+ durée)
                  </td>
                  <td>Présent de l'indicatif + depuis (+ durée)</td>
                </tr>
                <tr>
                <td>
                  Present perfect + since (+ événement localisé) 
                </td>
                <td>Présent de l'indicatif + depuis (+ événement localisé)</td>
              </tr>
              </tbody>
            </table>
          </div>
        </>,
        <>
          <ActivityCompleted />
        </>
      ],
    },
  },
  {
    id: "LE2",
    title: "Past Simple",
    icon: pres_perfect,
    type: "Classic",
    description:
      "In this lesson, you will learn the basics about the usage of the Past Simple.",
    summary: {
      level: levels.BEGINNER,
      tenses: [
        {
          name: tenses.PAST_SIMPLE,
        },
      ],
      rewards: {
        treasures: 0,
        feathers: 2,
      },
    },
    content: {
      stepsContent: [
        <>
          <h2 className="title"> Grammar explaination : </h2>
          <ul>
            <li className="subTitle">
              Il est utilisé pour parler d'une action, événement, ou état qui a
              eu lieu dans une période de temps qui est terminée et où il n'y a
              pas de lien avec le présent. Il est souvent employé avec un
              complément de temps :
            </li>
          </ul>
          <blockquote className="text">
            yesterday, last Summer,
            <br /> in 2005, 40 years ago, <br />
            the day before yesterday, when I was a little girl
          </blockquote>
          <blockquote className="text">
            I<span className="wordPrimary"> went </span> to the new gym club
            last Wednesday <br />
            <span className="traduction">
              Je suis allé au nouveau club de gym, mercredi dernier.
            </span>
          </blockquote>
          <p className="explication">
            Ici, on ne s'intéresse qu'à ce qui s'est passé mercredi dernier.
          </p>
          <blockquote className="text">
            I<span className="wordPrimary"> met </span> her 3 weeks ago.
            <br />
            <span className="traduction">
              Je l'ai rencontrée il y a 3 semaines.
            </span>
          </blockquote>
          {/*a finir*/}
        </>,
      ],
    },
  },
];

export { data };
