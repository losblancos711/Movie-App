import React from 'react';
import Home from '/Users/karthikrao/Desktop/movies-app/src/screens/home/home.js';
import Detail from '/Users/karthikrao/Desktop/movies-app/src/screens/inner-pages/details/details.js';
import {
    Switch,
    Route,
  } from "react-router-dom";

export default function Navigator() {
    return (
        <div>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/detail" component={Detail}></Route>
        </Switch>
        </div>
    );
};