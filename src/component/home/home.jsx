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
                <div className="home">
                    <div className="home_left">
                   <img src={require('../../assets/gif/user_flow.gif')} className="home_image" />
                    </div>
                    <div className="home_right">
                      <h1>
                          Saptalabz
                      </h1>
                    </div>
                </div>

            </>
        )
    }
}
export default Home