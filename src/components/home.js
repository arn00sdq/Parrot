import '../no_js/css/main/main.css'
import '../no_js/css/home/dashboard.css'
import '../no_js/css/home/paper.css'
import '../no_js/css/home/progress.css'
import '../no_js/css/home/global/layout.css'
import '../no_js/css/home/global/progress-bar.css'
import '../no_js/css/general/global.css'
import '../no_js/css/general/header.css'

import bush from '../no_js/img/bush.png';
import adult_parrot from '../no_js/img/logo_parrot_adulte.png';
import orange_house from '../no_js/img/orange-house.png';
import pencil from '../no_js/img/pencil.png';
import tool_icon from '../no_js/img/tool-icon.png';
import book_icon from '../no_js/img/book-icon.png';
import flag_britain from '../no_js/img/flag_britain.png';
import down_arrow from '../no_js/img/down-arrow.png';
import feather_icon from '../no_js/img/feather-icon.jpg';
import flame_icon from '../no_js/img/flame-icon.jpg';
import profil_icon from '../no_js/img/profil-icon.png';
import ready_icon from '../no_js/img/ready-icon.png';
import treasure from '../no_js/img/treasure.png';

import basket_jump from '../no_js/img/basket-jump.jpg';
import everest from '../no_js/img/everest.jpg';

import science from '../no_js/img/mini_logo/science.jpeg';
import history from '../no_js/img/mini_logo/history.jpg';
import politics from '../no_js/img/mini_logo/politics.jpg';
import sport from '../no_js/img/mini_logo/sport.jpg';
import terrorisme from '../no_js/img/mini_logo/terrorisme.jpeg';
import gaming from '../no_js/img/mini_logo/gaming.jpg';

function NavSection({src,href,text}){
    return (
        <div className="nav-section">
            <a href={href} className="nav-text current-page">{text}</a>
            <img src={src} className="nav-icon"/>
        </div>
    );
}

function InfoSection({srcFlag,srcArrow, classArrow}){
    return (
        <div className="infos-section">
            <img src={srcFlag} className="infos-icon"/>
            <img src={srcArrow} className={classArrow}/>
        </div>
    );
}

/*Progress card*/
function Reward(props){
    return (<img className={props.imgReward} src={props.classReward}/>);
}

function ChallengeCard({titleCard}){
    return(
        <div className="progress-card">
            <div className="progress-title-card">{titleCard}</div>
                <ChallengeContainer ExText="Les temps du passé. Ex 6"/>
            <div className="daily-award">
                <Reward imgReward='chest-reward' classReward={treasure}/>
                <Reward imgReward="chest-reward" classReward={treasure}/>
                <Reward imgReward="chest-reward" classReward={treasure}/>
            </div>
        </div>
    );
}

function ChallengeContainer(props){
    return (
        <div className="objectif-container">
            <div className="circular-progress">
                <div className="inner-circle">
                    <div className="circular-value-container">100%</div>
                </div>
            </div>
            <div className="progress-text-card">{props.ExText}</div>
                <img className="chest-reward" src={ready_icon}/>
        </div>
    );
}

function DailyCard(props){
    return(
        <div className="progress-card">
            <div className="progress-title-card">{props.titleCard}</div>
            <DailyContainer imgReward={treasure} dailyText='Réalise deux exercices'/>
            <DailyContainer imgReward={feather_icon} dailyText='Consulte un magazine sportif'/>
        </div>
    );
}

function DailyContainer(props){
    return (
        <div className="objectif-container">
            <img className="chest-reward" src={props.imgReward}/>
            <div className="progress-text-card">{props.dailyText}</div>
            <div className="container-bar-xp">
                <div className="small-text-xp">5/10 xp</div>
                <div className="small-xp-bar">
                    <div className="progress-xp-bar" style={{backgroundColor:'#F9A014',height:'5px',width:'50%',borderRadius: '10px'}}></div>
                    </div>   
            </div>   
        </div>
    );
}

