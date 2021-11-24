const types = require('./actiontypes')
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
        }
    default:
      return state;
  }
};
