import {
  basket_jump,
  everest,
  medium_parrot,
  feather,
  Word2Img,
  pres_perfect,
  
} from "./images";
import { data as levels } from "./levels";
import { data as themes } from "./themes";
import { data as tenses } from "./english_tenses";

var data = [
  {
    id: "EX1",
    title: "Matching objects!",
    type: "Word2Img",
    icon: pres_perfect,
    summary: {
      level: levels.BEGINNER,
      themes: [themes.ANIMALS, themes.CLOTHING],
      rewards: {
        treasures: 0,
        feathers: 2,
      },
      section:{
        primary : [""],
        sub : [""]
      }
      
    },
    description:
        "This exercise is meant to teach\
       you the basics of english vocabulary.\
        You will be presented an image\
         and be asked to chose the word \
         that corresponds to the presented photography.",
    content: {
      order: "Pick the word that best suits the image",
      steps: 4,
      images: [
        {
          url: everest,
          word: "Mountain",
        },
        {
          url: Word2Img.bird_photo,
          word: "Bird",
        },
        {
          url: Word2Img.feather_photo,
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
    title: "Matching instruments!",
    type: "Word2Img",
    icon: pres_perfect,
    summary: {
      level: levels.INTERMEDIATE,
      themes: [themes.GEOGRAPHY, themes.SPORTS],
      rewards: {
        treasures: 2,
        feathers: 1,
      },
      section:{
        primary : [""],
        sub : [""]
      }
    },
    
    description:
      "This exercise is meant to teach\
     you the basics of english vocabulary.\
      You will be presented an image\
       and be asked to chose the word \
       that corresponds to the presented photography.",
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
        ["Clip", "Bird", "Transverse flute", "Mouse"],
        ["Plane", "Guitar", "Treasure", "Laptop"],
        ["Table", "Cricket", "Basketball", "Trombone"],
      ],
    },
  },
  {
    id: "EX3",
    title: "Matching instruments!",
    type: "Word2Img",
    icon: pres_perfect,
    summary: {
      level: levels.INTERMEDIATE,
      themes: [themes.GEOGRAPHY, themes.SPORTS],
      rewards: {
        treasures: 2,
        feathers: 1,
      },
      section:{
        primary : [""],
        sub : [""]
      }
    },
    description:
      "This exercise is meant to teach\
     you the basics of english vocabulary.\
      You will be presented an image\
       and be asked to chose the word \
       that corresponds to the presented photography.",
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
        ["Clip", "Bird", "Transverse flute", "Mouse"],
        ["Plane", "Guitar", "Treasure", "Laptop"],
        ["Table", "Cricket", "Basketball", "Trombone"],
      ],
    },
  },
  {
    id: "EX4",
    title: "Matching instruments!",
    type: "Word2Img",
    icon: pres_perfect,
    summary: {
      level: levels.INTERMEDIATE,
      themes: [themes.GEOGRAPHY, themes.SPORTS],
      rewards: {
        treasures: 2,
        feathers: 1,
      },
      section:{
        primary : [""],
        sub : [""]
      }
    },
    description:
      "This exercise is meant to teach\
     you the basics of english vocabulary.\
      You will be presented an image\
       and be asked to chose the word \
       that corresponds to the presented photography.",
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
        ["Clip", "Bird", "Transverse flute", "Mouse"],
        ["Plane", "Guitar", "Treasure", "Laptop"],
        ["Table", "Cricket", "Basketball", "Trombone"],
      ],
    },
  },
  {
    id: "EX6",
    title: "Vocabulary Word Race",
    type: "DriftWord",
    icon: pres_perfect,
    summary: {
      level: levels.INTERMEDIATE,
      themes: [themes.ANIMALS],
      rewards: {
        treasures: 3,
        feathers: 3,
      },
      section:{
        primary : [""],
        sub : [""]
      }
    },
    description:
      "In this exercise, you will have to choose the words\
       that correspond to the word presented. They go fast,\
        so you will have to be twice as fast to succeed!",
    content: {
      order: "Select the words that correpond to the theme below.",
      theme: "Mammals",
      correctWords: ['rat','cat','dog', 'deer', 'monkey', 'bat', 'whale', 'dolphin'],
      wrongWords: ['lizard', 'shark', 'snake', 'chicken']
    },
  },
];

export { data };
