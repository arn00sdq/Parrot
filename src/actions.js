const types = require('./actiontypes');
//STARTERS
const exerciceStart = (exerciceId) => ({
    type : types.EXERCICE_START,
    payload : {exerciceId}
})

const articleStart = (articleId) => ({
    type : types.ARTICLE_START,
    payload : {articleId},
})

const lessonStart = (lessonId) => ({
    type : types.LESSON_START,
    payload : {lessonId},
})

//HEADER
const hoverLanguage = () => ({
    type : types.HEADER.MSE_HOVER_LANG,
})

const changeLanguage = (newLanguage) => ({
    type : types.HEADER.CHANGE_LANG,
    payload : {newLanguage}
})

const hoverFeather = () => ({
    type : types.HEADER.MSE_HOVER_FEATHER,
})

const hoverFlame = () => ({
    type : types.HEADER.MSE_HOVER_FLAME,
})

const hoverUser = () => ({
    type : types.HEADER.MSE_HOVER_USER,
})

//HOME
//    DASHBOARD
const changeSection = (selectedSection) => ({
    type : types.HOME.DSHB_CHANGE_SECTION,
    payload : {selectedSection},
})

const helpButtonClick = (selectedSection) => ({
    type : types.HOME.DSHB_HELP_BTN_CLK,
    payload : {selectedSection},
})

//    TRAIN READING
const trainBtnClick = () => ({
    type : types.HOME.READING_TRAIN_BTN_CLK,
})

const expandCatBtnClick = () => ({
    type : types.HOME.READING_MRE_CAT_BTN_CLK,
})

const categoryIconClick = () => ({
    type : types.HOME.READING_CAT_ICON_CLK,
})

//EXERCICE PICKER
const conjugaisonClick = (conjugationId) => ({
    type : types.EXERCICE_PICKER.CONJUG_CLK,
    payload : {conjugationId},
})

const themeClick = (theme) => ({
    type : types.EXERCICE_PICKER.THEME_CLK,
    payload : {theme},
})

const durationClick = (duration) => ({
    type : types.EXERCICE_PICKER.DURATION_CLK,
    payload : {duration},
})
//                "previous" / "next"
const pageNumberChange = (type) => ({
    type : types.EXERCICE_PICKER.PAGE_CHANGE,
    payload : {type},
})