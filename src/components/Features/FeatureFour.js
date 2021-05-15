import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js'

const DATA_COUNT = 5;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

const initData = {
    heading: "Tokenomics",
    headingText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.",
    headingTexttwo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati."
}

const data = [
    {
        image: "/img/money-bag-svgrepo-com.svg",
        title: "Earn More By Holding",
        content: "2% of each transaction is distributed back to you for holding SMUTT."
    },
    {
        image: "/img/stats-decrease-svgrepo-com.svg",
        title: "Decreasing Total Supply",
        content: "2% of each transaction is burned from the total supply."
    },
    {
        image: "/img/lock-svgrepo-com.svg",
        title: "Locked Liquidity Forever",
        content: "2% of each transaction is added to the token’s liquidity, which is locked forever."
    },
    {
        image: "/img/charity-dog-svgrepo-com.svg",
        title: "Support a Great Cause",
        content: "3% of each transaction is sent to our charity wallet, which at the end of each month is donated to a charity."
    }
]

const imageData = [
    {
        id: "1",
        image: "/img/screenshot_1.jpg"
    },
    {
        id: "2",
        image: "/img/screenshot_2.jpg"
    },
    {
        id: "3",
        image: "/img/screenshot_3.jpg"
    },
    {
        id: "4",
        image: "/img/screenshot_4.jpg"
    }
]

const datas = {
                             
    labels: ['Rewards', 'Burned', 'Locked', 'Donation'],
    datasets: [
      {
        label: 'Fee taxes',
        data: [22.22, 22.22, 22.22, 33.34],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
    tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            var dataset = data.datasets[tooltipItem.datasetIndex];
            var meta = dataset._meta[Object.keys(dataset._meta)[0]];
            var total = meta.total;
            var currentValue = dataset.data[tooltipItem.index];
            var percentage = parseFloat((currentValue/total*100).toFixed(1));
            return currentValue + ' (' + percentage + '%)';
          },
          title: function(tooltipItem, data) {
            return data.labels[tooltipItem[0].index];
          }
        }
      }
}

const options={
    legend: {
        labels: {
            fontSize: 0
        }
    },
    title: {
        display: true,
        text: ''
      },
      hover: {mode: null},
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            var dataset = data.datasets[tooltipItem.datasetIndex];
            var meta = dataset._meta[Object.keys(dataset._meta)[0]];
            var total = meta.total;
            var currentValue = dataset.data[tooltipItem.index];
            var percentage = parseFloat((currentValue/total*100).toFixed(1));
            return currentValue + ' (' + percentage + '%)';
          },
          title: function(tooltipItem, data) {
            return data.labels[tooltipItem[0].index];
          }
        }
      }
      
};

class FeatureSection extends Component {
    state = {
        initData: {},
        data: [],
        imageData: []
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            data: data,
            imageData: imageData
        })
    }
    render() {
        return (
            <section id="tokenomics" className="section features-area overflow-hidden mt-5 ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-6">
                        {/* Section Heading */}
                        <div className="section-heading text-center">
                        <h2>{this.state.initData.heading}</h2>
                        <p className="d-none d-sm-block mt-4">{this.state.initData.headingText}</p>
                        <p className="d-block d-sm-none mt-4">{this.state.initData.headingTexttwo}</p>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12 col-md-6">
                        <center><h4 className='pb-2'>Total fees on transactions 9%</h4></center>
                        <div className="pb-1" style={{overflow:'hidden'}}>
                            
                        {/* Work Slider */}
                        <Pie 
                            style={{marginTop:'-25px'}}
                            className="pb-1"
                            data={datas}
                            options={options}
                            
                        />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 pt-4 pt-md-0">
                        <ul className="features-item">
                            {this.state.data.map((item, idx) => {
                                return(
                                    <li key={`ff_${idx}`} className='mb-3' style={{backgroundColor:datas.datasets[0].backgroundColor[idx], borderRadius:'6px', border: '1px solid '+datas.datasets[0].borderColor[idx]}}>
                                        {/* Image Box */}
                                        <div className="image-box media icon-1 px-1 py-3 py-md-4">
                                        {/* Featured Image */}
                                        <div className="featured-img mr-3">
                                            <img className="avatar-sm" src={item.image} alt="" />
                                        </div>
                                        {/* Icon Text */}
                                        <div className="icon-text media-body align-self-center align-self-md-start">
                                            <h3 className="mb-2">{item.title}</h3>
                                            <p>{item.content}</p>
                                        </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FeatureSection;