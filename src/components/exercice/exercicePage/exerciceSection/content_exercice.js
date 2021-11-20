import ButtonSyno from './btnSyno'
import PictExSection from './picture'

function RowExercice(exercice){
    const row=[];
    var firstKey = Object.keys(exercice).at(0);
    var secondKey = Object.keys(exercice).at(1); // utilisée pour les opt
    switch(exercice.type) {
        case 'picture':
            var arr_img=exercice[firstKey];
            var arr_opt=exercice[secondKey];
            for (let i = 0; i<arr_img.length; i++)
                row.push(<PictExSection img={arr_img[i]} opt={arr_opt[i]}/>) // opt a finir
            break;
        case 'btn':
            var arr_value=exercice[firstKey];
            for (let i = 0; i<arr_value.length; i++)
                row.push(<ButtonSyno value={arr_value[i]}/>)
            break;  
    }
    return row;
}

function Content_exercice(props){
    return(
        <div class="content-exercice-section">
            <div className="instruction-exercice">{props.instruction}</div>
            <div class="picture-exercice-container">
                {RowExercice(props.exProps)}
            </div>                             
        </div>
    );
}

export default Content_exercice;