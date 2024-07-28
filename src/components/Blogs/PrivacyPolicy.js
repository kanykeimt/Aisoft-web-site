import React, { Component } from 'react';
import Header from '../HeaderSection/Header';
import Breadcrumb from './PrivacyPolicyHeader';
import Sidebar from './Sidebar';
import BlogDetails from './PrivacyPolicyDetails';
import FooterSection from '../FooterSection/FooterTwo';

class BlogDetailsLeftSidebar extends Component {
    render() {
        return (
            <div className="blog">
                {/*====== Scroll To Top Area Start ======*/}
                <div id="scrollUp" title="Scroll To Top">
                    <i className="fas fa-arrow-up" />
                </div>
                {/*====== Scroll To Top Area End ======*/}
                <div className="main">
                    <Header imageData={"/img/LogoAisoft-white.png"} />
                    <Breadcrumb title="Политика конфиденциальности" />
                    <section id="blog" className="section blog-area ptb_50">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <BlogDetails />
                                </div>
                            </div>
                        </div>
                    </section>
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default BlogDetailsLeftSidebar;