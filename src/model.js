import { profil_icon } from "./database/images";
const data = {
  config: {
    authors: "Made by DUDES Arnaud and ALONSO Ivan @UPPA",
  },
  path: {
    currentPath: "exercisePage",
  },
  user: {
    name: "Default User",
    icon: profil_icon,
    selectedLanguage: "English (US)",
    featherCount: 4,
    flameCount: 2,
    exercisesDone: [],
    lessonsRead: [],
    papersRead: [],
  },
  home: {
    dailyChallenge: 
      {
        id: 'EX1',
      }
    ,
    dailyObjectives: {
      exObjective: 2,
      leObjective: 1,
      paObjective: 2,
    },
    nextAward: {
      actObjective: 6,
    },
    trainReading: {
      articles: [
        {
          id: "1",
        },
      ],
      categories: [
        {
          id: "1",
        },
      ],
      moreCategoriesBtnToggle: false,
    },
  },
  skillPage: {
    elementary: {
      locked: false,
      exercises: [
        {
          id: "EX1",
        },
      ],
    },
    independant: {
      locked: false,
      exercises: [
        {
          id: "EX1",
        },
      ],
    },
    advanced: {
      locked: false,
      exercises: [
        {
          id: "EX1",
        },
      ],
    },
  },

  exercisePage: {
    exerciseId: "EX1",
    step: "0",
    end: false,
  },
  exercisePicker: {
    keywords_input: "",
    selectedThemes: [],
    selectedLevels: [],
  },
  lessonPage: {
    lessonId: "LE1",
    step: "0",
    end: false,
  },
  lessonPicker: {
    keywords_input: "",
    selectedTenses: [],
    selectedLevels: [],
  },
  paperPage: {
    paperId: "PA1",
    step: "0",
    end: false,
  },
  paperPicker: {
    keywords_input: "",
    selectedThemes: [],
    selectedLevels: [],
  },
};

export { data };
