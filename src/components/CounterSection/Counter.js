import React, { Component } from 'react';

const data = [
    {
        count: "10",
        countHeading: "M",
        title:  "Holders"
    },
    {
        count: "23",
        countHeading: "K",
        title:  "Market Cap"
    },
    {
        count: "9",
        countHeading: "M",
        title:  "Price"
    },
    {
        count: "12",
        countHeading: "K",
        title:  "Total Suply"
    }
]

class Counter extends Component {
    render() {
        return (
            <section className="section counter-area ptb_50" style={{borderBottom:'1px solid whitesmoke'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        {data.map((item, idx) => {
                            return(
                                <div key={`c_${idx}`} className="col-5 col-sm-3 single-counter text-center">
                                    <div className="counter-inner p-3 p-md-0">
                                    {/* Counter Item */}
                                    <div className="counter-item d-inline-block mb-3">
                                        <span className="counter fw-7">{item.count}</span><span className="fw-7">{item.countHeading}</span>
                                    </div>
                                        <h5>{item.title}</h5>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default Counter;