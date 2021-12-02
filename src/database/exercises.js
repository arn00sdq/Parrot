import {
    basket_jump,
    everest,
    medium_parrot,
    feather
} from "./images";
import {
    data as levels
} from "./levels";
import {
    data as themes
} from "./themes";
var data = [
    {
        id: "EX1",
        title: "Matching!",
        type: "Word2Img",
        summary: {
            level: levels.BEGINNER,
            themes: [
                themes.ANIMALS,
            ],
            rewards: {
                treasures: 0,
                feathers: 2,
            },
        },
        content: {
            order: "Pick the word that best suits the image",
            steps: 4,
            images: [{
                    url: everest,
                    word: "Mountain",
                },
                {
                    url: medium_parrot,
                    word: "Bird",
                },
                {
                    url: feather,
                    word: "Feather",
                },
                {
                    url: basket_jump,
                    word: "Basketball",
                },
            ],
            words: [
                ["Door", "Hand", "Guitar", "Mountain"],
                ["Dog", "Bird", "Spider", "Mouse"],
                ["Plane", "Feather", "Treasure", "House"],
                ["Football", "Cricket", "Basketball", "School"],
            ],
        },
    },
];

export {
    data
};