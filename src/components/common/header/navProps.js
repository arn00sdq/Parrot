import {
  home_icon,
  lesson_icon,
  paper_icon,
  exercise_icon,
  certificateIcon
} from "../../../database/images";

export const navProps = {
  home: {
    icon: home_icon,
    route: "home",
    text: "ACCEUIL",
  },
  exercices: {
    icon: exercise_icon,
    route: "exercicePicker",
    text: "EXERCICES",
  },
  lesson: {
    icon: exercise_icon,
    route: "lessonPicker",
    text: "OUTILS",
  },
  paper: {
    icon: paper_icon,
    route: "paperPicker",
    text: "LIRE",
  },
  toeic: {
    icon: certificateIcon,
    route: "toiecPage",
    text: "TOIEC TEST",
  },
};
