import React from 'react';

function Recap({section}){
    var row = []
    console.log(section.primary)
    if( section.primary[0] != ""){
        section.primary.forEach((element,index) => {
            row.push(
                <div className="row-summary">
                    <div className="summary-number-primary">{index}</div>
                    <div className="summary-primary-text">{element}</div>
                </div>
            )
            for (let i = index*2; i<2+index*2 ; i++){
                row.push(
                    <div className="row-summary">
                        <div className="summary-number-secondary">{i}</div>
                        <div className="summary-secondary-text">{section.sub[i]}</div>
                    </div>
                )
            }
            
        });
    }
    
    return row;
}

export default Recap;