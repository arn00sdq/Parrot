import * as React from "react";
import reducer from "./reducer";
import Layout from "./components/Layout";
import ExercicePicker from "./components/exercice/exercicePicker";
import ExercisePage from "./components/exercice/exercicePage";
import Home from "./components/home/home";
import ToiecPage from "./components/toiecPage/toiecPage";
import LessonPage from "./components/lesson/lessonPage";
import PaperPicker from "./components/paper/paperPicker";
import LessonPicker from "./components/lesson/lessonPicker";
import PaperPage from "./components/paper/paperPage";
import ProfilPage from "./components/profil/profilPage";
import Parrot from "./components/parrot/Parrot"

import "./assets/css/index.css";

import { Routes, Route } from 'react-router-dom';

export default function App({ state, handles }) {
  console.log("App state : " + state)
  console.log('CourseManagerDashboard', ExercisePage);
  return (
    <Routes>
      <Route exact path="/parrot" element={<Parrot />} />
      <Route path="/" element={<Layout state={state} handles={handles} />}>
        
        <Route path="home" element={<Home state={state} handles={handles} />} />
        <Route path="exercicePicker" element={<ExercicePicker state={state} handles={handles} />} />
        <Route path="LessonPicker" element={<LessonPicker state={state} handles={handles} />} />
        <Route path="paperPicker" element={<PaperPicker state={state} handles={handles} />} />
        <Route path="exercisePage" element={<ExercisePage state={state} handles={handles} />} />
        <Route path="lessonPage" element={<LessonPage state={state} handles={handles} />} />
        <Route path="paperPage" element={<PaperPage state={state} handles={handles} />} />
        <Route path="toiecPage" element={<ToiecPage state={state} handles={handles} />} />
        <Route path="profilPage" element={<ProfilPage/>} />
      </Route>
    </Routes>
  );
}
