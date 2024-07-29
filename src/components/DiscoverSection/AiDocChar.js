import React, { Component } from 'react';

class DiscoverSection extends Component {
    state = {
        data: {
            "headingSix": "Управление документами ",
            "headingSix2": "Автоматизация документооборот",
            "thumbSix": "/img/discover_thumb_2.png"
        },
        serviceData: [
            {
                "id": 1,
                "iconClass": "fab fa-buffer",
                "text": "Централизованное хранилище документов с возможностью их классификации и структурирования."
            },
            {
                "id": 2,
                "iconClass": "fas fa-brush",
                "text": "Поддержка различных форматов файлов, включая текстовые документы, изображения, PDF и мультимедийные файлы."
            },
            {
                "id": 3,
                "iconClass": "fas fa-burn",
                "text": "Возможность создания и редактирования документов непосредственно в системе."
            }
        ],
        serviceData2: [
            {
                "id": 1,
                "iconClass": "fab fa-buffer",
                "text": "Автоматическое распределение и маршрутизация документов по заранее настроенным бизнес-процессам."
            },
            {
                "id": 2,
                "iconClass": "fas fa-brush",
                "text": "Настройка рабочих процессов для согласования, утверждения и подписания документов."
            },
            {
                "id": 3,
                "iconClass": "fas fa-burn",
                "text": "Уведомления и напоминания о задачах и сроках выполнения."
            }
        ]
    }
    render() {
        return (
            <section className="section discover-area overflow-hidden ptb_50">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-6">
                            {/* Section Heading */}
                            <div className="section-heading text-center">
                                <h2>Основные характеристики системы</h2>
                                {/* <p className="d-none d-sm-block mt-4">Laptop view</p>
                                        <p className="d-block d-sm-none mt-4">Mobile view</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-md-8 col-lg-6 order-2 order-lg-1">
                            {/* Discover Text */}
                            <div className="discover-text pt-4 pt-lg-0 px-0 px-lg-4">
                                <h3 className="pb-4">{this.state.data.headingSix}</h3>
                                {/* Service List */}
                                <ul className="service-list style-two">
                                    {/* Single Service */}
                                    {this.state.serviceData.map((item, idx) => {
                                        return (
                                            <li key={`dfl_${idx}`} className="single-service py-2">
                                                <div className="service-text">
                                                    <p>{item.text}</p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 order-1 order-lg-2">
                            <div className="discover-text pt-4 pt-lg-0 px-0 px-lg-4">
                                <h3 className="pb-4">{this.state.data.headingSix2}</h3>
                                <ul className="service-list style-two">
                                    {this.state.serviceData2.map((item, idx) => {
                                        return (
                                            <li key={`ds2_${idx}`} className="single-service py-2">
                                                <div className="service-text">
                                                    <p>{item.text}</p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default DiscoverSection;
