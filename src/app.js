import * as React from "react";
import Layout from './components/Layout';
import ExercicePicker from './components/exercice/exercicePicker/exercicePicker'
import ExercicePage from './components/exercice/exercicePage/exercicePage'
import Home from './components/home/home'

import {g1,g2,g3,g4,g5} from './assets/css/global/index'
import { home_ex } from './assets/img';

import { Routes, Route} from 'react-router-dom';

export default function App(props) {
    return ( 
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route exact path="home" element={<Home />} />
                    <Route path="exercicePicker" element={<ExercicePage />} />
                    <Route path="exercicePage" element={<ExercicePicker />} />
                </Route>
            </Routes>  
        );
}
