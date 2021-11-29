import { _uniqueId } from "lodash/uniqueId";

const actionTypes = Object.freeze ({
    EXERCISE_START,
    ARTICLE_START,
    LESSON_START,
    HEADER = {
        MSE_HOVER_LANG,
        CHANGE_LANG,
        MSE_HOVER_FEATHER,
        MSE_HOVER_FLAME,
        MSE_HOVER_USER,
    },
    HOME = {
        DSHB_CHANGE_SECTION,
        DSHB_HELP_BTN_CLK,
        READING_TRAIN_BTN_CLK,
        READING_MRE_CAT_BTN_CLK,
        READING_CAT_ICON_CLK,
    },
    SKILLPAGE = {
    },
    EXERCISE_PAGE = {
        //A SPECIFIER ULTERIEUREMENT
    },
    EXERCISE_PICKER = {
        CONJUG_CLK,
        THEME_CLK,
        DURATION_CLK,
        PAGE_CHANGE,
    }
})

const iterate = (obj) => {
    Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object') {
            iterate(obj[key])
        } else obj[key] = _uniqueId();
    })
}
iterate(actionTypes)
module.exports = actionTypes