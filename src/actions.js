import { EXERCICE_START, ARTICLE_START, LESSON_START, HEADER, HOME, EXERCICE_PICKER } from './database/actiontypes';
//STARTERS
const exerciceStart = (exerciceId) => ({
    type : EXERCICE_START,
    payload : {exerciceId}
})

const articleStart = (articleId) => ({
    type : ARTICLE_START,
    payload : {articleId},
})

const lessonStart = (lessonId) => ({
    type : LESSON_START,
    payload : {lessonId},
})

//HEADER
const hoverLanguage = () => ({
    type : HEADER.MSE_HOVER_LANG,
})

const changeLanguage = (newLanguage) => ({
    type : HEADER.CHANGE_LANG,
    payload : {newLanguage}
})

const hoverFeather = () => ({
    type : HEADER.MSE_HOVER_FEATHER,
})

const hoverFlame = () => ({
    type : HEADER.MSE_HOVER_FLAME,
})

const hoverUser = () => ({
    type : HEADER.MSE_HOVER_USER,
})

//HOME
//    DASHBOARD
const changeSection = (selectedSection) => ({
    type : HOME.DSHB_CHANGE_SECTION,
    payload : {selectedSection},
})

const helpButtonClick = (selectedSection) => ({
    type : HOME.DSHB_HELP_BTN_CLK,
    payload : {selectedSection},
})

//    TRAIN READING
const trainBtnClick = () => ({
    type : HOME.READING_TRAIN_BTN_CLK,
})

const expandCatBtnClick = () => ({
    type : HOME.READING_MRE_CAT_BTN_CLK,
})

const categoryIconClick = () => ({
    type : HOME.READING_CAT_ICON_CLK,
})

//EXERCICE PICKER
const conjugaisonClick = (conjugationId) => ({
    type : EXERCICE_PICKER.CONJUG_CLK,
    payload : {conjugationId},
})

const themeClick = (theme) => ({
    type : EXERCICE_PICKER.THEME_CLK,
    payload : {theme},
})

const durationClick = (duration) => ({
    type : EXERCICE_PICKER.DURATION_CLK,
    payload : {duration},
})
//                "previous" / "next"
const pageNumberChange = (type) => ({
    type : EXERCICE_PICKER.PAGE_CHANGE,
    payload : {type},
})