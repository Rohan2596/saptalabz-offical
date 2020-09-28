import React, { Component } from "react";
import './portfolio.css';

class Portfolio extends Component {
    numbers = [];

    constructor(props) {
        super(props);
        this.state = {
            numbers: [{
                "image": "news",
                "title": "7 news",
                "description": "Android News Applications."
            }, {
                "image": "waller",
                "title": "Waller",
                "description": "Waller News Application"
            }, {
                "image": "angular",
                "title": "Portfolio",
                "description": "BootStrap website Application"
            }]
        }
    }

    render() {
        return (
            <>
                <div className="portfolio_section">
                    <span className="portfolio_section_title">Work Samples</span>
                    <div className="work_samples">

                        {
                            this.state.numbers.map((item, index) => (
                                <div className="work_card" key={index}>

                                    <img key={item.image} src={require(`../../assets/gif/${item.image}.jpg`)} alt="" className="work_card_image" />

                                    <div className="work_card_title">{item.title}</div>
                                    <div className="work_card_description">{item.description}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>


            </>
        )
    }
}
export default Portfolio