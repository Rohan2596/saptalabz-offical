import  React,{Component } from "react";
import './aboutUs.css';
import { requirePropFactory } from "@material-ui/core";
class AboutUs extends Component{
    render(){
        return(
            <>
            <div className="aboutUs">
                <div className="aboutUs-left">
                    <span className="aboutUs_title">We are Saptalabzianz</span>
                     <span className="aboutUs-description">
                     We build scalable and intelligent web and mobile applications to make the life of people easier.
                     Our team of professional help to achieve it. 
                     </span>
                </div>
                <div className="aboutUs-right">
                    <img src={require('../../assets/gif/team.png')} alt="" className="aboutus-image" />

                </div>

            </div>
            
            </>
        )
    }
}
export default AboutUs