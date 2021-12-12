import React from 'react';
import ToiecCard from '../../common/bandItem/toiecCard';

const toiecId = ["1", "1", "1"];

function SectionCard({ titleCard, content, state, handles }) {
    var values = Object.keys(content);
    return (
        <div className="section-skill-card">
            <div className="toiec-card">
                <div className="toiec-container">
                    <div className="cardContent-header-container">
                        <div className="toiec-title-header">{titleCard}</div>
                    </div>
                    <div className="containerT">
                        <ToiecCard
                            content={content}
                            id={toiecId}
                            handles={handles} />
                        <button href="#" className="button-toiec">S'entrainer</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SectionCard;