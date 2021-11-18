import ChallengeCard from './progress/ChallengeCard';
import DailyCard from './progress/DailyCard';
import NextAwardCard from './progress/NextAwardCard';
import DashCard from './dashboard/DashCard'
import DataStat from './dashboard/DataStat'
import PaperCard from './read/PaperCard'
import ReadCategory from './read/ReadCategory'
import HeaderComponent from '../header/Header';

import '../../assets/css/main/main.css'
import '../../assets/css/home/dashboard.css'
import '../../assets/css/home/paper.css'
import '../../assets/css/home/progress.css'
import '../../assets/css/home/global/layout.css'
import '../../assets/css/home/global/progress-bar.css'

import {
    bush,logo_parrot_adulte,basket_jump,everest,
    science,history,politics,sport,terrorisme,gaming
} from '../../assets/img/index'

function Home(props) {
    return (
        <div id="root-css">
            <img className="bush2" src={bush}/>
            <img id="parrot-home" src={logo_parrot_adulte}/>

            <HeaderComponent />

            <main>

                <div id="progress-card" className="card">
                    <div id="title-progress">Progression</div>
                    <ChallengeCard titleCard="Defi du jour"/>
                    <DailyCard titleCard="Objectifs quotidiens"/>
                    <NextAwardCard titleCard="Prochaine Récompense"/>
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
                                <div className="small-line-dash" style={{height:'3px',width:'30%'}}></div>
                            </div>
                        </div>
                    </div>
                    <DashCard />
                    <div className="stat-container">
                        <div id="title-stat">Quelques stats</div>
                        <div className="header-infos-container">
                            <div className="selection-container">
                                <DataStat title="Lecons lues" score="10/120"/>
                                <DataStat title="Exercices effectués" score="5/42"/>
                                <DataStat title="Articles lus" score="20"/>
                            </div>                                                           
                        </div>
                         
                    </div>
                </div>
                
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
                    <div id="category-container">
                        <div id="title-category">Categories</div>
                        <div className="class-category">
                            <ReadCategory text="Science" img={science} />
                            <ReadCategory text="Histoire" img={history} />
                            <ReadCategory text="Politique" img={politics} />
                            <ReadCategory text="Sport" img={sport} />
                            <ReadCategory text="Terrorisme" img={terrorisme} />
                            <ReadCategory text="Gaming" img={gaming} />
                        </div>
                        <div id="text-infos-category">Plus de catégorie...</div>
                        <div className="black-triangle-down"></div>
                        <a href ="#" id="button-train-paper">S'entrainer</a>
                    </div>
                    
                </div>
            </main>
        </div>
        )
}

export default Home;
  