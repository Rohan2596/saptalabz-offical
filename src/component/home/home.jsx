import React, { Component } from "react";
import "./home.css";
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isToggleOn: false
        }
    }

    render() {
        return (
            <>
                <div  id="home" className="home">
                    <div className="home_left">
                   <img src={require('../../assets/gif/user_flow.gif')}  alt="home_image" className="home_image" />
                    </div>
                    <div className="home_right">
                     
                         <span className="tag">Application Development</span>
                         <span className="tagline" >Let's build your App together </span>
                         <span className="description">We help businesses owner's to build App and website. Our team of unique specialist can help your business to achieve your goals.</span>             
                                        
                  </div>
                </div>

            </>
        )
    }
}
export default Home