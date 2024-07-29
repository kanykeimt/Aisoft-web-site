import React, { Component } from 'react';
class ServiceSection extends Component {
    state = {
        data: {
            "headingThree": "Автоматизация учебного процесса ",
            "headingThree2": "Дополнительные функции"
        },
        serviceData: [
            {
                "id": 1,
                "iconClass": "fab fa-buffer",
                "text": "Автоматизация создания и ведения учебных планов. "
            },
            {
                "id": 2,
                "iconClass": "fas fa-brush",
                "text": "Расчет учебных часов и нагрузки преподавательского состава (ППС). "
            },
            {
                "id": 3,
                "iconClass": "fas fa-burn",
                "text": "Формирование расписания занятий. "
            },
            {
                "id": 4,
                "iconClass": "fas fa-brush",
                "text": "Ведение электронного журнала посещаемости и успеваемости. "
            },
            {
                "id": 5,
                "iconClass": "fas fa-burn",
                "text": "Учет кадров и студентов. "
            },
            {
                "id": 6,
                "iconClass": "fas fa-burn",
                "text": "Управление библиотекой и общежитием. "
            }
        ],
        serviceData2: [
            {
                "id": 1,
                "iconClass": "fab fa-buffer",
                "text": "Рейтинговая оценка качества деятельности профессорско-преподавательского состава на основе результатов их работы."
            },
            {
                "id": 2,
                "iconClass": "fas fa-brush",
                "text": "Централизованная панель управления для быстрого доступа ко всем функциям системы и уведомлениям."
            },
            {
                "id": 3,
                "iconClass": "fas fa-burn",
                "text": "Инструменты для создания и проведения опросов и анкетирования студентов и преподавателей для сбора обратной связи и оценки качества образовательного процесса."
            }
        ]
    }

    render() {
        return (
            <section className="section service-area bg-inherit overflow-hidden ptb_50">
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

export default ServiceSection;