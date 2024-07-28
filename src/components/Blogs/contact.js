import React, { Component } from 'react';
import Header from '../HeaderSection/Header';
import Breadcrumb from './Breadcrumb';
import Contact from '../ContactSection/Contact'
import FooterSection from '../FooterSection/FooterTwo';

class BlogDetailsRightSidebar extends Component {
    render() {
        return (
            <div className="blog blog-right">
                {/*====== Scroll To Top Area Start ======*/}
                <div id="scrollUp" title="Scroll To Top">
                    <i className="fas fa-arrow-up" />
                </div>
                {/*====== Scroll To Top Area End ======*/}
                <div className="main">
                    <Header imageData={"/img/LogoAiSoft-white.png"} />
                    <Breadcrumb title="Blog Details - Right Sidebar" />
                    <Contact />
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default BlogDetailsRightSidebar;