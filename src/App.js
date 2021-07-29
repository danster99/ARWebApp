import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import MenuSection from './components/pages/MenuPage/MenuSection';
import Scanner from './components/pages/Scanner/Scanner';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/home'>
          <Navbar/>
          <Home/>
          <Footer/>
        </Route>
        <Route exact path='/' >
          <Navbar/>
          <Home/>
          <Footer/>
        </Route>
        <Route exact path="/demo-client">
          <MenuSection/>
        </Route>
      <Route path="/scanner">
          <Scanner/>
        </Route>
      </Switch>
    </Router>
  );
}

// render={() => {window.location.href="/scanner.html?item=ciuperci"}}
export default App;
