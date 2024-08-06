import React, { Component } from 'react';

import Header from '../components/HeaderSection/Header';
import HeroSection from '../components/HeroSection/HeroFour';
import FeatureSection from '../components/Features/FeatureSix';
import AiDocChar from '../components/DiscoverSection/AiDocChar';
import AiDocCharGray from '../components/DiscoverSection/AiDocCharGray';
import AiDocChar2 from '../components/DiscoverSection/AiDocChar2';
import Work from '../components/WorkSection/Work';
import FooterSection from '../components/FooterSection/FooterTwo';
import BlogTwoColumn from '../components/Blogs/BlogTwoColumn';

class AiDoc extends Component {
    render() {
        return (
            <div className="homepage-4">
                {/*====== Scroll To Top Area Start ======*/}
                <div id="scrollUp" title="Scroll To Top">
                    <i className="fas fa-arrow-up" />
                </div>
                {/*====== Scroll To Top Area End ======*/}
                <div className="main">
                    <Header imageData={"/img/LogoAiSoft-white.png"} />
                    <HeroSection />
                    <AiDocChar />
                    <AiDocCharGray />
                    <AiDocChar2 />
                    <BlogTwoColumn/>
                    <FeatureSection />
                    <Work />
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default AiDoc;