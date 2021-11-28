import { _uniqueId } from "lodash/uniqueId";
import * as assets from  "../assets/img/index"

const data = [
    {
        id,
        type,
        level : "Débutant (A1 - A2)",
        categories :["Present-perfect","Instruments"],
        rewards : ["treasure","feather_icon"],
        instructions: ["Selectionne le meilleur mot correspondant pour chaque image",
        "Selectionne les meilleur synonymes correspondant pour le mot"],
        instrument: {
            btnSyno: {
                value: ["guitare", "flute", "voile", "acordeon", "chien", "bass", "chat", "prise"],
                type: "btn",
            },

            pictProps: {
                img: [basket_jump, everest, everest],
                opt: ["guitare", "flute", "acordeon"],
                type: "picture",
            },
        },
    }
];




const pict_but_excercice = {
    title : "Instruments",
    exercice: {
        
    },

    
    id: "0001", //0001 - 0999 : ex ; 1001 - 1999 : lecon; 2001 - 2999 : paper
}

module.exports(
    data.array.forEach((element) => {
      element.id = _uniqueId("EX");
    })
  );