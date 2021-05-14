import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="navbar navbar-sticky navbar-expand-lg navbar-dark">
                <div className="container position-relative">
                    <a className="navbar-brand" href="/">
                        <img className="navbar-brand-regular" src={this.props.imageData} alt="brand-logo" />
                        <img className="navbar-brand-sticky" src="/img/logo.png" alt="sticky brand-logo" />
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
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link scroll" href="#features">How To Buy</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link scroll" href="#screenshots">Screenshots</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link scroll" href="#pricing">Roadmap</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link scroll" href="#contact">Whitepaper</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link scroll" href="#contact">FAQS</a>
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