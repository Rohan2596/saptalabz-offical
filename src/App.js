import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import { BrowserRouter, Switch, Router, Route } from 'react-router-dom';
import Home from './component/home/home';

function App() {
  return (
    <BrowserRouter>
     <Navbar  />
     <Home/>
     <Switch>
       <Route  path='/' />
     </Switch>
    </BrowserRouter>
  );
}

export default App;
