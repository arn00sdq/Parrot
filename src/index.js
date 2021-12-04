import React from 'react';
import { render } from "react-dom";

import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';

import Controller from "./controller";

import model from './model'


ReactDOM.render(
  
    <BrowserRouter>
      <Controller />
    </BrowserRouter>,
    document.getElementById('root')
    );
