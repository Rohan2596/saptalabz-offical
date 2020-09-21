import React from 'react';
import './App.css';
import Navbar from './component/navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './component/home/home';
import AboutUs from './component/about-us/aboutUs';
import Service from './component/service/service';
import ContactUs from './component/contactUs/contactUs';

function App() {
  return (
    <BrowserRouter>
     <Navbar  />
     <Home/>
     <AboutUs/>
     <Service/>
     <ContactUs/>
     <Switch>
       <Route  path='/' />
     </Switch>
    </BrowserRouter>
  );
}

export default App;
