import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomizedAccordions from './components/pages/MenuPage/MenuSection';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/obj' render={() => {window.location.href="/scanner-obj.html"}}>        
        </Route>
        <Route exact path='/fbx' render={() => {window.location.href="/scanner-fbx.html"}}>        
        </Route>
        <Route exact path='/' render={() => {window.location.href="/scanner-obj.html"}}>
        </Route>
      </Switch>
    </Router>
  );
}

// render={() => {window.location.href="/scanner.html?item=ciuperci"}}
export default App;
