import React, { Component } from 'react';
import { Chrono } from "react-chrono";

const items = [
    {
        title: "May 2021",
   
        cardSubtitle:<div className='mr-2'><i className='fa fa-glass-cheers mr-2'/>Website Launch <br/> Public Coin Launch <br/> Whitepaper <br/> Influencer Marketing <br/><img src='/img/money-svgrepo-com.svg' alt='money' width='20px' className='mr-2'></img>First Monthly Donation</div> 
        // media: {
        //   type: "IMAGE",
        //   source: {
        //     url: "http://someurl/image.jpg"
        //   }
        // }
    },{
        title: "June 2021",
        cardSubtitle:<div className='mr-2'>Major Influencer Marketing<br/>Charity Partnerships<br/>AuditCoin<br/>CoinGecko Listing<br/>Live Coin Watch Listing<br/><img src='/img/money-svgrepo-com.svg' alt='money' width='20px' className='mr-2'></img>Second Monthly Donation</div>
    },{
        title: "July 2021",
      
        cardSubtitle:<div className='ml-2 mt-2'>CoinMarketCap Listing <br/> Major Exchange Listings<br/><img src='/img/money-svgrepo-com.svg' alt='money' width='20px' className='mr-2'></img>Third Monthly Donation<br/>More coming soon</div>
    },{
      title: "August 2021",
    
      cardSubtitle:<>More comming soon</>
  }
]

class ScreenshotSection extends Component {
   
    render() {
        return (
            <section id="roadmap" className="section screenshots-area ptb_100">
                <div className='container'>
                    <div className="row justify-content-center ">
                        <div className="col-12 col-lg-6">
                            {/* Work Content */}
                            <div className="work-content text-center">
                                <h2 className="text-dark">Roadmap</h2>
                                <p className="text-dark my-3 mt-sm-4 mb-sm-5">TEXT FOR ROADMAP</p>
                            </div>
                        </div>
                    </div>
                    <Chrono items={items} mode="VERTICAL"/>
                </div>
            </section>
        );
    }
}

export default ScreenshotSection;