function NextAwardCard(props){
    return (
        <div className="progress-card">
            <div className="progress-title-card">{props.titleCard}</div>
            <div className="container-bar-xp">
                <div className="large-text-xp">5/10 xp</div>
                <div className="large-xp-bar">                          
                    <div className="progress-xp-bar" style={{backgroundColor:'#F9A014',height:'5px',width:'70%',borderRadius: '10px' }}></div>
                </div>
            </div> 
            <div className="daily-award">
            <Reward imgReward='chest-reward' classReward={feather_icon}/>
            <Reward imgReward='chest-reward' classReward={feather_icon}/>
            <Reward imgReward='chest-reward' classReward={feather_icon}/>
            <Reward imgReward='chest-reward' classReward={treasure}/>
            </div>
        </div>
    )
}

/*dashboard*/

function HeaderDashCard(props){
    return (
        <div className="header-dash-card">
            <div className="header-dash-text">{props.headerText}</div>
            <div className="help-container">
                <div className="header-dash-text">Aide</div>
                <div className="orange-triangle-down"></div>
            </div>                   
        </div>
    );
}

function ActivityContainer(props){
    return (
        <div className="activity-container">
            <div className="circular-progress">
                <div className="inner-circle">
                        <div className="circular-value-container">100%</div>
                    </div>
            </div>
            <div className="main-text-card">Les temps du passé. Ex 4</div>
            <div className="text-resume">Reprendre</div>
            <img className="chest-reward" src="img/right-orange-arrow.png"/>
        </div>
    );
}

function DashCard(props){
    return (
        <div className="dash-card">
            <HeaderDashCard headerText="Activités récentes"/>
            <div className="main-card-dash">
                <ActivityContainer mainText="Les temps du passé. Ex 4" />
                <ActivityContainer mainText="Le subjonctif. Ex6" />
                <ActivityContainer mainText="Le futur de l'indicatif. Ex 6" />
            </div>
        </div>
    )
}




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
                                <div className="center-align-infos">
                                    <div className="selection-container-text">Lecons lues</div>
                                    <div className="stat-score-text">10/120</div>
                                </div>
                                <div className="center-align-infos">
                                    <div className="selection-container-text">Exercices effectués</div>
                                    <div className="stat-score-text">5/42</div>
                                </div>
                                <div className="center-align-infos">
                                    <div className="selection-container-text">Articles lus</div>
                                    <div className="stat-score-text">20</div>
                                </div>
                            </div>                                                           
                        </div>
                         
                    </div>
                </div>
                
                <div id="read-container">
                    <div id="title-progress">Lire Pour s'entrainer</div>
                    <div className="paper-card">
                        <div className="paper-infos-card">
                            <div className="paper-category-text">Sport</div>
                            <div className="paper-title-text">Saut de 50M</div>
                            <div className="paper-date-text">DEC 13</div>
                            <div className="paper-main-text">Balkan a travaillé pour polygone studio pour
                                                         concevoir la structure de point aux style visuel
                                                         de la ville.
                            </div>
                            <div className="paper-read-text"><u>Continue reading</u></div>
                        </div>
                        <img className="paper-img" src={basket_jump }/>
                    </div>
                    <div className="paper-card">
                        <div className="paper-infos-card">
                            <div className="paper-category-text">Voyage</div>
                            <div className="paper-title-text">Mont Everest</div>
                            <div className="paper-date-text">DEC 13</div>
                            <div className="paper-main-text">Balkan a travaillé pour polygone studio pour
                                                         concevoir la structure de point aux style visuel
                                                         de la ville.
                            </div>
                            <div className="paper-read-text"><u>Continue reading</u></div>
                        </div>
                        <img className="paper-img" src={everest}/>
                    </div>
                    <div id="category-container">
                        <div id="title-category">Categories</div>
                        <div className="class-category">
                            <div className="read-category">
                                <img src={science} className="category-icon"/>
                                <div className="text-read-category">Science</div>
                            </div>
                            <div className="read-category">
                                <img src={history} className="category-icon"/>
                                <div className="text-read-category">Histoire</div>
                            </div>
                            <div className="read-category">
                                <img src={politics} className="category-icon"/>
                                <div className="text-read-category">Politique</div>
                            </div>
                            <div className="read-category">
                                <img src={sport}className="category-icon"/>
                                <div className="text-read-category">Sport</div>
                            </div>
                            <div className="read-category">
                                <img src={terrorisme} className="category-icon"/>
                                <div className="text-read-category">Terrorisme</div>
                            </div>
                            <div className="read-category">
                                <img src={gaming} className="category-icon"/>
                                <div className="text-read-category">Gaming</div>
                            </div>
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
  