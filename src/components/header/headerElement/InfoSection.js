function InfoSection({srcFlag,srcArrow, classArrow}){
    return (
        <div className="infos-section">
            <img src={srcFlag} className="infos-icon"/>
            <img src={srcArrow} className={classArrow}/>
        </div>
    );
}

export default InfoSection;