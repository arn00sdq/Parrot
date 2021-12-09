import React from 'react';
import NavSection from './NavSection';
import {navProps as navContent} from '../navProps';

function NavContent(){
    var row = [];
    for (const navLink in navContent) {
        if (navContent.hasOwnProperty.call(navContent, navLink)) {
            const element = navContent[navLink];
            row.push(<NavSection content={element}/>)
        }
    }
    return row;
}

export default NavContent;
