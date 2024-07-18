import React, { Component } from 'react';

class FeatureSection extends Component {
    state = {
        data: {
            "heading": "What Makes sApp Different?",
            "headingFour": "Преимущества AiDoc",
            // "headingText": "Laptop view",
            // "headingTexttwo": "Phone view",
            "featureThumb": "/img/features_thumb.png"
        },
        featureDataTwo: [
            {
                "id": 1,
                "iconClass": "flaticon-tap",
                "title": "Интуитивно понятный веб-интерфейс для быстрого освоения",
                "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos."
            },
            {
                "id": 2,
                "iconClass": "flaticon-fingerprint",
                "title": "Надежный механизм аутентификации",
                "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos."
            },
            {
                "id": 3,
                "iconClass": "flaticon-notification",
                "title": "Индивидуальные личные кабинеты для каждого пользователя.",
                "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos."
            },
            {
                "id": 4,
                "iconClass": "flaticon-place",
                "title": "Работа в любой точке мира с любого устройства",
                "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos."
            },
            {
                "id": 5,
                "iconClass": "flaticon-settings",
                "title": "Интеграция с другими подсистемами",
                "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos."
            },
            {
                "id": 6,
                "iconClass": "flaticon-language",
                "title": "Многоязычная поддержка (русский, кыргызский и английский языки)",
                "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos."
            }
        ]
    }

    render() {
        return (
            <section id="features" className="section features-area bg-gray ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-6">
                            {/* Section Heading */}
                            <div className="section-heading text-center">
                                <h2>{this.state.data.headingFour}</h2>
                                <p className="d-none d-sm-block mt-4">{this.state.data.headingText}</p>
                                <p className="d-block d-sm-none mt-4">{this.state.data.headingTexttwo}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {this.state.featureDataTwo.map((item, idx) => {
                            return (
                            <div key={`ft_${idx}`} className="col-12 col-md-6 col-lg-4">
                                {/* Icon Box */}
                                <div className="icon-box text-center p-4">
                                {/* Featured Icon */}
                                <div className="featured-icon mb-3">
                                    <span className={item.iconClass} />
                                </div>
                                {/* Icon Text */}
                                <div className="icon-text">
                                    <h3 className="mb-2">{item.title}</h3>
                                    {/* <p>{item.text}</p> */}
                                </div>
                                </div>
                            </div>
                        );
                    })}
                    </div>
                </div>
            </section>
        );
    }
}

export default FeatureSection;