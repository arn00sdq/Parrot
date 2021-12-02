import {actionTypes as types} from './database/actiontypes'

const reducer = (state, { type, payload }) => {
  switch (type) {
    case types.HEADER.CHANGE_LANG:
      return { 
            ...state,
            home : {
                ...state.home,
                header : {
                    ...state.home.header,
                    selectedLanguage : payload.newLanguage,
                }
            }
        };
    case types.HOME.DSHB_CHANGE_SECTION:
        return { 
            ...state,
            home : {
                ...state.home,
                dashboard : {
                    ...state.home.dashboard,
                    section : payload.selectedSection,
                }
            }
        };
    case types.EXERCISE_PICKER.CONJUG_CLK:
    var conjugationsIndex = state.exercisePicker.conjugations.findIndex(
        (c) => {
            return c.id === payload.conjugationId
        }
    )
        return {
            ...state,
            exercisePicker : {
                ...state.exercisePicker,
                conjugations : {
                    ...state.exercisePicker.conjugations,
                    [conjugationsIndex] : {
                        ...state.exercisePicker.conjugations[conjugationsIndex],
                        checked : state.exercisePicker.conjugations[conjugationsIndex].checked ? false : true,
                    },
                }
            
            }
        }
    default:
      return state;
  }
};
