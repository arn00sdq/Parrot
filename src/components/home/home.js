import React from 'react';
import ChallengeCard from './progress/ChallengeCard';
import DailyCard from './progress/DailyCard';
import NextAwardCard from './progress/NextAwardCard';
import DashCard from './dashboard/DashCard'
import DataStat from './dashboard/DataStat'
import PaperCard from './read/PaperCard'
import FeatureCard from './feature/featureCard'

import {
    basket_jump, everest, science, history, politics, sport, terrorisme, gaming, logo_parrot_adulte, bush
} from '../../database/images'

function Home(props) {
    return (
        <main>
            <img className="bush2" src={bush} />
            <img id="parrot-home" src={logo_parrot_adulte} />
            <div id="progress-card" className="card">
                <div id="title-progress">Progression</div>
                <ChallengeCard titleCard="Defi du jour" />
                <DailyCard titleCard="Objectifs quotidiens" />
                <NextAwardCard titleCard="Prochaine Récompense" />

            </div>

            <div id="dashboard-container">
                <div id="title-dash">Dashboard</div>
                <div className="header-infos-container">
                    <div className="selection-container">
                        <div className="selection-container-text">Activités récentes</div>
                        <div className="selection-container-text">Résumé</div>
                        <div className="selection-container-text">Lecon suggérées</div>
                    </div>
                    <div className="header-line-dash">
                        <div className="large-line-dash">
                            <div className="small-line-dash" style={{ height: '3px', width: '30%' }}></div>
                        </div>
                    </div>
                </div>
                <DashCard />
                <div className="stat-container">
                    <div id="title-stat">Quelques stats</div>
                    <div className="header-infos-container">
                        <div className="selection-container">
                            <DataStat title="Lecons lues" score="10/120" />
                            <DataStat title="Exercices effectués" score="5/42" />
                            <DataStat title="Articles lus" score="20" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-section">
                <div id="read-card" className="card">
                    <div id="title-progress">Lire Pour s'entrainer</div>
                    <PaperCard category="Sport" title="Saut de 50M" date="DEC 13" img={basket_jump} text="Balkan a travaillé pour polygone studio pour
                                                                                        concevoir la structure de point aux style visuel
                                                                                        de la ville."
                    />
                    <PaperCard category="Voyage" title="Mont Everest" date="DEC 13" img={everest} text="Balkan a travaillé pour polygone studio pour
                                                                                        concevoir la structure de point aux style visuel
                                                                                        de la ville."
                    />
                    <a href="#" id="button-train-paper">S'entrainer</a>
                </div>

                <div>
                    <FeatureCard />
                </div>
            </div>

        </main>
    )
}

export default Home;