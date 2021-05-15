import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="navbar navbar-sticky navbar-expand-lg navbar-dark">
                <div className="container position-relative">
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <img className="navbar-brand-regular mr-3" src={this.props.imageData} alt="brand-logo" />
                        <img className="navbar-brand-sticky mr-3" src="/img/logo.png" alt="sticky brand-logo" />
                        <h3 className='navbar-brand-regular' style={{fontSize:'24px', color:'white'}}>Smutt</h3>
                        <h3 className='navbar-brand-sticky' style={{fontSize:'24px'}}>Smutt</h3>
                    </a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="navbar-inner">
                        {/*  Mobile Menu Toggler */}
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <nav>
                            <ul className="navbar-nav" id="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link scroll" href="#charity">Charity</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link scroll" href="#tokenomics">Tokenomics</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link scroll" href="#roadmap">Roadmap</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link scroll" href="#contact">Litepaper</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link scroll" href="#faqs">FAQS</a>
                                </li>
                                <li className="nav-item align-items-center d-flex">
                                    <a className="btn btn-light cursor-pointer navbar-brand-regular" style={{cursor:'pointer'}}>BUY NOW</a>
                                    <a className="btn btn-primary styled text-light cursor-pointer navbar-brand-sticky" style={{cursor:'pointer'}}>BUY NOW</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
        </header>
        );
    }
}

export default Header;