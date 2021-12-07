import React from 'react';
import { Link } from 'react-router-dom';
import {
    liane, bush, large_parrot, flags
} from '../../database/images'

function Parrot() {

    return (
        <>
            <img id="liane" src={liane} />
            <img id="bush1" src={bush} />
            <img id="bush2" src={bush} />
            <img id="parrot" src={large_parrot} />
            <header id="main-header">
                <div id="langage-section">
                    <div id="langage-text">
                        Choose language :
                    </div>
                    <img src={flags.united_states} />
                </div>
            </header>
            <div className="welcome-section">
                <div id="main-title">
                    <div id="title-part-1">Welcome to</div>
                    <div id="title-part-2">PARROT</div>
                    <div className="sub-title">
                        The most fun and easy way
                    </div>
                    <div className="sub-title">
                        to learn any language you like !
                    </div>
                </div>
                <div id="sub-title-area">
                    <Link to="/home" id="button-start">START</Link>
                    <div id="sub-button-text">
                        Already have an account? <u> Log in</u>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Parrot;
