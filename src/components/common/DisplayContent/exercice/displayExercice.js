import PictBtn from './type/pictBtn'

function displayExercice(props){
    const row=[];  
    switch (props.exercice.id){ 
        case "0001": 
            row.push(<PictBtn exProps={props.exercice.Instrument.pictProps} instruction={props.exercice.instruction[0]}/>); // <PictBtn />
            row.push(<PictBtn exProps={props.exercice.Instrument.btnSyno} instruction={props.exercice.instruction[1]}/>); //<PictBtn />
            break;
        case "0002":
            //display ex2
            break;
        case "0003":
            //display ex3
            break;
    }
    console.log(row)
    return row;
}

export default displayExercice;