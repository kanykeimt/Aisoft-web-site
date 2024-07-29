import React, { Component } from 'react';
import axios from 'axios';

class FooterSection extends Component {
    state = {
        data: {
            "image": "/img/LogoAiSoft.png",
            "text": "Совершенствуйтесь вместе с нами! "
        },
        iconList: [
            {
                "id": 1,
                "icon": "bg-white facebook",
                "iconClass": "fab fa-facebook-f",
                "link": "https://www.facebook.com/ebilimsoft"
              },
              {
                "id": 2,
                "icon": "bg-white twitter",
                "iconClass": "fab fa-instagram",
                "link": "https://www.instagram.com/aisoft.kg/"
              },
              {
                "id": 3,
                "icon": "bg-white google-plus",
                "iconClass": "fab fa-youtube",
                "link": "https://www.youtube.com/@e-Bilim"
              }
        ]
    }

    render() {
        return (
            <footer className="section inner-footer bg-gray ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-6">
                            {/* Footer Items */}
                            <div className="footer-items text-center">
                                {/* Logo */}
                                <a className="navbar-brand" href="/#">
                                    <img className="logo" src={this.state.data.image} alt="" />
                                </a>
                                <ul className="d-flex flex-column flex-sm-row justify-content-center">
                                    <li className="py-2 text-center"><a href="/#">{this.state.data.text}</a></li>
                                </ul>
                                {/* Social Icons */}
                                <div className="social-icons d-flex justify-content-center">
                                    {this.state.iconList.map((item, idx) => {
                                        return(
                                            <a key={`bdi_${idx}`} className={item.icon} href={item.link}>
                                                <i className={item.iconClass} />
                                                <i className={item.iconClass} />
                                            </a>
                                        );
                                    })}
                                </div>
                                <ul className="d-flex flex-column flex-sm-row justify-content-center">
                                    <li className="py-2 text-center"><a href="/privacypolicy">Политика конфиденциальности</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterSection;