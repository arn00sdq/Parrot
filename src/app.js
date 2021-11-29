import * as React from "react";
import Layout from './components/Layout';
import ExercicePicker from './components/exercice/exercicePicker'
import ExercicePage from './components/exercice/exercicePage'
import Home from './components/home/home'
import SkillPage from './components/exercice/skillPage/skillPage'
import LessonPage from './components/lesson/lessonPage'
import PaperPicker from './components/paper/paperPicker'
import LessonPicker from './components/lesson/lessonPicker'

import "./assets/css/index.css"

import { Routes, Route} from 'react-router-dom';

export default function App(props) {
    return (
            /* 
            -- Note -- 
            comme les routes ne sont pas encore en dynamique
            changez la variable route dans layout pour que le chemin se fasse
            */ 
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route exact path="home" element={<Home />} />
                    <Route path="exercicePicker" element={<ExercicePicker />} />
                    <Route path="paperPicker" element={<PaperPicker />} />
                    <Route path="lessonPicker" element={<LessonPicker />} />
                    <Route path="skillPage" element={<SkillPage />} />
                </Route>
            </Routes>  
        );
}
