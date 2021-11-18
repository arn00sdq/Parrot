const Row = (flag,level) => {
    const row=[];
    if (flag){
        for (const [key, value] of Object.entries(flag))
            row.push(<div className="flag-point-small">{value}</div>)
    }else{
        row.push(<div className="level-flag">{level}</div>)
    }
    return row;
}

function RowContentSummarize(props){
    return (
        <div className="row-section-summarize">
            <div className="title-row-summarize">{props.title}</div>
            <div class="row-content-summarize">
                {Row(props.flag,props.level)}
            </div>
        </div>
    )
}

export default RowContentSummarize;