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
      tenses: [
        {
          name: tenses.PRESENT_PERFECT,
        },
      ],
      rewards: {
        treasures: 0,
        feathers: 2,
      },
    },
    content: {
      step: "2",
      text: [
        <>
          <p className="title"> 1) Principaux emplois </p>
          <p className="subTitle">
            1) Actions passées qui ont des conséquences sur le présent.
          </p>
          <p className="text">
            {" "}
            Paul all <span className="wordPrimary">has eaten</span> the cookies
          </p>
          <p className="explication">
            Quand l'action s'est-elle passée ? Dans le passé : il y a quelques
            minutes/hier Quelle conséquence a-t-elle sur le présent ? Paul a
            mangé tous les gâteaux ; il n'en reste plus pour moi.,
          </p>
          <p className="subTitle">
            2) Actions qui ont commencé dans le passé et qui sont encore en
            progression au moment où l'on parle.
          </p>
          <p className="text">
            Paul all <span className="wordPrimary"> has eaten </span> the
            cookies
          </p>
          <p className="explication">
            Quand l'action a-t-elle commencé ? Il y a dix ans. Est-elle terminée
            ? Non, Paul habite toujours à Londres. Cela fait 10 ans qu'il y
            habit
          </p>
        </>,
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
      time: 5,
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
      step: "2",
      text: [
        <>
          <h2 className="title"> Grammar explaination : </h2>
          <ul>
            <li className="subTitle">
              {" "}
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
            {" "}
            Ici, on ne s'intéresse qu'à ce qui s'est passé mercredi dernier.{" "}
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
