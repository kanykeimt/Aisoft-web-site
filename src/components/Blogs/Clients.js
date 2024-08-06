import React, { Component } from 'react';

import Header from '../HeaderSection/Header';
import Breadcrumb from './PrivacyPolicyHeader';
import Blog from './BlogTwo';
import FooterSection from '../FooterSection/FooterTwo';

class Clients extends Component {
    render() {
        return (
            <div className="blog">
                {/*====== Scroll To Top Area Start ======*/}
                <div id="scrollUp" title="Scroll To Top">
                    <i className="fas fa-arrow-up" />
                </div>
                {/*====== Scroll To Top Area End ======*/}
                <div className="main">
                    <Header imageData={"/img/LogoAiSoft-white.png"} />
                    <Breadcrumb title="Клиенты" />
                    <section id="blog" className="section blog-area ptb_100">
                        <div className="container">
                            <Blog />
                        </div>
                    </section>
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default Clients;