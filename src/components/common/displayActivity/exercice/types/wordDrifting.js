import React from 'react';
function WordDrifting(props) {
    return (
        <div className="drift-container">
            <div className="title-drift">The word is : <span className="word-drift">Car</span></div>
            <div className="infinite">
                <div className="word-container">
                    <span className="word-vrom">Doggo</span>
                </div>
                <div className="shadow"></div>
            </div>
        </div>

    );
}

export default WordDrifting;