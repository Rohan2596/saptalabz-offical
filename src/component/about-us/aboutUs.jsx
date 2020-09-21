import React, { Component } from "react";
import './aboutUs.css';
class AboutUs extends Component {
    render() {
        return (
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
                <div className="team">
                    <span className="our_team">Our Team</span>
                    <div className="team_members">
                        <img src={require('../../assets/gif/marlon.png')} alt="" className="team_avatar" />
                        <span className="team_info" style={{fontWeight:"bold"}}>@CEO & @Founder</span>
                        <span className="team_info">Rohan Ravindra Kadam</span>
                        <span className="team_info">Full Stack Developer</span>
                    </div>

                </div>
            </>
        )
    }
}
export default AboutUs