import { actionTypes as types } from "./database/actiontypes";

const reducer = (state, action) => {
  const { type, payload } = action;
  if (Object.hasOwnProperty.call(action, 'filterName')) {
    var { filterName, from } = payload;
  }
  let existsIndex, newLevels, newThemes, newTenses;
  switch (type) {
    case types.FILTER.THEME_CLK:
      switch (from) {
        case "exercisePicker":
          newThemes = state.exercisePicker.selectedThemes;
          existsIndex = newThemes.findIndex((theme) => {
            return theme.name === filterName;
          });
          existsIndex == -1
            ? newThemes.push({ name: filterName })
            : newThemes.splice(existsIndex, 1);
          return {
            ...state,
            exercisePicker: {
              ...state.exercisePicker,
              selectedThemes: newThemes,
            },
          };
        case "paperPicker":
          newThemes = state.paperPicker.selectedThemes;
          existsIndex = newThemes.findIndex((theme) => {
            return theme.name === filterName;
          });
          existsIndex == -1
            ? newThemes.push({ name: filterName })
            : newThemes.splice(existsIndex, 1);
          return {
            ...state,
            paperPicker: {
              ...state.paperPicker,
              selectedThemes: newThemes,
            },
          };
        default:
          break;
      }
    case types.FILTER.TENSE_CLK:
      switch (from) {
        case "lessonPicker":
          newTenses = state.lessonPicker.selectedTenses;
          existsIndex = newTenses.findIndex((lesson) => {
            return lesson.name === filterName;
          });
          existsIndex == -1
            ? newTenses.push({ name: filterName })
            : newTenses.splice(existsIndex, 1);
          return {
            ...state,
            lessonPicker: {
              ...state.lessonPicker,
              selectedTenses: newTenses,
            },
          };
        default:
          break;
      }
    case types.FILTER.LEVEL_CLK:
      switch (from) {
        case "exercisePicker":
          newLevels = state.exercisePicker.selectedLevels;
          existsIndex = newLevels.findIndex((level) => {
            return level.name === filterName;
          });
          existsIndex == -1
            ? newLevels.push({ name: filterName })
            : newLevels.splice(existsIndex, 1);
          return {
            ...state,
            exercisePicker: {
              ...state.exercisePicker,
              selectedLevels: newLevels,
            },
          };
        case "lessonPicker":
          newLevels = state.lessonPicker.selectedLevels;
          existsIndex = newLevels.findIndex((lesson) => {
            return lesson.name === filterName;
          });
          existsIndex == -1
            ? newLevels.push({ name: filterName })
            : newLevels.splice(existsIndex, 1);
          return {
            ...state,
            lessonPicker: {
              ...state.lessonPicker,
              selectedLevels: newLevels,
            },
          };
        case "paperPicker":
          newLevels = state.paperPicker.selectedLevels;
          existsIndex = newLevels.findIndex((paper) => {
            return paper.name === filterName;
          });
          existsIndex == -1
            ? newLevels.push({ name: filterName })
            : newLevels.splice(existsIndex, 1);
          return {
            ...state,
            paperPicker: {
              ...state.paperPicker,
              selectedPapers: newLevels,
            },
          };
        default:
          break;
      }
    case types.NEXT_STEP:
      switch (payload.from) {
        case "exercicePage":
          return {
            ...state,
            exercisePage: {
              ...state.exercisePage,

              step: parseInt(state.exercisePage.step + 1),
            },
          };
        case "lessonPage":
          return {
            ...state,
            lessonPage: {
              ...state.lessonPage,
              step: parseInt(state.lessonPage.step + 1)
            }
          };
        case "paperPage":
          return {
            ...state,
            paperPage: {
              ...state.paperPage,
              step: parseInt(state.paperPage.step + 1)
            }
          };
      }
    case types.PREVIOUS_STEP:
      switch (payload.from) {
        case "lessonPage":
          return {
            ...state,
            lessonPage: {
              ...state.lessonPage,
              step: parseInt(state.lessonPage.step - 1)
            }
          };
        case "paperPage":
          return {
            ...state,
            paperPage: {
              ...state.paperPage,
              step: parseInt(state.paperPage.step - 1)
            }
          };
      }
    case types.EXERCISE_START:
      return {
        ...state,
        path: {
          ...state.path,
          currentPath: "exercisePage",
        },
        exercisePage: {
          ...state.exercisePage,
          exerciseId: payload,
          step: parseInt(0),
        },
      };
    case types.LESSON_START:
      console.log(payload.paperId)
      return {
        ...state,
        path: {
          ...state.path,
          currentPath: "lessonPage",
        },
        lessonPage: {
          ...state.lessonPage,
          lessonId: payload.lessonId,
          step: parseInt(0),
        },
      };
      case types.ARTICLE_START:
        console.log(payload.articleId)
        return {
          ...state,
          path: {
            ...state.path,
            currentPath: "paperPage",
          },
          paperPage: {
            ...state.paperPage,
            paperId: payload.articleId,
            step: parseInt(0),
          },
        };
    /**/
    case types.ACTIVTY_END:
      console.log(payload.isFinished)
      switch (payload.from) {
        case "exercisePage":
          return {
            ...state,
            exercisePage: {
              ...state.exercisePage,
            /*  exerciseId : payload.id,*/
              end : payload.isFinished
            },
          };
        case "lessonPage":
          return {
            ...state,
            lessonPage: {
              ...state.lessonPage,
              /*lessonId : payload.id,*/
              end : payload.isFinished
            }
          };
        case "paperPage":
          return {
            ...state,
            paperPage: {
              ...state.paperPage,
             /* paperId : payload.id,*/
              end : payload.isFinished
            }
          };
      }
    /**/  
    case types.HEADER.MSE_HOVER_LANG:
      return {
        ...state,
        user: {
          ...state.user,
          changeLanguageBtnToggle: !state.user.changeLanguageBtnToggle,
        },
      };
    case types.EXERCISE_PAGE.ADD_POINT:
      return {
        ...state,
        exercisePage: {
          ...state.exercisePage,
          wordDrift: {
            ...state.exercisePage.wordDrift,
            points: state.exercisePage.wordDrift.points + 1,
          }

        },
      };
    case types.HEADER.CHANGE_LANG:
      return {
        ...state,
        home: {
          ...state.home,
          user: {
            ...state.home.user,
            selectedLanguage: payload.newLanguage,
          },
        },
      };
    case types.HOME.DSHB_CHANGE_SECTION:
      return {
        ...state,
        home: {
          ...state.home,
          dashboard: {
            ...state.home.dashboard,
            section: payload.selectedSection,
          },
        },
      };
    case types.EXERCISE_PICKER.PAGE_CHANGE:
      return {
        ...state,
        exercisePage: {
          ...state.exercisePage,
          exerciseId: payload.exerciseId,
        },
      };
    case types.EXERCISE_PICKER.CONJUG_CLK:
      var conjugationsIndex = state.exercisePicker.conjugations.findIndex(
        (c) => {
          return c.id === payload.conjugationId;
        }
      );
      return {
        ...state,
        exercisePicker: {
          ...state.exercisePicker,
          conjugations: {
            ...state.exercisePicker.conjugations,
            [conjugationsIndex]: {
              ...state.exercisePicker.conjugations[conjugationsIndex],
              checked: state.exercisePicker.conjugations[conjugationsIndex]
                .checked
                ? false
                : true,
            },
          },
        },
      };
    default:
      return state;
  }
};

export { reducer };
