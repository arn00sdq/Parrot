import { profil_icon } from "./database/images";
import {data as ENG} from "./database/english_tenses"
const data = {
  config: {
    debug: false,
    authors: "Made by DUDES Arnaud and ALONSO Ivan @UPPA",
  },
  path: {
    currentPath: "exercicePage",
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
    
    selectedThemes: [
		{
			name: "Animals",
		  },
		  {
			name: "Clothing",
		  },
    ],
    selectedDuration: 5,
    /*OU
		selectedConjugation: 'Present perfect',
		selectedTheme: 'School',
		selectedDuration: '5',*/
    exercisesShown: [
      {
        id: "EX1",
      },
      {
        id: "EX2",
      },
      {
        id: "EX2",
      },
    ],
    pageNumber: 1,
  },
  lessonPage: {
    lessonId: "LE1",
    step: "0",
  },
  lessonPicker: {
    selectedCategories: [
      {
        name: "Present perfect",
      },
	  {
        name: "Future continuous",
      },
    ],
    journaux: [
      {
        id: "1",
        checked: true,
      },
      {
        id: "2",
        checked: false,
      },
      {
        id: "3",
        checked: true,
      },
    ],
    durations: {
      min5: true,
      min10: true,
      min15: false,
    },
    resultCount: 8,
    lessons: [
      {
        id: "LE1",
      },
      {
        id: "LE1",
      },
      {
        id: "LE1",
      },
    ],
    pageNumber: 1,
  },
  paperPage: {
    paperId: "PA1",
    step: "0",
  },
  paperPicker: {
    categorie: [
      {
        id: "1",
        checked: true,
      },
      {
        id: "2",
        checked: false,
      },
      {
        id: "3",
        checked: true,
      },
    ],
    journaux: [
      {
        id: "1",
        checked: true,
      },
      {
        id: "2",
        checked: false,
      },
      {
        id: "3",
        checked: true,
      },
    ],
    durations: {
      min5: true,
      min10: true,
      min15: false,
    },
    /*OU
		selectedConjugation: 'Present perfect',
		selectedTheme: 'School',
		selectedDuration: '5',*/
    resultCount: 8,
    papers: [
      {
        id: "PA1",
      },
      {
        id: "PA1",
      },
      {
        id: "PA1",
      },
      {
        id: "PA1",
      },
      {
        id: "PA1",
      },
      {
        id: "PA1",
      },
    ],
    pageNumber: 1,
  },
};

export { data };
