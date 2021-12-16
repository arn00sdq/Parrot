import React from "react";

import { data as levels } from "./levels";
import { data as themes } from "./themes";

import { history, PaperImg } from "./images";

var data = [
  {
    id: "PA1",
    title: "Covid-19: laboratories are concerned",
    date: "10/11/2020",
    type: "Article",
    icon: PaperImg.paper_politic_1,
    description:
      "For several days, the French government and the European Union have been\
      have been calling for...",
    summary: {
      level: levels.BEGINNER,
      themes: [themes.GEOGRAPHY, themes.SCIENCE],
      rewards: {
        treasures: 0,
        feathers: 2,
      },
      section:{
        primary : [""],
        sub : [""]
      }
    },
    content: {
      stepContent: [
        <>
          <p className="article-title">
            Covid-19: laboratories on the warpath to adapt their vaccine to the Omicron variant
          </p>
          <span className="article-reporter-infos">
            By <span className="reporter">Paul Marion</span> and AFP agence
            <br />
          </span>
          <span className="article-date">
            Published  27/11/2021 à 15:33, update on 01/12/2021 at 15:56
            <br />
          </span>
          <div className="row">
            <div className="media-picture">
              <img className="large-ptc-article" src={PaperImg.paper_politic_1}></img>
              <figcaption className="article-figcation">
                Researchers in protective gear work in a laboratory at the Wuhan
                laboratory at the Wuhan Institute of Virology on Feb. 6, 2020, in
                2020, China.
              <span className="fig-credit">China Daily CDIC/REUTERS</span>
              </figcaption>
            </div>
            <div className="column">
              <div className="article-subtitle paper-marg-adjustment">
                DECRYPTAGE - According to the NIH, their work went beyond what had been
                that had previously been officially accepted.
              </div>
              <div className="article-text paper-marg-adjustment">
              Pfizer has already begun work on a new version of its
                vaccine specifically targeting Omicron in case the current vaccine is not sufficiently effective against
                vaccine is not sufficiently effective against the new variant, Pfizer
                variant, Pfizer CEO Albert Bourla assured on Monday. <i>"There are
                still many unknowns"</i> around the new variant detected in
                South Africa and considered <i>"worrying"</i> by the WHO, he stressed in
                an interview on the American channel CNBC. <i>"We will know
                the essence of what there is to know in a few weeks"</i>.
              </div>
            </div>
          </div>
          <div className="article-subtitle paper-top-adjustment">
            Gains of function on coronaviruses
          </div>
          <div className="article-text">
          This potentially explosive news should not be surprising in view of the numerous
            the numerous studies carried out over the last twenty years on coronaviruses.
            In Brice Perrier's remarkable investigation, which gives voice to many different
            different opinions, the reader discovers indeed that manipulations on the coronaviruses
            have been undertaken for nearly 20 years! In 1999, an article of the Dutch virologist
            Peter Rottier showed that the creation of a chimeric coronavirus could allow a
            crossing of the species barrier with feline cells.
          </div>
        </>,
        <>
          <div className="article-subtitle paper-top-adjustment">
          From American public money to Wuhan labs
            </div>
          <div className="article-text">
            As the journalist demonstrates, the genetic manipulation of coronaviruses in order to make them more
              more dangerous is practiced in some laboratories, and the result of these works is sometimes
              work is sometimes published in specialized magazines. For the supporters of this method,
              called <i>"gains</i> in function", genetic transformations are the only way to discover the
              transmission system of a possible emerging virus, and thus to know with a head start
              the means to combat potential future epidemics, including via the rapid creation of new vaccines.
            </div>
          <blockquote className="fig-quote">
            <img src={PaperImg.quote_left} />
            <div className="fig-text-section">
              <p className="fig-quote-text">
              If a rabies epidemic occurred in Paris in the Pasteur Institute area, what would people think?
                </p>
              <cite className="fig-quote-credit">
                Jean-Michel Claverie, virologue
                </cite>
            </div>
          </blockquote>
          <div className="article-text">
          On the other hand, other researchers are opposed to these costly genetic manipulations. They believe that they generate
            a new, unnatural risk, and they aptly point out that the practice of function gains has in no way
            the present crisis. In fact, the White House declared a moratorium in 2014, but this
              virology research has never slowed down. <i>"Worldwide, only a few dozen researchers are using gains
            of function with viruses with pandemic potential, almost exclusively funded by the NIH, which has continued since
              2012 to maintain their support for these risky experiments,"</i> notes the reporter.
            </div>
          <div className="article-subtitle ">The thesis of zoonosis</div>
          <div className="article-text">
          Sars-Cov-2, laboratory virus, or natural virus? A zoonosis (infection transmitted from animals to humans) was <i>"obviously
              the most likely hypothesis, given that viruses have been emerging in this way since the dawn of time"</i>, Brice Perrier points out.
            </div>
        </>,
        <>
          <div className="article-text">
          A coronavirus
            could have directly infected humans venturing around their habitat areas, or more surely
            touch an animal having a respiratory system close to ours, like the mink, in which it could have been transformed before
            to spread among humans. To prove it, the NGO of the sulphurous Peter Daszak devotes all its efforts of research since the beginning of the year in caves
            the beginning of the year in caves located on the border between China and Laos. And the Pasteur Institute announces promising discoveries
            promising discoveries, with the collection of viruses with genomes close (but not analogous) to that of Covid-19.
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
    icon: PaperImg.paper_sport_1,
    description: "Due to a technical incident, the draw for the 8th round of C1 \
    was considered null and void and had to be completely redone.",
    summary: {
      level: levels.INTERMEDIATE,
      themes: [themes.CLOTHING, themes.FOOD],
      rewards: {
        treasures: 0,
        feathers: 2,
      },
      section:{
        primary : [""],
        sub : [""]
      }
    },
    content: {
      stepContent: [
        <>
          <p className="article-title">
          Champions League: the incredible mishap that forced UEFA to redo the draw
          </p>
          <span className="article-reporter-infos">
            By <span className="reporter">Le Figaro</span>
            <br />
          </span>
          <span className="article-date">
          Published on 10/12/2021 at 15:33, updated 17 minutes ago
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
              Due to a "technical incident", the draw for the 8th round of C1 was considered
                as null and void and had to be completely redone.
              </div>
              <div className="article-text paper-marg-adjustment">
              PSG against Manchester United, Lille against Chelsea? <u>This is the verdict of the draw for the 8th
                Champions League finals</u>, made this Monday at noon. Except that the draw in question ... is to be
                redone. Several irregularities having been found, UEFA had no choice but to cancel the draw and start
                and start all over again, at 3 pm. An incredible fiasco for the European authority, which points the finger at one of its
                the finger at one of its service providers to explain this historic blunder.
              </div>
            </div>
          </div>
          <div className="article-text">
          <i>"Due to a technical glitch in the software of one of the external service providers that tells officials
            which teams can play each other, a hardware error occurred during the round of 16 draw," explained
            UEFA. It added: "The draw is therefore considered void and will be redone in full at 3pm."</i>
          </div>
        </>,
      ],
    },
  },
];

export { data };
