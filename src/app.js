import * as React from "react";
import Layout from './components/Layout';
import ExercicePicker from './components/exercice/exercicePicker/exercicePicker'
import ExercicePage from './components/exercice/exercicePage/exercicePage'
import Home from './components/home/home'
import SkillPage from './components/exercice/skillPage/skillPage'
import LessonPage from './components/lesson/lessonPage'

import "./assets/css/index.css"

import { home_ex } from './assets/img';

import { Routes, Route} from 'react-router-dom';

export default function App(props) {
    return ( 
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route exact path="home" element={<Home />} />
                    <Route path="lessonPage" element={<LessonPage />} />
                    <Route path="lessonPage" element={<LessonPage />} />
                </Route>
            </Routes>  
        );
}
