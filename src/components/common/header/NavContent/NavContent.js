import React from 'react';
import NavSection from './NavSection';

function NavContent(props){
    var row = [];
    const nav = props.navContent;
    for (const [key, value] of Object.entries(nav)){
        row.push(<NavSection key={value.id} value={value}/>)// implementer object.key pour match
    }
    return row;
}

export default NavContent;
