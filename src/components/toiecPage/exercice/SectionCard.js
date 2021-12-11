import React from 'react';
import ToiecCard from '../../common/bandItem/toiecCard';
import HeaderLevel from './HeaderLevel';

const toiecId = ["1", "1", "1"];

function SectionCard({ titleCard, content, state, handles }) {
    var values = Object.keys(content);
    return (
        <div className="section-skill-card">
            <HeaderLevel titleCard={titleCard} />
            <div className="toiec-card">
                <div className="toiec-container">
                    <div className="cardContent-header-container">
                        <div className="toiec-title-header">Indépedant</div>
                    </div>
                    <div className="containerT">
                        <ToiecCard
                            content={content}
                            id={toiecId}
                            handles={handles} />
                        <a href="#" className="button-train-skill">S'entrainer</a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SectionCard;