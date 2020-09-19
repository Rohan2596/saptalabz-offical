import React from 'react';
import './App.css';
import Navbar from './component/navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
