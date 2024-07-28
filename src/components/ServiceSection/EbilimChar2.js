import React, { Component } from 'react';
class ServiceSection extends Component {
    state = {
        data: {
            "headingThree": "Автоматизация учебного процесса ",
            "headingThree2": "Еще не написано"
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
                                <h3 className="mb-4" style={{color: 'red'}}>{this.state.data.headingThree2}</h3>
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