import { _uniqueId } from "lodash/uniqueId";
import {basket_jump, everest, medium_parrot, feather} from  "./images"
import {data as levels} from "./levels" 
import {data as themes} from "./themes"

const data = [
    {
        id,
        type : "Word2Img",
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
    },
    {
        id,
        type : "Word2Img",
        level : levels.BEGINNER,
        theme : themes.ANIMALS,
        rewards : {
            treasures : 0,
            feathers : 2,
        },
        content : {
            order: "Pick the word that best suits the image",
            steps : 4,
            images : 
            [
                {
                    url : everest,
                    word : 'Mountain'
                },
                {
                    url : medium_parrot,
                    word : 'Bird'
                },
                {
                    url : feather,
                    word : 'Feather'
                },
                {
                    url : basket_jump,
                    word : 'Basketball'
                }
            ],
            words : [
                ['Door', 'Hand', 'Guitar', 'Mountain'],
                ['Dog', 'Bird', 'Spider', 'Mouse'],
                ['Plane', 'Feather', 'Treasure', 'House'],
                ['Football', 'Cricket', 'Basketball', 'School']
            ],
        },
    }
];
    

module.exports(
    data.forEach((element) => {
      element.id = _uniqueId("EX");
    })
  );