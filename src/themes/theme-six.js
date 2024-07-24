import React, { Component } from 'react';

import Header from '../components/HeaderSection/Header';
import HeroSection from '../components/HeroSection/HeroSix';
import DiscoverSection from '../components/DiscoverSection/DiscoverPartner';
import FooterSection from '../components/FooterSection/Footer';

class ThemeSix extends Component {
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
                    <DiscoverSection />
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default ThemeSix;