import { profil_icon } from "./database/images";
import { data as ENG } from "./database/english_tenses";
const data = {
  config: {
    debug: false,
    authors: "Made by DUDES Arnaud and ALONSO Ivan @UPPA",
  },
  path: {
    currentPath: "exercisePage",
  },
  user: {
    name: "Default User",
    icon: profil_icon,
    selectedLanguage: "English (US)",
    featherCount: "4",
    flameCount: "4",
  },
  home: {
    stats: {
      lessons: {
        read: "10",
        total: "120",
      },
      exercises: {
        done: "5",
        total: "42",
      },
      articles: {
        read: "5",
        total: "42",
      },
    },
    progression: {
      dailyChallenge: [
        {
          id: "1",
          completed: false,
          rewards: {
            feathers: "0",
            treasures: "3",
          },
        },
      ],
      dailyObjectives: [
        {
          id: "1",
          progression: {
            count: "0",
            total: "2",
          },
        },
      ],
      nextAward: {
        currentXP: "5",
        totalXP: "10",
      },
    },
    dashboard: {
      section: "recentActivities",
      recentActivities: {
        helpBtnToggle: false,
        activities: [
          {
            id: "1",
            progress: "100",
          },
        ],
      },
      activitiesSummary: {
        helpBtnToggle: false,
        activities: [
          {
            id: "1",
          },
        ],
      },
      suggestedLessons: {
        helpBtnToggle: false,
        lessons: [
          {
            id: "1",
          },
        ],
      },
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
  },
  exercisePicker: {
    selectedThemes: [],
    selectedLevels: []
  },
  lessonPage: {
    lessonId: "LE1",
    step: "0",
  },
  lessonPicker: {
    selectedTenses: [],
    selectedLevels: []
  },
  paperPage: {
    paperId: "PA1",
    step: "0",
  },
  paperPicker: {
    selectedThemes: [],
    selectedLevels: []
  },
};

export { data };
