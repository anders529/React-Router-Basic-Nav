import React from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router-dom';
import {Home, About, Contact, Navigation } from './components';
import './App.css';

const App = () => (
  <div>

    <Navigation />

    <Route exact path="/">
        <Home/>
    </Route>

    <Route exact path="/about">
        <About/>
    </Route>

    <Route exact path="/contact">
        <Contact/>
    </Route>

  </div>
);

export default App;
