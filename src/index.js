import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import model from './model'

console.log(Object.keys(model));
ReactDOM.render(
    <App configs = {model}/>,
    document.getElementById('root')
);