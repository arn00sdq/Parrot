import React from 'react';
function ButtonSyno(props){
    return (
        <div className="syno-button-container">
            <div className="text-syno">{props.value}</div>
        </div>
    );
}

export default ButtonSyno;