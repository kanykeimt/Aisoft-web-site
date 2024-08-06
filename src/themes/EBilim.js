import React, { Component } from 'react';

import Header from '../components/HeaderSection/Header';
import HeroSection from '../components/HeroSection/HeroThree';
import FeatureSection from '../components/Features/FeatureThree';
import EbilimChar from '../components/ServiceSection/EbilimChar';
import DiscoverSection from '../components/DiscoverSection/EbilimCharGray';
import EbilimChar2 from '../components/ServiceSection/EbilimChar2';
import Work from '../components/WorkSection/Work';
import QrInfo from '../components/ServiceSection/ServiceOne';
import EbilimMobile from '../components/DownloadSection/EbilimMobile';
import FooterSection from '../components/FooterSection/FooterTwo';

class EBilim extends Component {
    render() {
        return (
            <div className="homepage-3">
                {/*====== Scroll To Top Area Start ======*/}
                <div id="scrollUp" title="Scroll To Top">
                    <i className="fas fa-arrow-up" />
                </div>
                {/*====== Scroll To Top Area End ======*/}
                <div className="main">
                    <Header imageData={"/img/LogoAiSoft-white.png"} />
                    <HeroSection />
                    <FeatureSection />
                    <EbilimChar />
                    <DiscoverSection />
                    <EbilimChar2 />
                    <EbilimMobile />
                    <QrInfo />
                    <Work />
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default EBilim;