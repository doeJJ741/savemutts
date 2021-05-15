import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/sapp/themeOneServiceSection";

class ServiceSection extends Component {
    state = {
        data: {},
        serviceData: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: {
                        "headingFive":'Charity', 
                        "buttonText": "Learn More",
                        "thumbOne": "/img/features_thumb.png",
                        "thumbTwo": "/img/service_thumb_2.png",
                        "thumbThree": "/img/welcome_mockup_2.png",
                        "thumbFour": "/img/discover_thumb.png",
                        "thumbFive": "/img/service_thumb_1.png",
                        "thumbSix": "/img/discover_thumb_2.png",
                    },
                    serviceData: [
                        {
                            "id": 1,
                            "iconClass": "fab fa-buffer",
                            "text": "test text"
                        },
                        {
                            "id": 1,
                            "iconClass": "fab fa-buffer",
                            "text": "test text"
                        },
                        {
                            "id": 1,
                            "iconClass": "fab fa-buffer",
                            "text": "test text"
                        },
                        {
                            "id": 1,
                            "iconClass": "fab fa-buffer",
                            "text": "test text"
                        },
                    ]
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <section id='charity' className="section service-area overflow-hidden ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12 col-lg-6 order-2 order-lg-1">
                        {/* Service Text */}
                        <div className="service-text pt-5 pt-lg-0 px-0 px-lg-4">
                        <h2 className="text-capitalize mb-4">{this.state.data.headingFive}</h2>
                        {/* Service List */}
                        <ul className="service-list style-two">
                            {/* Single Service */}
                            {this.state.serviceData.map((item, idx) => {
                                return(
                                    <li key={`sf_${idx}`} className="single-service py-2">
                                        <div className="service-text">
                                            <p>{item.text}</p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                        <a href="/contact-page" className="btn sApp-btn mt-4">{this.state.data.buttonText}</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-6 order-1 order-lg-2">
                        {/* Service Thumb */}
                        <div className="service-thumb mx-auto">
                        <img src={this.state.data.thumbFive} alt="" style={{borderRadius:'6px'}} />
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceSection;