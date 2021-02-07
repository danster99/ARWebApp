import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import MenuSection from './components/pages/MenuPage/MenuSection';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route exact path="/menu" exact component={MenuSection} />
      </Switch>
      <Footer/>
    </Router>
  );
}

// render={() => {window.location.href="/scanner.html?item=ciuperci"}}
export default App;
