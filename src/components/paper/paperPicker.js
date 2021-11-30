import React from 'react';

import CardContainer from '../common/bandItem/cardContainer'
import ThemeContainer from '../common/filter/ThemeContainer'
import {bush,pres_perfect} from '../../database/images'

const themeProps = {
    Categorie : {
        title : "Catégorie",
        props : ["Histoire","Science","Politique"],
    },
    Journaux: {
        title : "Journaux",
        props : ["Time","Forbes","Science"],
    }
}

const paperPickerProps = {
    Santé : [{
        title: "Covid-19: les laboratoires s'inquitent",
        date: "10/11/2020",
        text : "Depuis quelques jours, le gouvernement français et l'Union européenne \
        appellent la population à se faire administrer une dose de vaccin de rappel pour \
        endiguer le rebond épidémique observé. Pourtant, une incertitude plane déjà sur la protection offerte par cette troisième dose."
        },
        {
        title: "Covid-19: les laboratoires s'inquitent",
        date: "10/11/2020",
        text : "Depuis quelques jours, le gouvernement français et l'Union européenne \
        appellent la population à se faire administrer une dose de vaccin de rappel pour \
        endiguer le rebond épidémique observé. Pourtant, une incertitude plane déjà sur la protection offerte par cette troisième dose."
        },
        {
            title: "Covid-19: les laboratoires s'inquitent",
            date: "10/11/2020",
            text : "Depuis quelques jours, le gouvernement français et l'Union européenne \
            appellent la population à se faire administrer une dose de vaccin de rappel pour \
            endiguer le rebond épidémique observé. Pourtant, une incertitude plane déjà sur la protection offerte par cette troisième dose."
            }
        ],
    Science : [{
        title: "Covid-19: les laboratoires s'inquitent",
        date: "10/11/2020",
        text : "Depuis quelques jours, le gouvernement français et l'Union européenne \
        appellent la population à se faire administrer une dose de vaccin de rappel pour \
        endiguer le rebond épidémique observé. Pourtant, une incertitude plane déjà sur la protection offerte par cette troisième dose."
        },
        {
        title: "Covid-19: les laboratoires s'inquitent",
        date: "10/11/2020",
        text : "Depuis quelques jours, le gouvernement français et l'Union européenne \
        appellent la population à se faire administrer une dose de vaccin de rappel pour \
        endiguer le rebond épidémique observé. Pourtant, une incertitude plane déjà sur la protection offerte par cette troisième dose."
        },
        {
            title: "Covid-19: les laboratoires s'inquitent",
            date: "10/11/2020",
            text : "Depuis quelques jours, le gouvernement français et l'Union européenne \
            appellent la population à se faire administrer une dose de vaccin de rappel pour \
            endiguer le rebond épidémique observé. Pourtant, une incertitude plane déjà sur la protection offerte par cette troisième dose."
            }
        ], 
}

function PaperPicker(props) {
    
    
    return (
        <div id="root-css">
            <img className="bush2" src={bush}/>

            <main>

                <div className="card">
                    <div className="filter-container">
                        <div className="title-filter">Recherche</div>
                        <ThemeContainer title="Recherche" content={themeProps} />
                    </div>
                </div>
                
                <div className="exercice-picker-card card">
                    <div className="header-picker">
                        <div className="tag-point-medium">Present perfect</div>
                        <div className="n-exercices">8 exercices</div>
                    </div>
                    <CardContainer title="Santé" content={paperPickerProps} />
                    
                </div>
           
            </main>
        </div>
        )
}

export default PaperPicker;
  