import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import { BrowserRouter, Switch, Router, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
     <Switch>
       <Route  path='/' />
     </Switch>
    </BrowserRouter>
  );
}

export default App;
