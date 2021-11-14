import {intero_sign } from '../../../assets/img/index';

function HeaderLevel(props){
    return(
        <div className="header-level">
            <div className="title-level">{props.titleCard}</div>
            <img class="intero-icon" src={intero_sign}/>
        </div>
    );
}

export default HeaderLevel;