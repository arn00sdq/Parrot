import React from 'react';
import UserSection from './UserSection'

function UserContent(props){
    var row = [];
    const user = props.userContent;
    row.push();
    for (const [key, value] of Object.entries(user)){
        row.push(<div className="infos-section"> 
                    <UserSection arr={value}/> 
                </div>
        )
    }
    return row;
    
}

export default UserContent;