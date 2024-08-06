import React, { Component } from 'react';

import Header from '../components/HeaderSection/Header';
import HeroSection from '../components/HeroSection/HeroSix';
import FooterSection from '../components/FooterSection/FooterTwo';
import BrandingSection from "../components/BrandingSection/Branding";

class Partners extends Component {
    render() {
        return (
            <div className="homepage-6">
                {/*====== Scroll To Top Area Start ======*/}
                <div id="scrollUp" title="Scroll To Top">
                    <i className="fas fa-arrow-up" />
                </div>
                {/*====== Scroll To Top Area End ======*/}
                <div className="main">
                    <Header imageData={"/img/LogoAiSoft-white.png"} />
                    <HeroSection />
                    <BrandingSection />
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default Partners;