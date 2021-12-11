import { _uniqueId } from "lodash/uniqueId";

const actionTypes = Object.freeze ({
    EXERCISE_START : 'EXERCICE_START',
    ARTICLE_START : 'ARTICLE_START',
    LESSON_START : 'LESSON_START',
    FILTER: {
        THEME_CLK : 'THEME_CLK',
        LEVEL_CLK : 'LEVEL_CLK',
        TENSE_CLK : 'TENSE_CLK',        
    },
    HEADER : {
        MSE_HOVER_LANG : 'MSE_HOVER_LANG',
        CHANGE_LANG : 'CHANGE_LANG',
        MSE_HOVER_FEATHER : 'MSE_HOVER_FEATHER',
        MSE_HOVER_FLAME : 'MSE_HOVER_FLAME',
        MSE_HOVER_USER : 'MSE_HOVER_USER',
    },
    HOME : {
        DSHB_CHANGE_SECTION : 'DSHB_CHANGE_SECTION',
        DSHB_HELP_BTN_CLK : 'DSHB_HELP_BTN_CLK',
        READING_TRAIN_BTN_CLK : 'READING_TRAIN_BTN_CLK',
        READING_MRE_CAT_BTN_CLK : 'READING_MRE_CAT_BTN_CLK',
        READING_CAT_ICON_CLK : 'READING_CAT_ICON_CLK',
    },
    SKILLPAGE : {
    },
    EXERCISE_PAGE : {
        NEXT_STEP : 'NEXT_STEP',
        ADD_POINT : 'ADD_POINT',
        SUBS_LIFE : "SUBS_LIFE",
        //A SPECIFIER ULTERIEUREMENT
    },
    EXERCISE_PICKER : {
        CONJUG_CLK : 'CONJUG_CLK',
        DURATION_CLK : 'DURATION_CLK',
        PAGE_CHANGE : 'PAGE_CHANGE',
    },
})

export {actionTypes}