import React, { Component } from 'react';

const initData = {
    heading: "sApp",
    headingTwo: "Save Dogs In Need",
    content: "There are more than 670,000 dogs per year euthanized in the USA alone. That's why, with Save Mutts, we're here to make a change. Each month, these poor doggos can look forward to our donations, which will not only save them from being killed, but also greatly improve their quality of life.",
    headingSlug: "",
    playImg: "/img/google-play.png",
    appleImg: "/img/app-store.png",
    heroThumb: "/img/welcome_mockup_2.png"
}

class HeroSection extends Component {
    state = {
        data: {}
    }
    componentDidMount(){
        this.setState({
            data: initData
        })
    }
    render() {
        return (
            <section id="home" className="section welcome-area bg-overlay overflow-hidden d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-12 col-md-6 order-2 order-md-1">
                        {/* Welcome Thumb */}
                        <div className="welcome-thumb mx-auto">
                        <img src={this.state.data.heroThumb} alt="" />
                        </div>
                    </div>
                    {/* Welcome Intro Start */}
                    <div className="col-12 col-md-6 order-1 order-md-2">
                        <div className="welcome-intro px-0 px-lg-4">
                        <h1 className="text-white font-italic mb-2 mb-md-3">{this.state.data.heading}</h1>
                        <h3 className="text-white text-capitalize">{this.state.data.headingTwo}</h3>
                        <p className="text-white mt-3 mb-4">{this.state.data.content}</p>
                        {/* Store Buttons */}
                        <div className="button-group store-buttons d-flex">
                            <a href="/#" className='btn btn-primary btn-lg'>
                                Join the community
                            </a>
                            <a href="/#" className='btn btn-primary btn-lg'>
                                Buy now
                            </a>
                        </div>
                        <span className="d-inline-block text-white fw-3 font-italic mt-3">{this.state.data.headingSlug}</span>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HeroSection;