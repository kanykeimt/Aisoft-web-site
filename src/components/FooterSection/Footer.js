import React, { Component } from 'react';


class FooterSection extends Component {
    state = {
        data: {
            "image": "/img/LogoAisoft.png",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae.",
            "linkText_1": "Useful Links",
            "linkText_2": "Product Help",
            "linkText_3": "Скачать"
        },
        iconList: [
            {
                "id": 1,
                "link": "facebook",
                "iconClass": "fab fa-facebook-f",
                "socialLink": "https://www.facebook.com/ebilimsoft/"
            },
            {
                "id": 2,
                "link": "twitter",
                "iconClass": "fab fa-instagram",
                "socialLink": "https://www.instagram.com/aisoft.kg?igsh=MXBtNWZtbnZ1eGZ1bw==    "
            },
            {
                "id": 3,
                "link": "google-plus",
                "iconClass": "fab fa-google-plus-g",
                "socialLink": "https://www.facebook.com/ebilimsoft/"
            },
            {
                "id": 4,
                "link": "vine",
                "iconClass": "fab fa-telegram",
                "socialLink": "https://www.facebook.com/ebilimsoft/"
            }
        ],
        footerList_1: [
            {
                "id": 1,
                "text": "Home"
            },
            {
                "id": 2,
                "text": "About Us"
            },
            {
                "id": 3,
                "text": "Services"
            },
            {
                "id": 4,
                "text": "Blog"
            },
            {
                "id": 5,
                "text": "Contact"
            }
        ],
        footerList_2: [
            {
                "id": 1,
                "text": "FAQ"
            },
            {
                "id": 2,
                "text": "Privacy Policy"
            },
            {
                "id": 3,
                "text": "Support"
            },
            {
                "id": 4,
                "text": "Terms & Conditions"
            },
            {
                "id": 5,
                "text": "Contact"
            }
        ],
        footerList_3: [
            {
                "id": 1,
                "image": "/img/google-play-black.png",
                "link": "https://play.google.com/store/apps/details?id=kg.ebilim&hl=ru"
            },
            {
                "id": 2,
                "image": "/img/app-store-black.png",
                "link": "https://apps.apple.com/us/app/ebilim/id6480111161"
            }
        ]
    }
    render() {
        return (
            <div>
                <div className="height-emulator d-none d-lg-block" />
                <footer className="footer-area footer-fixed">
                    {/* Footer Top */}
                    <div className="footer-top ptb_100">
                        <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-3">
                            {/* Footer Items */}
                            <div className="footer-items">
                                {/* Logo */}
                                <a className="navbar-brand" href="/#">
                                <img className="logo" src={this.state.data.image} alt="" />
                                </a>
                                <p className="mt-2 mb-3">{this.state.data.text}</p>
                                {/* Social Icons */}
                                <div className="social-icons d-flex">
                                    {this.state.iconList.map((item, idx) => {
                                        return(
                                            <a key={`fi_${idx}`} className={item.link} href={item.socialLink}>
                                                <i className={item.iconClass} />
                                                <i className={item.iconClass} />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                            {/* Footer Items */}
                            <div className="footer-items">
                                {/* Footer Title */}
                                <h3 className="footer-title mb-2">{this.state.data.linkText_1}</h3>
                                <ul>
                                    {this.state.footerList_1.map((item, idx) => {
                                        return(
                                            <li key={`flo_${idx}`} className="py-2"><a href="/#">{item.text}</a></li>
                                        );
                                    })}
                                </ul>
                            </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                            {/* Footer Items */}
                            <div className="footer-items">
                                {/* Footer Title */}
                                <h3 className="footer-title mb-2">{this.state.data.linkText_2}</h3>
                                <ul>
                                    {this.state.footerList_2.map((item, idx) => {
                                        return(
                                            <li key={`flt_${idx}`} className="py-2"><a href="/#">{item.text}</a></li>
                                        );
                                    })}
                                </ul>
                            </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                            {/* Footer Items */}
                            <div className="footer-items">
                                {/* Footer Title */}
                                <h3 className="footer-title mb-2">{this.state.data.linkText_3}</h3>
                                {/* Store Buttons */}
                                <div className="button-group store-buttons store-black d-flex flex-wrap">
                                    {this.state.footerList_3.map((item, idx) => {
                                        return(
                                            <a key={`flth_${idx}`} href={item.link}>
                                                <img src={item.image} alt="" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default FooterSection;