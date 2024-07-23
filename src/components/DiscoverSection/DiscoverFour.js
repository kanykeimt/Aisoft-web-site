import React, { Component } from 'react';


class DiscoverSection extends Component {
    state = {
        data: {
            "headingSix": "EBilim - система управления учебным процессом",
            "buttonText": "Подробнее",
            "thumbSix": "/img/img/11.png"
        },
        serviceData: [
            {
                "id": 1,
                "iconClass": "fab fa-buffer",
                "text": "Простой и интуитивно понятный интерфейс для быстрого освоения."
              },
              {
                "id": 2,
                "iconClass": "fas fa-brush",
                "text": "Многоязычная поддержка (русский, кыргызский и английский языки)."
              },
              {
                "id": 3,
                "iconClass": "fas fa-burn",
                "text": "Гибкая настройка системы под потребности учебных заведений."
              },
              {
                "id": 4,
                "iconClass": "fas fa-cart-arrow-down",
                "text": "Личные кабинеты для каждого пользователя."
              },
              {
                "id": 5,
                "iconClass": "fas fa-cart-arrow-down",
                "text": "Надежный механизм аутентификации."
              }
        ]
    }

    render() {
        return (
            <section className="section discover-area bg-gray overflow-hidden ptb_100">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-md-8 col-lg-6 order-2 order-lg-1">
                        {/* Discover Thumb */}
                        <div className="service-thumb discover-thumb mx-auto text-center pt-5 pt-lg-0">
                        <img src={this.state.data.thumbSix} alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 order-1 order-lg-2">
                        {/* Discover Text */}
                        <div className="discover-text pt-4 pt-lg-0 px-0 px-lg-4">
                        <h2 className="pb-4" style={{ color: '#1ab394' }}>{this.state.data.headingSix}</h2>
                        {/* Service List */}
                        <ul className="service-list style-two">
                            {/* Single Service */}
                            {this.state.serviceData.map((item, idx) => {
                                return(
                                    <li key={`dfl_${idx}`} className="single-service py-2">
                                        <div className="service-text">
                                            <p>{item.text}</p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                        <a href="/ebilim" className="btn sApp-btn mt-4">{this.state.data.buttonText}</a>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default DiscoverSection;