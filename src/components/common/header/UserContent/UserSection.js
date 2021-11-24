import React from 'react';
function UserSection(props){
    var row=[];
    for (const [key, value] of Object.entries(props.arr)){
        switch (value[0]){
            case "img":
                row.push(<img src={value[1]} className={value[2]} />)
                break;
            case "p":
                row.push(<p id={value[2]} >{value[1]}</p>)
                break;
        }
    }
    return row;    
}

export default UserSection;