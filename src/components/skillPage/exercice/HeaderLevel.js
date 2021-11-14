import intero_icon from '../../../assets/img/intero-sign.png';

function HeaderLevel(props){
    return(
        <div className="header-level">
            <div className="title-level">{props.titleCard}</div>
            <img class="intero-icon" src={intero_icon}/>
        </div>
    );
}

export default HeaderLevel;