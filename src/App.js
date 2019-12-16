import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Route} from 'react-router-dom';
import {Home, About, Navigation} from './components';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
  </div>
);

export default App;
