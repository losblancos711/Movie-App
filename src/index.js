import React from 'react';
import ReactDOM from 'react-dom';
import Header from './common/header/Header';
import Navigator from '/Users/karthikrao/Desktop/movies-app/src/screens/navigator.js';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
<div>
<Header /> 
<BrowserRouter><Navigator /></BrowserRouter>
</div>, document.getElementById('root'));
