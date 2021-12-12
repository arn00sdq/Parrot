import { actionTypes } from "./database/actiontypes";
//STARTERS
const exerciceStart = (exerciceId) => ({
  type: actionTypes.EXERCISE_START,
  payload: exerciceId,
});

const articleStart = (articleId) => ({
  type: actionTypes.ARTICLE_START,
  payload: { articleId },
});

const lessonStart = (lessonId) => ({
  type: actionTypes.LESSON_START,
  payload: { lessonId },
});

//HEADER
const hoverLanguage = () => ({
  type: actionTypes.HEADER.MSE_HOVER_LANG,
});

const changeLanguage = (newLanguage) => ({
  type: actionTypes.HEADER.CHANGE_LANG,
  payload: { newLanguage },
});

const hoverFeather = () => ({
  type: actionTypes.HEADER.MSE_HOVER_FEATHER,
});

const hoverFlame = () => ({
  type: actionTypes.HEADER.MSE_HOVER_FLAME,
});

const hoverUser = () => ({
  type: actionTypes.HEADER.MSE_HOVER_USER,
});

//HOME
//    DASHBOARD
const changeSection = (selectedSection) => ({
  type: actionTypes.HOME.DSHB_CHANGE_SECTION,
  payload: { selectedSection },
});

const helpButtonClick = (selectedSection) => ({
  type: actionTypes.HOME.DSHB_HELP_BTN_CLK,
  payload: { selectedSection },
});

//    TRAIN READING
const trainBtnClick = () => ({
  type: actionTypes.HOME.READING_TRAIN_BTN_CLK,
});

const expandCatBtnClick = () => ({
  type: actionTypes.HOME.READING_MRE_CAT_BTN_CLK,
});

const categoryIconClick = () => ({
  type: actionTypes.HOME.READING_CAT_ICON_CLK,
});

//PICKERS
const themeFilterChange = (filterName, from) => ({
  type: actionTypes.FILTER.THEME_CLK,
  payload: { filterName, from },
});
const levelFilterChange = (filterName, from) => ({
  type: actionTypes.FILTER.LEVEL_CLK,
  payload: { filterName, from },
});
const tenseFilterChange = (filterName, from) => ({
  type: actionTypes.FILTER.TENSE_CLK,
  payload: { filterName, from },
});

const inputSearchFilterChange = (newInputChange, from) => ({
  type: actionTypes.FILTER.KEYWORD_INPUT_CHANGE,
  payload: { newInputChange, from },
});
//EXERCICE PAGE
const incrementExercisePageStep = (from) => ({
  type: actionTypes.NEXT_STEP,
  payload : {from},
});

const substractLifeExercicePage = () => ({
    type: actionTypes.EXERCISE_PAGE.SUBS_LIFE
})

const addPointsExercicePage = () => ({
    type: actionTypes.EXERCISE_PAGE.ADD_POINT
})

//LESSON PAGE

const incrementLessonPageStep = (from) => ({
  type: actionTypes.NEXT_STEP,
  payload : {from},
});


export {levelFilterChange,articleStart,categoryIconClick,changeLanguage,changeSection,
    tenseFilterChange,exerciceStart,expandCatBtnClick,
    helpButtonClick,hoverFeather,hoverFlame,hoverLanguage,hoverUser,
    incrementExercisePageStep,lessonStart,themeFilterChange,trainBtnClick,
    substractLifeExercicePage,addPointsExercicePage, inputSearchFilterChange, incrementLessonPageStep}
