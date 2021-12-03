import * as React from "react";
import reducer from "./reducer";
import Layout from './components/Layout';
import ExercicePicker from './components/exercice/exercicePicker'
import ExercicePage from './components/exercice/exercicePage'
import Home from './components/home/home'
import ToiecPage from './components/exercice/toiecPage/toiecPage'
import LessonPage from './components/lesson/lessonPage'
import PaperPicker from './components/paper/paperPicker'
import LessonPicker from './components/lesson/lessonPicker'
import PaperPage from './components/paper/paperPage'

import "./assets/css/index.css"

import { Routes, Route} from 'react-router-dom';

export default function App(props) {
    
    return (
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route exact path="home" element={<Home />} />
                    <Route path="exercicePicker" element={<ExercicePicker />} />
                    <Route path="exercicePage" element={<ExercicePage state = {props}/>} />
                    <Route path="paperPicker" element={<PaperPicker />} />
                    <Route path="lessonPicker" element={<LessonPicker />} />
                    <Route path="paperPage" element={<PaperPage />} />
                    <Route path="toiecPage" element={<ToiecPage />} />
                </Route>
            </Routes>
        );
}
