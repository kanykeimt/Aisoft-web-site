import React, { Component } from 'react';

class DiscoverSection extends Component {
    state = {
        data: {
            "headingSix": "Поиск и доступ к документам",
            "headingSix2": "Безопасность и защита данных",
            "thumbSix": "/img/discover_thumb_2.png"
        },
        serviceData: [
            {
                "id": 1,
                "iconClass": "fab fa-buffer",
                "text": "Быстрый и удобный поиск документов по ключевым словам, метаданным и содержимому."
            },
            {
                "id": 2,
                "iconClass": "fas fa-brush",
                "text": "Разграничение доступа к документам на основе ролей и прав пользователей. "
            },
            {
                "id": 3,
                "iconClass": "fas fa-burn",
                "text": "Возможность предоставления временного доступа к документам внешним пользователям."
            }
        ],
        serviceData2: [
            {
                "id": 1,
                "iconClass": "fab fa-buffer",
                "text": "Шифрование данных и управление доступом для обеспечения конфиденциальности информации. "
            },
            {
                "id": 2,
                "iconClass": "fas fa-brush",
                "text": " Логирование всех действий и изменений в документах для аудита. "
            },
            {
                "id": 3,
                "iconClass": "fas fa-burn",
                "text": "Регулярное создание резервных копий данных."
            }
        ]
    }
    render() {
        return (
            <section className="section discover-area bg-gray overflow-hidden ptb_50">
                <div className="container">
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
