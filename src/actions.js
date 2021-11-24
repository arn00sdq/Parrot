//STARTERS
const exerciceStart = (exerciceId) => ({
    type : actionTypes.EXERCICE_START,
    payload : {exerciceId}
})

const articleStart = (articleId) => ({
    type : actionTypes.ARTICLE_START,
    payload : {articleId},
})

const lessonStart = (lessonId) => ({
    type : actionTypes.LESSON_START,
    payload : {lessonId},
})

//HEADER
const hoverLanguage = () => ({
    type : actionTypes.HEADER.MSE_HOVER_LANG,
})

const changeLanguage = (newLanguage) => ({
    type : actionTypes.HEADER.CHANGE_LANG,
    payload : {newLanguage}
})

const hoverFeather = () => ({
    type : actionTypes.HEADER.MSE_HOVER_FEATHER,
})

const hoverFlame = () => ({
    type : actionTypes.HEADER.MSE_HOVER_FLAME,
})

const hoverUser = () => ({
    type : actionTypes.HEADER.MSE_HOVER_USER,
})

//HOME
//    DASHBOARD
const changeSection = (selectedSection) => ({
    type : actionTypes.HOME.DSHB_CHANGE_SECTION,
    payload : {selectedSection},
})

const helpButtonClick = (selectedSection) => ({
    type : actionTypes.HOME.DSHB_HELP_BTN_CLK,
    payload : {selectedSection},
})

//    TRAIN READING
const trainBtnClick = () => ({
    type : actionTypes.HOME.READING_TRAIN_BTN_CLK,
})

const expandCatBtnClick = () => ({
    type : actionTypes.HOME.READING_MRE_CAT_BTN_CLK,
})

const categoryIconClick = () => ({
    type : actionTypes.HOME.READING_CAT_ICON_CLK,
})

//EXERCICE PICKER
const conjugaisonClick = (conjugaison) => ({
    type : actionTypes.EXERCICE_PICKER.CONJUG_CLK,
    payload : {conjugaison},
})

const themeClick = (theme) => ({
    type : actionTypes.EXERCICE_PICKER.THEME_CLK,
    payload : {theme},
})

const durationClick = (duration) => ({
    type : actionTypes.EXERCICE_PICKER.DURATION_CLK,
    payload : {duration},
})
//                "previous" / "next"
const pageNumberChange = (type) => ({
    type : actionTypes.EXERCICE_PICKER.PAGE_CHANGE,
    payload : {type},
})