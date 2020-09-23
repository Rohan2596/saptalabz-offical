import React from 'react';
import './App.css';
import Home from './component/home/home';
import AboutUs from './component/about-us/aboutUs';
import Service from './component/service/service';
import ContactUs from './component/contactUs/contactUs';
import MenuIcon from '@material-ui/icons/Menu';
function App() {

  //   constructor(props){
  //     super(props)
  //     this.state={
  //         isToggleOn:false
  //     }
  // }
  // menuclick(){
  //     this.setState(state => ({
  //         isToggleOn:true
  //     }));
  //     console.log("Menu click"+this.state.isToggleOn);
  //     console.log("sdfnsdnfns");


  // }
  return (
    <>
      <div className="navbar">
        <div className="title">
          Saptalabz

                </div>
        <div className="menuIcon" ><MenuIcon onClick={() => this.menuclick()}
          style={{
            alignItems: 'center'
            , display: "flex"
          }} /></div>

        <div className="menulist">
          <a href="#home" className="menuItem">
            Home
                    </a>
          <a href="#about" className="menuItem">
            About Us
                    </a>
          <a href="#service" className="menuItem">
            Our Services
                    </a>
          <a href="#contact" className="menuItem">
            Contact Us
                    </a>
        </div>
      </div>

      <section id="home">
        <Home id="home" />

      </section>
      <section id="about">
        <AboutUs id="about" />

      </section>
      <section id="service">
        <Service />

      </section>
      <section id="contact">
        <ContactUs />

      </section>

    </>
  );
}

export default App;
