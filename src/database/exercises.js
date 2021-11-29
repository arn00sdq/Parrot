import { _uniqueId } from "lodash/uniqueId";
import {basket_jump, everest} from  "./images"

const data = [
    {
        id,
        type,
        level : "Débutant (A1 - A2)",
        categories :["Present-perfect","Instruments"],
        rewards : {
            treasures : 0,
            feathers : 2,
        },
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
    

module.exports(
    data.forEach((element) => {
      element.id = _uniqueId("EX");
    })
  );