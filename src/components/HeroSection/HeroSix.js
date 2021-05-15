import React, { Component } from 'react';

const initData = {
    heading: "Save Mutts",
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
            <section id="home" className="section welcome-area bg-overlay overflow-hidden d-flex align-items-center" style={{position:'relative', minHeight: 'calc(100vh - 150px)'}}>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                    {/* Welcome Intro Start */}
                    <div className="col-12 col-md-7 col-lg-8">
                        <div className="welcome-intro text-center">
                        <h1 className="text-white">{this.state.data.heading}</h1>
                        <p className="text-white my-4">{this.state.data.content}</p>
                        <div className="welcome-bottom">
                            {/* Store Buttons */}
                            <div className="button-group store-buttons d-flex justify-content-center">
                            <a href="/#" className='btn btn-secondary btn-lg'>
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
                </div>
                {/* Shape Bottom */}
                <div style={{position:'absolute', bottom:0}}>
                            <img src={'/img/blog-7.png'}></img>
                        </div>
            </section>
        );
    }
}

export default HeroSection;