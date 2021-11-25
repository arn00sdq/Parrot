import React from 'react';


function RowLecon(lecon) {
    var row = [];
    var conc = [];
    var fusion ="";
    for (const [key, value] of Object.entries(lecon)) { // boucle sur section1
        if (typeof (value) === 'object') { //verifie un sous objet
            const keysText = Object.keys(value);
            for (const [index] of keysText) { // boucle sur le sous objet
                const keyO = Object.keys(value[index]);
                if (typeof (value[index].text) === 'undefined') {
                    conc.push(<div className={keyO} key={value[index].id}>{value[index].wordPrimary}</div>)
                } else {
                    conc.push(<div className={keyO} key={value[index].id}>{value[index].text}</div>)
                }
            }
            fusion = conc.map((currElement, index) => {
                return (conc.at(index).props.children);
              }).join(' ');
            row.push(fusion)
        } else {
            row.push(<div key={key}>{value}</div>)
        }

    }
    return row;
}

function Classic(props) {
    return (
        <div className="content-lecon-section" key={props.leconProps.id}>
            {RowLecon(props.leconProps)}
        </div>
    );
}

export default Classic;