import React from 'react';
import Reward from '../reward/Reward';
import CardContainer from './cardContainer'
import { Link, useNavigate } from "react-router-dom";
import {
    history

} from '../../../database/images'


function PaperListContainer({ papers, handles }) {
    const papersToShow = papers
    return (
        <div className="cardContent-container">
            <div className="paperCard-Container">
                {PaperList(papersToShow, handles)}
            </div>
        </div>
    )
}

function PaperList(papers, handles) {
    let row = [];
    papers.forEach(paper => {
        row.push(<CardContainer paper={paper} handles={handles} />)
    })
    return row;
}



export default PaperListContainer;