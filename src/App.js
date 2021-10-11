import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomizedAccordions from './components/pages/MenuPage/MenuSection';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/home'>
          <CustomizedAccordions/>
        </Route>
        <Route exact path='/' >
          <CustomizedAccordions/>
        </Route>
      </Switch>
    </Router>
  );
}

// render={() => {window.location.href="/scanner.html?item=ciuperci"}}
export default App;
