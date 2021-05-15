import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/json-server/themeOneFaqSection";

class FaqSection extends Component {
    state = {
        data: {},
        faqData: [],
        faqDataTwo: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    faqData: res.data.faqData,
                    faqDataTwo: res.data.faqDataTwo
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <section id='faqs' className="section faq-area style-two ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-7">
                        {/* Section Heading */}
                        <div className="section-heading text-center">
                            <h2 className="text-capitalize">{this.state.data.heading}</h2>
                            
                        </div>
                    </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12">
                            {/* FAQ Content */}
                            <div className="faq-content">
                                {/* sApp Accordion */}
                                <div className="accordion" id="sApp-accordion">
                                    <div style={{fontSize:'16px'}} className="row justify-content-center">
                                        <div className="col-12 col-md-6">
                                        {/* Single Card */}
                                            <div className="card border-0">
                                                    {/* Card Header */}
                                                <div className="card-header bg-inherit border-0 p-0">
                                                <h2 className="mb-0">
                                                    <button style={{fontSize:'24px'}} className="btn px-0 py-2" type="button">
                                                        How do I buy?
                                                    </button>
                                                </h2>
                                                </div>
                                                {/* Card Body */}
                                                <div className="card-body px-0 py-3">
                                                    Check out our guide on how to buy here: <a href="#howtobuy">How to buy</a>
                                                </div>
                                            </div>
                                            <div className="card border-0">
                                                    {/* Card Header */}
                                                <div className="card-header bg-inherit border-0 p-0">
                                                <h2 style={{fontSize:'16px'}} className="mb-0">
                                                    <button  style={{fontSize:'24px'}} className="btn px-0 py-2" type="button">
                                                        What is SaveMutts Token About?
                                                    </button>
                                                </h2>
                                                </div>
                                                {/* Card Body */}
                                                <div className="card-body px-0 py-3">
                                                    SaveMutts is a new charity token that is working to tackle the issue of
                                                    euthanization of dogs in shelters. There are more than 670,000 dogs per year 
                                                    euthanized in the USA alone. We're here to help reduce that number to 0.
                                                </div>
                                            </div>
                                            <div className="card border-0">
                                                    {/* Card Header */}
                                                <div className="card-header bg-inherit border-0 p-0">
                                                <h2 className="mb-0">
                                                    <button style={{fontSize:'24px'}} className="btn px-0 py-2" type="button">
                                                        How is this rug-proof?
                                                    </button>
                                                </h2>
                                                </div>
                                                {/* Card Body */}
                                                <div className="card-body px-0 py-3">
                                                    After the token was created, we renounced the ownership of the contract. That means
                                                    that we can no longer modify the source code that's powering the token.
                                                </div>
                                            </div>
                                            <div className="card border-0">
                                                    {/* Card Header */}
                                                <div className="card-header bg-inherit border-0 p-0">
                                                <h2 className="mb-0">
                                                    <button style={{fontSize:'24px'}} className="btn px-0 py-2" type="button">
                                                        Proof of Renounced Ownership and Why?
                                                    </button>
                                                </h2>
                                                </div>
                                                {/* Card Body */}
                                                <div className="card-body px-0 py-3">
                                                    Renouncing the ownership means that we can never create any backdoors, remove liquidity,
                                                    mint new tokens, or anything else.
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="col-12 col-md-6">
                                        {/* Single Card */}
                                        <div className="card border-0">
                                                    {/* Card Header */}
                                                <div className="card-header bg-inherit border-0 p-0">
                                                <h2 className="mb-0">
                                                    <button style={{fontSize:'24px'}} className="btn px-0 py-2" type="button">
                                                        How do we help Dogs?
                                                    </button>
                                                </h2>
                                                </div>
                                                {/* Card Body */}
                                                <div className="card-body px-0 py-3">
                                                    The charity wallet takes a 3% tax on all transactions. 
                                                    At the end of every month, we donate the full value of the charity wallet to a selected
                                                    charity that helps our cause.
                                                </div>
                                            </div>
                                            <div className="card border-0">
                                                    {/* Card Header */}
                                                <div className="card-header bg-inherit border-0 p-0">
                                                <h2 className="mb-0">
                                                    <button style={{fontSize:'24px'}} className="btn px-0 py-2" type="button">
                                                        Is the liquidity locked?
                                                    </button>
                                                </h2>
                                                </div>
                                                {/* Card Body */}
                                                <div className="card-body px-0 py-3">
                                                    Yes, you can see proof here: 
                                                </div>
                                            </div>
                                            <div className="card border-0">
                                                    {/* Card Header */}
                                                <div className="card-header bg-inherit border-0 p-0">
                                                <h2 className="mb-0">
                                                    <button style={{fontSize:'24px'}} className="btn px-0 py-2" type="button">
                                                        Is the liquidity locked?
                                                    </button>
                                                </h2>
                                                </div>
                                                {/* Card Body */}
                                                <div className="card-body px-0 py-3">
                                                    Yes, you can see proof here: 
                                                </div>
                                            </div>
                                            <div className="card border-0">
                                                    {/* Card Header */}
                                                <div className="card-header bg-inherit border-0 p-0">
                                                <h2 className="mb-0">
                                                    <button style={{fontSize:'24px'}} className="btn px-0 py-2" type="button">
                                                        What is the contract address?
                                                    </button>
                                                </h2>
                                                </div>
                                                {/* Card Body */}
                                                <div className="card-body px-0 py-3">
                                                    Link
                                                </div>
                                            </div>
                                            <div className="card border-0">
                                                    {/* Card Header */}
                                                <div className="card-header bg-inherit border-0 p-0">
                                                <h2 className="mb-0">
                                                    <button style={{fontSize:'24px'}} className="btn px-0 py-2" type="button">
                                                        What is the charity wallet address?
                                                    </button>
                                                </h2>
                                                </div>
                                                {/* Card Body */}
                                                <div className="card-body px-0 py-3">
                                                    Link
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="row justify-content-center">
                                        <p className="text-body text-center pt-4 fw-5">{this.state.data.faqText} <a href="/#">{this.state.data.faqTextLink}</a></p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FaqSection;