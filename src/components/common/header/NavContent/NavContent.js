import React from 'react';
import NavSection from './NavSection';

function NavContent(props){
    var row = [];
    const nav = props.navContent;
    for (const [key, value] of Object.entries(nav)){
        row.push(<NavSection url={value.icon} key={value.route} value={value}/>)// implementer object.key pour match
    }
    return row;
}

export default NavContent;
