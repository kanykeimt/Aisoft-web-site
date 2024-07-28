import React, { Component } from 'react';
class ServiceSection extends Component {
    state = {
        data: {
            "headingThree": "Управление курсами ",
            "headingThree2": "Оценка и тестирование "
        },
        serviceData: [
            {
                "id": 1,
                "iconClass": "fab fa-buffer",
                "text": "Создание, редактирование и управление курсами. "
            },
            {
                "id": 2,
                "iconClass": "fas fa-brush",
                "text": "Гибкая настройка учебных планов и программ. "
            },
            {
                "id": 3,
                "iconClass": "fas fa-burn",
                "text": "Возможность добавления различных типов контента: текстовые материалы, видео, аудио, интерактивные задания. "
            }
        ],
        serviceData2: [
            {
                "id": 1,
                "iconClass": "fab fa-buffer",
                "text": "Встроенная система тестирования и оценки знаний. "
            },
            {
                "id": 2,
                "iconClass": "fas fa-brush",
                "text": "Создание различных типов тестов и заданий: многовариантные вопросы, эссе, практические задания."
            },
            {
                "id": 3,
                "iconClass": "fas fa-burn",
                "text": "Автоматическая проверка и выставление оценок. "
            }
        ]
    }

    render() {
        return (
            <section className="section service-area bg-inherit overflow-hidden ptb_50">
                <div className="container">
                <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-6">
                            {/* Section Heading */}
                            <div className="section-heading text-center">
                                <h2>Основные характеристики системы</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-12 col-lg-6 order-2 order-lg-1">
                            {/* Service Text */}
                            <div className="service-text pt-4 pt-lg-0 px-0 px-lg-4">
                                <h3 className="mb-4">{this.state.data.headingThree}</h3>
                                {/* Service List */}
                                <ul className="service-list style-two">
                                    {/* Single Service */}
                                    {this.state.serviceData.map((item, idx) => {
                                        return (
                                            <li key={`sth_${idx}`} className="single-service py-2">
                                                <div className="service-text">
                                                    <p>{item.text}</p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 order-1 order-lg-2 d-none d-md-block">
                            {/* Service Text */}
                            <div className="service-text pt-4 pt-lg-0 px-0 px-lg-4">
                                <h3 className="mb-4">{this.state.data.headingThree2}</h3>
                                {/* Service List */}
                                <ul className="service-list style-two">
                                    {/* Single Service */}
                                    {this.state.serviceData2.map((item, idx) => {
                                        return (
                                            <li key={`sth_${idx}`} className="single-service py-2">
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

export default ServiceSection;