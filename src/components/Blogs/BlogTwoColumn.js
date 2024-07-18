import React, { Component } from 'react';
import Blog from './Blog';
import FooterSection from '../FooterSection/FooterTwo';

class BlogTwoColumn extends Component {
    render() {
        return (
            <div className="blog">
                {/*====== Scroll To Top Area Start ======*/}
                <div id="scrollUp" title="Scroll To Top">
                    <i className="fas fa-arrow-up" />
                </div>
                {/*====== Scroll To Top Area End ======*/}
                <div className="main">
                    <section id="blog" className="section blog-area ptb_100">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-10 col-lg-6">
                                    {/* Section Heading */}
                                    <div className="section-heading text-center">
                                        <h2>Возможности системы</h2>
                                        {/* <p className="d-none d-sm-block mt-4">Laptop view</p>
                                        <p className="d-block d-sm-none mt-4">Mobile view</p> */}
                                    </div>
                                </div>
                            </div>
                            <Blog />
                        </div>
                    </section>
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default BlogTwoColumn;