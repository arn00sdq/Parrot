import React from "react";
import ChallengeCard from "./progress/ChallengeCard";
import DailyCard from "./progress/DailyCard";
import NextAwardCard from "./progress/NextAwardCard";
import DashCard from "./dashboard/DashCard";
import DataStat from "./dashboard/DataStat";
import PaperCard from "./read/PaperCard";
import FeatureCard from "./feature/featureCard";
import { data as exercisesData } from "../../database/exercises";
import { data as lessonsData } from "../../database/lessons";
import { data as papersData } from "../../database/papers";
import {
  basket_jump,
  everest,
  logo_parrot_adulte,
  bush,
} from "../../database/images";

function Home({ state, handles }) {
  let lessonsRead = state.user.lessonsRead.length;
  let lessonsTotal = exercisesData.length;
  let exercisesDone = state.user.exercisesDone.length;
  let exercisesTotal = exercisesData.length;
  let papersRead = state.user.papersRead.length;
  let papersTotal = papersData.length;
  return (
    <main>
      <img className="bush2" src={bush} />
      <img id="parrot-home" src={logo_parrot_adulte} />
      <div id="progress-card" className="card">
        <div id="title-progress">Progression</div>
        <ChallengeCard
          state={state}
          handles={handles}
          titleCard="Challenge of the day"
        />
        <DailyCard state={state} handles={handles} titleCard="Today's quests" />
        <NextAwardCard state={state} handles={handles} titleCard="Next level" />
      </div>

      <div id="dashboard-container">
        <div id="title-dash">Dashboard</div>
        <div className="header-infos-container">
          <div className="selection-container">
            <div className="selection-container-text">Recent exercises</div>
            <div className="selection-container-text">Recent lessons</div>
            <div className="selection-container-text">Recent papers</div>
          </div>
          <div className="header-line-dash">
            <div className="large-line-dash">
              <div
                className="small-line-dash"
                style={{ height: "3px", width: "30%" }}
              ></div>
            </div>
          </div>
        </div>
        <DashCard />
        <div className="stat-container">
          <div id="title-stat">Your stats</div>
          <div className="header-infos-container">
            <div className="selection-container">
              <DataStat
                title="Lessons Read"
                score={`${lessonsRead}/${lessonsTotal}`}
              />
              <DataStat
                title="Exercises done"
                score={`${exercisesDone}/${exercisesTotal}`}
              />
              <DataStat
                title="Papers read"
                score={`${papersRead}/${papersTotal}`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div id="read-card" className="card">
          <div id="title-progress">Reading</div>
          <PaperCard
            category="Sport"
            title="2,45 meter jump world record!"
            date="JUL 27"
            img={basket_jump}
            text="Bob Beamon says he has to remind himself 
                    that his phenomenal world record long jump in 1968 
                    was not a dream as he relives one of the 
                    biggest moments in Olympic history."
          />
          <PaperCard
            category="Voyage"
            title="Mont Everest"
            date="APR 24"
            img={everest}
            text="The National Geographic
             and Rolex Perpetual Planet Everest Expedition
              journeyed to the top of the 
              world’s tallest mountain in pursuit of new 
              knowledge of these vulnerable and dynamic 
              systems."
          />
          <a href="#" id="button-train-paper">
            Train!
          </a>
        </div>

        <div>
          <FeatureCard />
        </div>
      </div>
    </main>
  );
}

export default Home;
