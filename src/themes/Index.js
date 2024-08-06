import React, { Component } from 'react';

import Header from '../components/HeaderSection/Header';
import HeroSection from '../components/HeroSection/HeroOne';
import BrandingSection from "../components/BrandingSection/Branding";
import ServiceSection from '../components/ServiceSection/ServiceFour';
import DiscoverSection from '../components/DiscoverSection/DiscoverFour';
import ServiceSection2 from '../components/ServiceSection/ServiceFour2';
import Work from '../components/WorkSection/Work';
import ReviewSection from '../components/ReviewSection/ReviewOne';
import Team from '../components/TeamSection/Team';
import FooterSection from '../components/FooterSection/FooterTwo';

class Index extends Component {
    render() {
        return (
            <div>
                {/*====== Scroll To Top Area Start ======*/}
                <div id="scrollUp" title="Scroll To Top">
                    <i className="fas fa-arrow-up" />
                </div>
                {/*====== Scroll To Top Area End ======*/}
                <div className="main">
                    <Header imageData={"/img/LogoAiSoft-white.png"} />
                    <HeroSection />
                    <ServiceSection />
                    <DiscoverSection />
                    <ServiceSection2 />
                    <BrandingSection />
                    <Team />
                    <Work />
                    <ReviewSection />
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default Index;