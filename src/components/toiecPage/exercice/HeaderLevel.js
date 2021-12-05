import React from 'react';
import {intero_sign } from '../../../database/images';

function HeaderLevel(props){
    return(
        <div className="header-level">
            <div className="title-level">{props.titleCard}</div>
            <img className="intero-icon" src={intero_sign}/>
        </div>
    );
}

export default HeaderLevel;