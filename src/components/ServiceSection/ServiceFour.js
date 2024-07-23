import React, { Component } from 'react';

class ServiceSection extends Component {
    state = {
        data: {
            "headingFive": "AiDoc - система электронного документооборота",
            "buttonText": "Подробнее",
            "thumbFive": "/img/img/12.png"
        },
        serviceData: [
            {
                    "id": 1,
                    "iconClass": "fab fa-buffer",
                    "text": "Многосетевая программа, готовая к использованию сразу после установки, без дополнительных расходов."
                },
                {
                    "id": 2,
                    "iconClass": "fas fa-brush",
                    "text": "Интуитивно понятный веб-интерфейс для быстрого освоения."
                },
                {
                    "id": 3,
                    "iconClass": "fas fa-burn",
                    "text": "Поддержка всех устройств (ноутбуки, планшеты, смартфоны, пк)."
                },
                {
                    "id": 4,
                    "iconClass": "fas fa-cart-arrow-down",
                    "text": "Интеграция с другими подсистемами."
                },
                {
                  "id": 5,
                  "iconClass": "fas fa-brush",
                  "text": "Многоязычная поддержка (русский, кыргызский и английский языки)."
                }
        ]
    }
    render() {
        return (
            <section className="section service-area overflow-hidden ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12 col-lg-6 order-2 order-lg-1">
                        {/* Service Text */}
                        <div className="service-text pt-5 pt-lg-0 px-0 px-lg-4">
                        <h2 className=" mb-4" style={{ color: '#544e82' }}>{this.state.data.headingFive}</h2>
                        {/* Service List */}
                        <ul className="service-list style-two">
                            {/* Single Service */}
                            {this.state.serviceData.map((item, idx) => {
                                return(
                                    <li key={`sf_${idx}`} className="single-service py-2">
                                        <div className="service-text">
                                            <p>{item.text}</p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                        <a href="/aidoc" className="btn sApp-btn mt-4">{this.state.data.buttonText}</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-6 order-1 order-lg-2">
                        {/* Service Thumb */}
                        <div className="service-thumb mx-auto">
                        <img src={this.state.data.thumbFive} alt="" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceSection;