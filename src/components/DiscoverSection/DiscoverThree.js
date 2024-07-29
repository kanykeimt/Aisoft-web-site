import React, { Component } from 'react';
class DiscoverSection extends Component {
    state = {
        data: {
            "headingThree": "Интерактивное обучение ",
            "headingThree2": "Аналитика и отчеты "
        },
        serviceData: [
            {
                "id": 1,
                "iconClass": "fab fa-buffer",
                "text": "Интеграция с видеоконференциями для проведения онлайн-занятий."
            },
            {
                "id": 2,
                "iconClass": "fas fa-brush",
                "text": "Интерактивные форумы и чаты для общения между студентами и преподавателями."
            },
            {
                "id": 3,
                "iconClass": "fas fa-burn",
                "text": "Возможность создания и участия в дискуссиях и рабочих группах. "
            }
        ],
        serviceData2: [
            {
                "id": 1,
                "iconClass": "fab fa-buffer",
                "text": "Подробные отчеты о прогрессе студентов и результатах обучения."
            },
            {
                "id": 2,
                "iconClass": "fas fa-brush",
                "text": "Анализ посещаемости и активности студентов."
            },
            {
                "id": 3,
                "iconClass": "fas fa-burn",
                "text": "Инструменты для оценки эффективности учебы и программ. "
            }
        ]
    }
    render() {
        return (
            <section className="section discover-area bg-gray overflow-hidden ptb_50">
                <div className="container">
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

export default DiscoverSection;