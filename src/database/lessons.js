import React from "react";

import { data as levels } from "./levels";
import { data as themes } from "./themes";
import { data as tenses } from "./english_tenses";

import { pres_perfect } from "./images";
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
        <>
          <div className="title">

            <div className="num-block">
              <span className="num-section-less">1</span>
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

          <div className="title">
            <div className="num-block">
              <span className="num-section-less">2</span>
            </div>
            <p className="title-section-less"> Principaux emplois </p>
          </div>

          <p className="subTitle">Actions passées qui ont des conséquences sur le présent.</p>

          <div className="exemple-section">
            <div className="lesson-exemple">
              <span className="title-exemple">Exemple</span>
              <p className="text">
                Paul all <span className="wordPrimary">has eaten</span> the cookies
          </p>
              <span className="trad-exemple">Paul a mangé tout les cookies</span>
            </div>
            <div className="lesson-exemple">
              <span className="title-exemple">Exemple</span>
              <p className="text">
                Paul all <span className="wordPrimary">has eaten</span> the cookies
          </p>
              <span className="trad-exemple">Paul a mangé tout les cookies</span>
            </div>
          </div>

          <p className="explication">
            Quand l'action s'est-elle passée ? Dans le passé : il y a quelques
            minutes/hier Quelle conséquence a-t-elle sur le présent ? Paul a
            mangé tous les gâteaux ; il n'en reste plus pour moi., xd
      </p>

        </>,
        <>
          <p className="subTitle">
            Actions qui ont commencé dans le passé et qui sont encore en
            progression au moment où l'on parle.
          </p>

          <div className="exemple-section">
            <div className="lesson-exemple">
              <span className="title-exemple">Exemple</span>
              <p className="text">
                Paul all <span className="wordPrimary">has eaten</span> the cookies
              </p>
              <span className="trad-exemple">Paul a mangé tout les cookies</span>
            </div>
            <div className="lesson-exemple">
              <span className="title-exemple">Exemple</span>
              <p className="text">
                Paul all <span className="wordPrimary">has eaten</span> the cookies
              </p>
              <span className="trad-exemple">Paul a mangé tout les cookies</span>
            </div>
          </div>

          <p className="explication">
            Quand l'action a-t-elle commencé ? Il y a dix ans. Est-elle terminée
            ? Non, Paul habite toujours à Londres. Cela fait 10 ans qu'il y
            habit
          </p>
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
