import React from 'react';


function RowLecon(lecon) {
    var row = [];
    var conc = [];
    var fusion = "";
    console.log(Array.isArray(lecon.subTitle))          // lecon contient tt
    for (const [key, value] of Object.entries(lecon)) { // clé valeur dans lecon
        var iterateur = Object.keys(lecon); // tableau de clé
                            /*Object.values*/ // valeur des clé
        if (Array.isArray(value)) { // regarde si c un tableau
            for (let i in value) { // brut
                console.log(lecon[iterateur[i]])
                if (typeof value[i] === 'object') { // regarde si c un object
                } else {
                    row.push(<div className={key} key={key}>{lecon[iterateur[i]]}</div>);
                    row.push(<div className={key} key={key}>{lecon[iterateur[i+1]]}</div>);
                }
            }
        } else {
            if (typeof (value) !== 'number')
                row.push(<div className={key} key={key}>{value}</div>)
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

/*const keysText = Object.keys(value);
                    for (const [index] of keysText) { // boucle sur le sous objet
                        const keyO = Object.keys(value[index]);
                        if (typeof (value[index].text) === 'undefined') {
                            conc.push(React.createElement('div', null, "f"));
                        } else {
                            conc.push(React.createElement('div', null, "ee"));
                        }
                    }
                    const reducer = (previousValue, currentValue) => previousValue + currentValue;
                    console.log(conc.reduce(reducer));
                    fusion = conc.map((currElement, index) => {
                        console.log(conc.at(index))
                        return (conc.at(index));
                    }).join(' ');
                    row.push(conc)*/