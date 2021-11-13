import ChallengeCard from './progress/ChallengeCard';
import DailyCard from './progress/DailyCard';
import NextAwardCard from './progress/NextAwardCard';
import DashCard from './dashboard/DashCard'
import DataStat from './dashboard/DataStat'
import PaperCard from './read/PaperCard'
import ReadCategory from './read/ReadCategory'
import NavSection from '../header/NavSection'
import InfoSection from '../header/InfoSection'

import '../../assets/css/main/main.css'
import '../../assets/css/home/dashboard.css'
import '../../assets/css/home/paper.css'
import '../../assets/css/home/progress.css'
import '../../assets/css/home/global/layout.css'
import '../../assets/css/home/global/progress-bar.css'
import '../../assets/css/general/global.css'
import '../../assets/css/general/header.css'

import bush from '../../assets/img/bush.png';
import adult_parrot from '../../assets/img/logo_parrot_adulte.png';
import orange_house from '../../assets/img/orange-house.png';
import pencil from '../../assets/img/pencil.png';
import tool_icon from '../../assets/img/tool-icon.png';
import book_icon from '../../assets/img/book-icon.png';
import flag_britain from '../../assets/img/flag_britain.png';
import down_arrow from '../../assets/img/down-arrow.png';
import feather_icon from '../../assets/img/feather-icon.jpg';
import flame_icon from '../../assets/img/flame-icon.jpg';
import profil_icon from '../../assets/img/profil-icon.png';
import treasure from '../../assets/img/treasure.png';

import basket_jump from '../../assets/img/basket-jump.jpg';
import everest from '../../assets/img/everest.jpg';

import science from '../../assets/img/mini_logo/science.jpeg';
import history from '../../assets/img/mini_logo/history.jpg';
import politics from '../../assets/img/mini_logo/politics.jpg';
import sport from '../../assets/img/mini_logo/sport.jpg';
import terrorisme from '../../assets/img/mini_logo/terrorisme.jpeg';
import gaming from '../../assets/img/mini_logo/gaming.jpg';

function Home(props) {
    return (
        <div id="root-css">
            <img className="bush2" src={bush}/>
            <img id="parrot-home" src={adult_parrot}/>

            <header id="container-header">
                <div className="brand-section">
                    <div id="brand-logo">PARROT</div>
                </div>
                <nav>
                    <NavSection src={orange_house} href="#" text="Accueil"/>
                    <NavSection src={pencil} href="#" text="Exercices"/>
                    <NavSection src={tool_icon} href="#" text="Outils"/>
                    <NavSection src={book_icon} href="#" text="Lire"/>
                </nav>
                <div className="user-infos">
                    <InfoSection srcFlag={flag_britain} srcArrow={down_arrow} classArrow="arrow-icon"/>
                    <div className="infos-section">
                        <img src={feather_icon} className="infos-icon"/>
                        <p id="feather-number">4</p>
                    </div>
                    <div className="infos-section">
                        <img src={flame_icon} id="flame-icon"/>
                        <p>4</p>
                    </div>
                    <div className="infos-section">
                        <img  src={profil_icon} className="infos-icon"/>
                        <img src={down_arrow} className="arrow-icon"/>
                    </div>
                </div>
            </header>

            <main>

                <div id="progress-container">
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
                
                <div id="read-container">
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
  