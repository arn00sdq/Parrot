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
    text: "DASHBOARD",
  },
  exercices: {
    icon: exercise_icon,
    route: "exercicePicker",
    text: "EXERCISES",
  },
  lesson: {
    icon: lesson_icon,
    route: "lessonPicker",
    text: "LESSONS",
  },
  paper: {
    icon: paper_icon,
    route: "paperPicker",
    text: "READING",
  },
  toeic: {
    icon: certificateIcon,
    route: "toiecPage",
    text: "TOIEC TEST",
  },
};
