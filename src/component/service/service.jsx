import React,{ Component } from "react";
import './service.css'


class Service extends Component{

    render(){
        return(
            <>
            <div className="services_section">
                <span className="our_services">Our Services</span>
                <div className="services_list">
                    <div className="service_info">
                        <span className="service_info_title">Web Development</span>
                        <span className="service_info_description" > We have experience in building the first brand website development to building a full-fledged web application from scratch or using APIs.</span>
                    </div>
                    <div className="service_info">
                        <span className="service_info_title">Mobile Applications</span>
                        <span className="service_info_description">We have experience in building the first mobile applications development to building a full-fledged mobiles application from scratch or using APIs.</span>
                    </div>
                    

                </div>

            </div>
            </>
        )
    }

}
export default Service;