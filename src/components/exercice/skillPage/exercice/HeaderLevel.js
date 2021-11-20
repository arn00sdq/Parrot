<<<<<<< HEAD:src/components/skillPage/exercice/HeaderLevel.js
import React from 'react';
import {intero_sign } from '../../../assets/img/index';
=======
import {intero_sign } from '../../../../assets/img/index';
>>>>>>> af62d620bb5f80ac779cdf441ec37bdff12cdb58:src/components/exercice/skillPage/exercice/HeaderLevel.js

function HeaderLevel(props){
    return(
        <div className="header-level">
            <div className="title-level">{props.titleCard}</div>
            <img class="intero-icon" src={intero_sign}/>
        </div>
    );
}

export default HeaderLevel;