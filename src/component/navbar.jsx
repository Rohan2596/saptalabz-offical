import React, { Component } from "react";
import './navbar.css'
import MenuIcon from '@material-ui/icons/Menu';
import Home from '../component/home/home';
import AboutUs from '../component/about-us/aboutUs';
import Service from '../component/service/service';
import ContactUs from '../component/contactUs/contactUs';
import Portfolio from '../component/portfolio/portfolio'
class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isToggleOn: false
        }
    }
    menuclick() {
        this.setState(state => ({
            isToggleOn: true
        }));
        console.log("Menu click" + this.state.isToggleOn);
        console.log("sdfnsdnfns");


    }
    componentDidMount(){
        document.title = "Saptalabz Solutions|Rohan Kadam"
        var x = document.createElement("META");
         x.innerText="We help businesses owner's to build App and website. Our team of unique specialist can help your business to achieve your goals.";
      
    }
    

    render() {
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
                        <a  href="#contact" className="menuItem">
                            Contact Us
                    </a>
                    </div>
                </div>
                <section id="home">
                    <Home />

                </section>
                <section id="about">
                    <AboutUs />

                </section>
                <section id="service">
                    <Service />

                </section>
                <section>
                    <Portfolio/>
                </section>
                <section id="contact">
                    <ContactUs />

                </section>
                
            </>
        )
    }
}
export default Navbar