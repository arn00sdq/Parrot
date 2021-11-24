import React from 'react';

import NavContent from './NavContent/NavContent'
import UserContent from './UserContent/UserContent'

function HeaderConstruction(props){
    const nav = props.header.navProps;
    const user = props.header.userProps;
    return (

        <header id="container-header">
                <div className="brand-section">
                    <div id="brand-logo">PARROT</div>
                </div>
            <nav>
                <NavContent navContent={nav}/>
            </nav>

            <div className="user-infos">
                <UserContent userContent={user}/>
            </div>
        </header>
    );
}

export default HeaderConstruction;