import {
  basket_jump,
  everest,
  medium_parrot,
  feather,
  Word2Img,
  pres_perfect
} from "./images";
import { data as levels } from "./levels";
import { data as themes } from "./themes";

var data = [
  {
    id: "EX1",
    title: "Matching!",
    type: "Word2Img",
    icon: pres_perfect,
    description:
      "This exercise is meant to teach\
       you the basics of english vocabulary.\
        You will be presented an image\
         and be asked to chose the word \
         that corresponds to the presented photography.",
    summary: {
      level: levels.BEGINNER,
      duration: 5,
      themes: [themes.ANIMALS, themes.CLOTHING],
      rewards: {
        treasures: 0,
        feathers: 2,
      },
    },
    content: {
      order: "Pick the word that best suits the image",
      steps: 4,
      images: [
        {
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
  {
    id: "EX2",
    title: "Matching!",
    type: "Word2Img",
    icon: pres_perfect,
    description:
    "This exercise is meant to teach\
     you the basics of english vocabulary.\
      You will be presented an image\
       and be asked to chose the word \
       that corresponds to the presented photography.",
    summary: {
      level: levels.INTERMEDIATE,
      duration: 5,
      themes: [themes.ANIMALS, themes.CLOTHING],
      rewards: {
        treasures: 0,
        feathers: 2,
      },
    },
    content: {
      order: "Pick the word that best suits the image",
      steps: 4,
      images: [
        {
          url: Word2Img.clarinette,
          word: "Clarinet",
        },
        {
          url: Word2Img.flute_traversiere,
          word: "Transverse flute",
        },
        {
          url: Word2Img.guitare,
          word: "Guitar",
        },
        {
          url: Word2Img.trombone,
          word: "Trombone",
        },
      ],
      words: [
        ["Door", "Hand", "Clarinet", "Paer"],
        ["Clip", "Bird", "Transverse-flute", "Mouse"],
        ["Plane", "Guitar", "Treasure", "Laptop"],
        ["Table", "Cricket", "Basketball", "Trombone"],
      ],
    },
  },
];

export { data };
