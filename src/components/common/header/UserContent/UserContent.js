import React from 'react';
import UserSection from './UserSection'

function UserContent(props){
    var row = [];
    const user = props.userContent;
    for (const [key, value] of Object.entries(user)){
        row.push(<div key={value.id} className="infos-section"> 
                    <UserSection arr={value}/> 
                </div>
        )
    }
    return row;
    
}

export default UserContent;