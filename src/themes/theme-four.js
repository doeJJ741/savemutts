import React, { Component } from 'react';

import Header from '../components/HeaderSection/Header';
import HeroSection from '../components/HeroSection/HeroFour';
import FeatureSection from '../components/Features/FeatureFour';
import ServiceSection from '../components/ServiceSection/ServiceFour';
import DiscoverSection from '../components/DiscoverSection/DiscoverFour';
import Work from '../components/WorkSection/Work';
import FaqSection from '../components/FaqSection/FaqOne';
import Download from '../components/DownloadSection/Download';
import Subscribe from '../components/SubscribeSection/Subscribe';
import FooterSection from '../components/FooterSection/Footer';
import Counter from '../components/CounterSection/Counter';

class ThemeFour extends Component {
    render() {
        return (
            <div className="homepage-4">
                {/*====== Scroll To Top Area Start ======*/}
                <div id="scrollUp" title="Scroll To Top">
                    <i className="fas fa-arrow-up" />
                </div>
                {/*====== Scroll To Top Area End ======*/}
                <div className="main">
                    <Header imageData={"/img/logo-white.png"} />
                    <HeroSection />
                    <Counter />
                    <ServiceSection />
                    <DiscoverSection />
                    <FeatureSection />
                    <Work />
                    {/* <ScreenshotSection /> */}
                    {/* <ReviewSection /> */}
                    {/* <PricingSection /> */}
                    <FaqSection />
                    <Download />
                    <Subscribe />
                    {/* <ContactSection /> */}
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default ThemeFour;