import React,{ Component } from "react";
import './contactUS.css'

class ContactUs extends Component{
render(){
    return(
        <>
        <span className="cotactUs">Contact Us</span>
        <div className="contact-section">
        

            <div className="contact-left">
            <img src={require('../../assets/gif/Mention.gif')} alt="" className="contactUs-image" />

            </div>
            <div className="contact-right">
                <span className="contact-right-title">Let's do something amazing.</span>
                <span className="contact-right-info" style={{color:"#5cc5d5"}}>Location :-</span>
                <span className="contact-right-info"> Mumbai,India</span>
                <span className="contact-right-info" style={{color:"#5cc5d5"}}>Work Email :-</span>
                <span className="contact-right-info">saptalabz07@gmail.com</span>
                <div className="social-section">
                    <img src={require('../../assets/icons/instagram.svg')} alt="" className="social-icons"/>
                    <img src={require('../../assets/icons/twitter.svg')} alt="" className="social-icons"/>

                    <img src={require('../../assets/icons/youtube.svg')} alt="" className="social-icons"/>

                </div>
                
            </div>

        </div>
        </>
    )
}
}
export default ContactUs