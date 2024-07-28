import React, { Component } from 'react';

import Header from '../components/HeaderSection/Header';
import HeroSection from '../components/HeroSection/HeroFive';
import FeatureSection from '../components/Features/FeatureFive';
import DiscoverSection from '../components/DiscoverSection/DiscoverFive';
import Work from '../components/WorkSection/Work';
import FooterSection from '../components/FooterSection/FooterTwo';

class ThemeFive extends Component {
    render() {
        return (
            <div className="homepage-5">
                {/*====== Scroll To Top Area Start ======*/}
                <div id="scrollUp" title="Scroll To Top">
                    <i className="fas fa-arrow-up" />
                </div>
                {/*====== Scroll To Top Area End ======*/}
                <div className="main">
                    <Header imageData={"/img/LogoAisoft-white.png"} />
                    <HeroSection />
                    <FeatureSection />
                    <DiscoverSection />
                    <Work />
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default ThemeFive;